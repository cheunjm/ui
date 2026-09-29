import type { ViewProps } from "react-native";

export type SwitchProps = Omit<ViewProps, "children"> & {
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
  /** Accessibility hint describing the result of toggling the switch */
  accessibilityHint?: string;
  testID?: string;
};
