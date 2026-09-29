import { colors } from "./generated/colors";
import { darkColors } from "./generated/colors-dark";
import { spacing } from "./generated/spacing";
import { radii } from "./generated/radii";
import { fontSize, lineHeight, letterSpacing } from "./generated/typography";
import { DISABLED_OPACITY } from "./custom/interaction";

function buildTheme(themeColors: Record<keyof typeof colors, string>) {
  return {
    colors: {
      ...themeColors,
      outlineColor: themeColors.outline,
      outlineVariantColor: themeColors.outlineVariant,
    },
    spacing: { ...spacing, true: spacing.md },
    radii,
    fontSize,
    lineHeight,
    letterSpacing,
    opacity: {
      disabled: DISABLED_OPACITY,
    },
    fontFamily: {
      body: "Pretendard-Regular",
      label: "Pretendard-Medium",
    },
  };
}

export const lightTheme = buildTheme(colors);
export const darkTheme = buildTheme(darkColors);

export type AppTheme = typeof lightTheme;

// Registers this package's themes with react-native-unistyles so
// StyleSheet.create's theme callback typechecks within this package,
// independent of whether the consuming app has done its own augmentation.
// Consuming apps augmenting UnistylesThemes with their own theme keys merge
// cleanly with this declaration (TS interface merging).
declare module "react-native-unistyles" {
  export interface UnistylesThemes {
    light: AppTheme;
    dark: AppTheme;
  }
}
