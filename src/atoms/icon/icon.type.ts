import type { ViewProps } from "react-native";

/** MD3 Icon size variants (px) */
export type IconSize = 20 | 24 | 40 | 48;

/** Material Icons glyph name */
export type IconName = string;

export type IconProps = {
  /** Material Icons glyph name */
  name: IconName;
  /** Icon size in px. Default: 24 */
  size?: IconSize;
  /** Icon color — accepts theme token or hex. Default: "$onSurface" */
  color?: string;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
} & Pick<ViewProps, "style">;
