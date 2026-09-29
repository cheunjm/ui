import type { AppTheme } from "./unistyles.theme";

/**
 * Resolves a spacing value that may be a number or a Tamagui-style
 * "$tokenName" reference (kept for backward compatibility with call sites
 * that predate the Unistyles migration).
 */
export function resolveSpacing(
  value: number | string | undefined,
  theme: AppTheme,
): number | string | undefined {
  if (value == null || typeof value === "number") return value;
  if (!value.startsWith("$")) return value;
  const key = value.slice(1) as keyof AppTheme["spacing"];
  return (theme.spacing[key] as number | undefined) ?? value;
}
