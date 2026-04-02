import type { GetProps } from "tamagui";
import type { View } from "tamagui";

/** MD3 FAB size */
export type FabSize = "small" | "regular" | "large";

/** MD3 FAB color scheme */
export type FabColor = "primary" | "surface" | "secondary" | "tertiary";

export type FabProps = Omit<GetProps<typeof View>, "children"> & {
  /** Material icon name */
  icon: string;
  /** FAB size. Default: "regular" */
  size?: FabSize;
  /** FAB color scheme. Default: "primary" */
  color?: FabColor;
  /** Optional label for extended FAB */
  label?: string;
  /** Callback when pressed */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
