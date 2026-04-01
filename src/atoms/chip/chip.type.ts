import type { GetProps } from "tamagui";
import type { View } from "tamagui";

/** MD3 Chip type */
export type ChipType = "assist" | "filter" | "input" | "suggestion";

export type ChipProps = Omit<GetProps<typeof View>, "children"> & {
  /** Chip label text */
  label: string;
  /** Chip type. Default: "assist" */
  type?: ChipType;
  /** Whether chip is selected (filter type only). Default: false */
  selected?: boolean;
  /** Leading icon name (Material Icons) */
  leadingIcon?: string;
  /** Trailing icon name (input type only — typically "close") */
  trailingIcon?: string;
  /** Whether chip is disabled */
  disabled?: boolean;
  /** Callback when pressed */
  onPress?: () => void;
  /** Callback when trailing icon pressed (input type) */
  onTrailingIconPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
