import { createTamagui, createTokens } from "tamagui";
import { createInterFont } from "@tamagui/font-inter";
import { shorthands } from "@tamagui/shorthands";
import { createAnimations } from "@tamagui/animations-react-native";
import { colors } from "./generated/colors";
import { darkColors } from "./generated/colors-dark";
import { spacing } from "./generated/spacing";
import { fontSize, lineHeight } from "./generated/typography";
import { radii } from "./generated/radii";

const animations = createAnimations({
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  standard: {
    type: "spring",
    damping: 20,
    mass: 1,
    stiffness: 200,
  },
  emphasized: {
    type: "spring",
    damping: 15,
    mass: 1,
    stiffness: 150,
  },
});

const interFont = createInterFont();

const tokens = createTokens({
  color: {
    ...colors,
    outlineColor: colors.outline,
    outlineVariantColor: colors.outlineVariant,
  },
  space: { ...spacing, true: spacing.md },
  size: { ...spacing, true: spacing.md },
  radius: radii,
  zIndex: {
    none: 0,
    xs: 100,
    sm: 200,
    md: 300,
    lg: 400,
    xl: 500,
    true: 300,
  },
});

const lightTheme = Object.fromEntries(
  Object.entries({
    ...colors,
    outlineColor: colors.outline,
    outlineVariantColor: colors.outlineVariant,
  }).map(([key, value]) => [key, value]),
);

const darkTheme = Object.fromEntries(
  Object.entries({
    ...darkColors,
    outlineColor: darkColors.outline,
    outlineVariantColor: darkColors.outlineVariant,
  }).map(([key, value]) => [key, value]),
);

const config = createTamagui({
  tokens,
  themes: { light: lightTheme, dark: darkTheme },
  shorthands,
  animations,
  fonts: {
    heading: interFont,
    body: interFont,
    label: interFont,
  },
  settings: {
    allowedStyleValues: "somewhat-strict-web",
    autocomplete: "native",
  },
  media: {
    sm: { maxWidth: 600 },
    md: { maxWidth: 900 },
    lg: { maxWidth: 1200 },
  },
});

export type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
