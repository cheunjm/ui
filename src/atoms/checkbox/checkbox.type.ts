import type { GetProps } from "tamagui";
import type { View } from "tamagui";

/** MD3 Checkbox visual state */
export type CheckboxState = "checked" | "unchecked" | "indeterminate";

export type CheckboxProps = Omit<GetProps<typeof View>, "children"> & {
  /** Checkbox state. Default: "unchecked" */
  state?: CheckboxState;
  /** Whether checkbox shows error styling */
  error?: boolean;
  /** Whether checkbox is disabled */
  disabled?: boolean;
  /** Callback when checkbox is pressed */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
