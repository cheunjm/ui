import type { GetProps } from "tamagui";
import type { View } from "tamagui";

export type SwitchProps = Omit<GetProps<typeof View>, "children"> & {
  /** Whether switch is on. Default: false */
  selected?: boolean;
  /** Show icon inside thumb. Default: false */
  showIcon?: boolean;
  /** Whether switch is disabled */
  disabled?: boolean;
  /** Callback when toggled */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
