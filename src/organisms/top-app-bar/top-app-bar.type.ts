import type { GetProps } from "tamagui";
import type { XStack } from "tamagui";

/** MD3 TopAppBar type variants */
export type TopAppBarType =
  | "center-aligned"
  | "small"
  | "medium"
  | "large";

/** Action item for trailing icon buttons */
export type TopAppBarAction = {
  /** Material Icons glyph name */
  icon: string;
  /** Callback when the action is pressed */
  onPress: () => void;
  /** Accessibility label for the action */
  accessibilityLabel?: string;
};

export type TopAppBarProps = Omit<
  GetProps<typeof XStack>,
  "children"
> & {
  /** MD3 top app bar type. Default: "small" */
  type?: TopAppBarType;
  /** Title text */
  title: string;
  /** Navigation icon name (e.g. "menu", "arrow-back"). Optional */
  navigationIcon?: string;
  /** Callback when navigation icon is pressed */
  onNavigationPress?: () => void;
  /** Trailing action icons — up to 3 */
  actions?: TopAppBarAction[];
  /** Whether the bar is elevated (scroll state). Default: false */
  elevated?: boolean;
};
