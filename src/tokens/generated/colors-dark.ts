/**
 * MD3 Dark Color Tokens
 * Auto-generated from Figma Variables via Token Studio
 * DO NOT EDIT — run the token pipeline to regenerate
 */
export const darkColors = {
  // Primary
  primary: "#D0BCFF",
  onPrimary: "#381E72",
  primaryContainer: "#4F378B",
  onPrimaryContainer: "#EADDFF",

  // Secondary
  secondary: "#CCC2DC",
  onSecondary: "#332D41",
  secondaryContainer: "#4A4458",
  onSecondaryContainer: "#E8DEF8",

  // Tertiary
  tertiary: "#EFB8C8",
  onTertiary: "#492532",
  tertiaryContainer: "#633B48",
  onTertiaryContainer: "#FFD8E4",

  // Error
  error: "#F2B8B5",
  onError: "#601410",
  errorContainer: "#8C1D18",
  onErrorContainer: "#F9DEDC",

  // Surface
  surface: "#141218",
  onSurface: "#E6E0E9",
  surfaceVariant: "#49454F",
  onSurfaceVariant: "#CAC4D0",
  surfaceContainerLowest: "#0F0D13",
  surfaceContainerLow: "#1D1B20",
  surfaceContainer: "#211F26",
  surfaceContainerHigh: "#2B2930",
  surfaceContainerHighest: "#36343B",

  // Outline
  outline: "#938F99",
  outlineVariant: "#49454F",

  // Inverse
  inverseSurface: "#E6E0E9",
  inverseOnSurface: "#313033",
  inversePrimary: "#6750A4",

  // Scrim
  scrim: "#000000",
  shadow: "#000000",
} as const;

export type DarkColorToken = keyof typeof darkColors;
