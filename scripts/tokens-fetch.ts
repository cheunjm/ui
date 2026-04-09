/**
 * Figma Variables → intermediate JSON
 *
 * Converts Figma Plugin API output into normalised JSON files
 * that tokens-build.ts consumes.
 *
 * Usage:
 *   npx tsx scripts/tokens-fetch.ts --input <plugin-output.json>
 *
 * The input JSON is produced by the Figma Plugin API snippet below.
 * Run it via Claude Code (`use_figma` MCP tool) or paste into Figma's
 * developer console.
 *
 * ── Figma Plugin snippet ─────────────────────────────────────────
 *
 *   const collections = await figma.variables.getLocalVariableCollectionsAsync();
 *   const result = {};
 *   for (const c of collections) {
 *     const vars = [];
 *     for (const id of c.variableIds) {
 *       const v = await figma.variables.getVariableByIdAsync(id);
 *       if (!v) continue;
 *       vars.push({
 *         name: v.name,
 *         resolvedType: v.resolvedDataType,
 *         description: v.description || "",
 *         value: v.valuesByMode[c.defaultModeId],
 *       });
 *     }
 *     result[c.name] = { name: c.name, modes: c.modes,
 *       defaultModeId: c.defaultModeId, variables: vars };
 *   }
 *   return JSON.stringify(result, null, 2);
 *
 * ── End snippet ──────────────────────────────────────────────────
 *
 * Tokens file: https://www.figma.com/design/81sGJB0y1lYCDY5oB35aBA/tokens
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ── Types ────────────────────────────────────────────────────────────
interface FigmaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface PluginVariable {
  name: string;
  resolvedType?: string;
  description: string;
  value: FigmaColor | number | string | boolean;
}

interface PluginCollection {
  name: string;
  modes: Array<{ modeId: string; name: string }>;
  defaultModeId: string;
  variables: PluginVariable[];
}

type PluginOutput = Record<string, PluginCollection>;

interface TokenLeaf {
  $value: string | number;
  $type: "color" | "number";
  $description?: string;
}

type TokenTree = { [key: string]: TokenLeaf | TokenTree };

// ── Collection → output file name ────────────────────────────────────
const COLLECTION_MAP: Record<string, string> = {
  "md.sys.color": "colors",
  "md.sys.spacing": "spacing",
  "md.sys.typography": "typography",
  "md.sys.shape": "shape",
  "md.sys.elevation": "elevation",
};

// ── Token descriptions (hardcoded for non-Enterprise plans) ──────────
const SPACING_DESC: Record<string, string> = {
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "32px",
  "4xl": "40px",
  "5xl": "48px",
  "6xl": "64px",
};

const SHAPE_DESC: Record<string, string> = {
  none: "0px — sharp corners",
  xs: "4px — extra small rounding",
  sm: "8px — small rounding",
  md: "12px — medium rounding",
  lg: "16px — large rounding",
  xl: "20px",
  "2xl": "28px — extra large rounding",
  full: "9999px — fully rounded (pill)",
};

const ELEVATION_DESC: Record<string, string> = {
  level0: "Level 0 — no elevation",
  level1: "Level 1 — 1dp shadow",
  level2: "Level 2 — 3dp shadow",
  level3: "Level 3 — 6dp shadow",
  level4: "Level 4 — 8dp shadow",
  level5: "Level 5 — 12dp shadow",
};

const DESCRIPTIONS: Record<string, Record<string, string>> = {
  spacing: SPACING_DESC,
  shape: SHAPE_DESC,
  elevation: ELEVATION_DESC,
};

// ── Helpers ──────────────────────────────────────────────────────────
function isColor(v: unknown): v is FigmaColor {
  return (
    typeof v === "object" && v !== null && "r" in v && "g" in v && "b" in v
  );
}

function rgbaToHex(c: FigmaColor): string {
  const hex = (n: number) =>
    Math.round(n * 255)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();
  return `#${hex(c.r)}${hex(c.g)}${hex(c.b)}`;
}

/** Round to avoid floating-point noise (e.g. 0.15000000596046448 → 0.15) */
function cleanNumber(n: number): number {
  return Math.round(n * 1000) / 1000;
}

function setNested(obj: TokenTree, path: string[], leaf: TokenLeaf): void {
  let cursor: TokenTree = obj;
  for (let i = 0; i < path.length - 1; i++) {
    if (!cursor[path[i]] || "$value" in (cursor[path[i]] as TokenLeaf)) {
      cursor[path[i]] = {};
    }
    cursor = cursor[path[i]] as TokenTree;
  }
  cursor[path[path.length - 1]] = leaf;
}

// ── Sort order for spacing/shape tokens ──────────────────────────────
const SIZE_ORDER = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "full",
];

function sortBySize(vars: PluginVariable[]): PluginVariable[] {
  return [...vars].sort((a, b) => {
    const ai = SIZE_ORDER.indexOf(a.name);
    const bi = SIZE_ORDER.indexOf(b.name);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.name.localeCompare(b.name);
  });
}

// ── Typography sort — group by role in display order ─────────────────
const TYPO_ROLE_ORDER = [
  "displayLarge",
  "displayMedium",
  "displaySmall",
  "headlineLarge",
  "headlineMedium",
  "headlineSmall",
  "titleLarge",
  "titleMedium",
  "titleSmall",
  "labelLarge",
  "labelMedium",
  "labelSmall",
  "bodyLarge",
  "bodyMedium",
  "bodySmall",
];

function sortTypography(vars: PluginVariable[]): PluginVariable[] {
  const groups = new Map<string, PluginVariable[]>();
  for (const v of vars) {
    const [group] = v.name.split("/");
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group)!.push(v);
  }

  // Sort within each group by role order
  for (const [, list] of groups) {
    list.sort((a, b) => {
      const aRole = a.name.split("/")[1] ?? a.name;
      const bRole = b.name.split("/")[1] ?? b.name;
      const ai = TYPO_ROLE_ORDER.indexOf(aRole);
      const bi = TYPO_ROLE_ORDER.indexOf(bRole);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
  }

  // Emit in group order: fontSize, lineHeight, letterSpacing
  const ordered: PluginVariable[] = [];
  for (const group of ["fontSize", "lineHeight", "letterSpacing"]) {
    const list = groups.get(group);
    if (list) ordered.push(...list);
  }
  return ordered;
}

// ── Main ─────────────────────────────────────────────────────────────
function main() {
  const inputIdx = process.argv.indexOf("--input");
  if (inputIdx === -1 || !process.argv[inputIdx + 1]) {
    console.error(
      "Usage: npx tsx scripts/tokens-fetch.ts --input <plugin-output.json>",
    );
    console.error("");
    console.error("See the Figma Plugin snippet in this file's header comment");
    console.error("to produce the input JSON.");
    process.exit(1);
  }

  const inputPath = process.argv[inputIdx + 1];
  const raw: PluginOutput = JSON.parse(readFileSync(inputPath, "utf-8"));

  const outDir = join(process.cwd(), "src/tokens/.figma-raw");
  mkdirSync(outDir, { recursive: true });

  for (const [collectionName, collection] of Object.entries(raw)) {
    const outputName = COLLECTION_MAP[collectionName];
    if (!outputName) {
      console.warn(`  Skipping unknown collection: ${collectionName}`);
      continue;
    }

    const descMap = DESCRIPTIONS[outputName];
    const needsSort = ["spacing", "shape"].includes(outputName);
    const isTypo = outputName === "typography";

    const sorted = isTypo
      ? sortTypography(collection.variables)
      : needsSort
      ? sortBySize(collection.variables)
      : collection.variables;

    const tokens: TokenTree = {};

    for (const v of sorted) {
      const valueIsColor = isColor(v.value);
      const resolved = valueIsColor
        ? rgbaToHex(v.value as FigmaColor)
        : cleanNumber(v.value as number);

      const leaf: TokenLeaf = {
        $value: resolved,
        $type: valueIsColor ? "color" : "number",
      };

      // Use variable description, or fallback to hardcoded description map
      const desc = v.description || (descMap ? descMap[v.name] : undefined);
      if (desc) leaf.$description = desc;

      const parts = v.name.split("/");
      setNested(tokens, parts, leaf);
    }

    const outPath = join(outDir, `${outputName}.json`);
    writeFileSync(outPath, JSON.stringify(tokens, null, 2) + "\n");
    console.log(
      `  ${outputName}.json (${collection.variables.length} variables)`,
    );
  }

  console.log("Fetch complete.");
}

main();
