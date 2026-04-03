import { createTamagui, createTokens } from "tamagui";
import { createInterFont } from "@tamagui/font-inter";
import { shorthands } from "@tamagui/shorthands";
import { themes } from "@tamagui/themes";
import { createAnimations } from "@tamagui/animations-react-native";
import { colors } from "./generated/colors";
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
  color: colors,
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

const config = createTamagui({
  tokens,
  themes,
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
