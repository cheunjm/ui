import type { AppTheme } from "./unistyles.theme";

/**
 * Resolves a color value that may be a raw color string or a Tamagui-style
 * "$tokenName" reference (kept for backward compatibility with call sites
 * that predate the Unistyles migration).
 */
export function resolveColor(
  color: string | undefined,
  theme: AppTheme,
): string | undefined {
  if (!color) return color;
  if (!color.startsWith("$")) return color;
  const key = color.slice(1) as keyof AppTheme["colors"];
  return (theme.colors[key] as string | undefined) ?? color;
}
