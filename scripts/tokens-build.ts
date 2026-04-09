/**
 * Token builder — .figma-raw/ JSON → src/tokens/generated/*.ts
 *
 * Reads the intermediate JSON produced by tokens-fetch.ts and generates
 * TypeScript files that exactly match the hand-authored format
 * (as const objects + type aliases).
 *
 * Usage:  npx tsx scripts/tokens-build.ts
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ── Paths ────────────────────────────────────────────────────────────
const RAW_DIR = join(process.cwd(), "src/tokens/.figma-raw");
const OUT_DIR = join(process.cwd(), "src/tokens/generated");

// ── Types for intermediate JSON ──────────────────────────────────────
interface TokenLeaf {
  $value: string | number;
  $type: "color" | "number";
  $description?: string;
}

type TokenTree = { [key: string]: TokenLeaf | TokenTree };

function isLeaf(node: unknown): node is TokenLeaf {
  return typeof node === "object" && node !== null && "$value" in node;
}

function readJson(name: string): TokenTree {
  const filePath = join(RAW_DIR, `${name}.json`);
  return JSON.parse(readFileSync(filePath, "utf-8")) as TokenTree;
}

// ── Helpers ──────────────────────────────────────────────────────────
const HEADER = (title: string, extra?: string) =>
  [
    "/**",
    ` * MD3 ${title} Tokens`,
    " * Auto-generated from Figma Variables — DO NOT EDIT",
    " * Regenerate: npm run tokens:sync",
    extra ? ` *\n * ${extra}` : undefined,
    " */",
  ]
    .filter(Boolean)
    .join("\n");

function propKey(key: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
}

function indent(s: string, n = 2): string {
  const pad = " ".repeat(n);
  return s
    .split("\n")
    .map((l) => (l.trim() ? pad + l : l))
    .join("\n");
}

// ── Color builder ────────────────────────────────────────────────────

/** Explicit key order within each group to guarantee stable output. */
const COLOR_GROUP_ORDER: Record<string, string[]> = {
  Surface: [
    "surface", "onSurface", "surfaceVariant", "onSurfaceVariant",
    "surfaceContainerLowest", "surfaceContainerLow", "surfaceContainer",
    "surfaceContainerHigh", "surfaceContainerHighest",
  ],
};

const COLOR_GROUPS: Array<{ name: string; test: (k: string) => boolean }> = [
  { name: "Primary", test: (k) => /^(primary|onPrimary)/.test(k) },
  { name: "Secondary", test: (k) => /^(secondary|onSecondary)/.test(k) },
  { name: "Tertiary", test: (k) => /^(tertiary|onTertiary)/.test(k) },
  { name: "Error", test: (k) => /^(error|onError)/.test(k) },
  {
    name: "Surface",
    test: (k) => /^(surface|onSurface)/.test(k),
  },
  { name: "Outline", test: (k) => /^outline/.test(k) },
  { name: "Inverse", test: (k) => /^inverse/.test(k) },
  { name: "Scrim", test: (k) => k === "scrim" || k === "shadow" },
];

function buildColors(tokens: TokenTree): string {
  const lines: string[] = [];
  const used = new Set<string>();

  for (const group of COLOR_GROUPS) {
    const matched = Object.keys(tokens).filter(
      (k) => isLeaf(tokens[k]) && group.test(k),
    );
    if (matched.length === 0) continue;

    // Apply explicit ordering if defined, otherwise keep source order
    const order = COLOR_GROUP_ORDER[group.name];
    const members = order
      ? order.filter((k) => matched.includes(k))
      : matched;

    lines.push(`  // ${group.name}`);
    for (const key of members) {
      const leaf = tokens[key] as TokenLeaf;
      lines.push(`  ${propKey(key)}: "${leaf.$value}",`);
      used.add(key);
    }
    lines.push("");
  }

  // Catch any ungrouped tokens
  for (const key of Object.keys(tokens)) {
    if (used.has(key) || !isLeaf(tokens[key])) continue;
    const leaf = tokens[key] as TokenLeaf;
    lines.push(`  ${propKey(key)}: "${leaf.$value}",`);
  }

  // Remove trailing blank line inside object
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
    lines.pop();
  }

  return [
    HEADER("Color"),
    `export const colors = {`,
    ...lines,
    "} as const;",
    "",
    "export type ColorToken = keyof typeof colors;",
    "",
  ].join("\n");
}

// ── Numeric object builder (spacing, radii, elevation) ───────────────
function buildNumericObject(
  title: string,
  exportName: string,
  typeName: string,
  tokens: TokenTree,
  headerExtra?: string,
): string {
  const lines: string[] = [];

  for (const key of Object.keys(tokens)) {
    const leaf = tokens[key];
    if (!isLeaf(leaf)) continue;

    if (leaf.$description) {
      lines.push(`  /** ${leaf.$description} */`);
    } else {
      lines.push(`  /** ${leaf.$value}px */`);
    }
    lines.push(`  ${propKey(key)}: ${leaf.$value},`);
  }

  return [
    HEADER(title, headerExtra),
    `export const ${exportName} = {`,
    ...lines,
    "} as const;",
    "",
    `export type ${typeName} = keyof typeof ${exportName};`,
    "",
  ].join("\n");
}

// ── Typography builder ───────────────────────────────────────────────
function buildTypography(tokens: TokenTree): string {
  const groups = ["fontSize", "lineHeight", "letterSpacing"] as const;
  const sections: string[] = [HEADER("Typography"), ""];

  for (const group of groups) {
    const subtree = tokens[group];
    if (!subtree || isLeaf(subtree)) continue;

    const lines: string[] = [];
    for (const key of Object.keys(subtree)) {
      const leaf = (subtree as TokenTree)[key];
      if (!isLeaf(leaf)) continue;
      lines.push(`  ${propKey(key)}: ${leaf.$value},`);
    }

    sections.push(
      `export const ${group} = {`,
      ...lines,
      "} as const;",
      "",
    );
  }

  sections.push("export type TypographyToken = keyof typeof fontSize;", "");
  return sections.join("\n");
}

// ── Main ─────────────────────────────────────────────────────────────
function main() {
  if (!existsSync(RAW_DIR)) {
    console.error(`Error: ${RAW_DIR} not found. Run tokens:fetch first.`);
    process.exit(1);
  }

  mkdirSync(OUT_DIR, { recursive: true });

  const builds: Array<{ file: string; source: string; builder: () => string }> =
    [
      {
        file: "colors.ts",
        source: "colors",
        builder: () => buildColors(readJson("colors")),
      },
      {
        file: "spacing.ts",
        source: "spacing",
        builder: () =>
          buildNumericObject(
            "Spacing",
            "spacing",
            "SpacingToken",
            readJson("spacing"),
          ),
      },
      {
        file: "typography.ts",
        source: "typography",
        builder: () => buildTypography(readJson("typography")),
      },
      {
        file: "radii.ts",
        source: "shape",
        builder: () =>
          buildNumericObject(
            "Shape (Border Radius)",
            "radii",
            "RadiiToken",
            readJson("shape"),
          ),
      },
      {
        file: "elevation.ts",
        source: "elevation",
        builder: () =>
          buildNumericObject(
            "Elevation",
            "elevation",
            "ElevationToken",
            readJson("elevation"),
            "MD3 uses tonal elevation (surface tint overlay) + shadow elevation.\n * These values map to Android elevation dp / iOS shadow equivalents.",
          ),
      },
    ];

  for (const { file, source, builder } of builds) {
    const sourcePath = join(RAW_DIR, `${source}.json`);
    if (!existsSync(sourcePath)) {
      console.warn(`  Skipping ${file} — ${source}.json not found`);
      continue;
    }

    const content = builder();
    writeFileSync(join(OUT_DIR, file), content);
    console.log(`  ${file}`);
  }

  console.log("Build complete.");
}

main();
