import type { GetProps } from "tamagui";
import type { View } from "tamagui";

export type RadioButtonProps = Omit<GetProps<typeof View>, "children"> & {
  /** Whether radio is selected. Default: false */
  selected?: boolean;
  /** Whether radio shows error styling */
  error?: boolean;
  /** Whether radio is disabled */
  disabled?: boolean;
  /** Callback when pressed */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
