/** MD3 Slider type: continuous or discrete (with tick marks) */
export type SliderType = "continuous" | "discrete";

/** MD3 Slider variant: single thumb or dual-thumb range */
export type SliderVariant = "continuous" | "range";

export type SliderProps = {
  /** Slider type. Default: "continuous" */
  type?: SliderType;
  /** Current value */
  value?: number;
  /** Minimum value. Default: 0 */
  min?: number;
  /** Maximum value. Default: 100 */
  max?: number;
  /** Step size (discrete only). Default: 1 */
  step?: number;
  /** Show value label above thumb. Default: false */
  showLabel?: boolean;
  /** Whether slider is disabled */
  disabled?: boolean;
  /** Callback when value changes */
  onValueChange?: (value: number) => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Accessibility hint describing the result of adjusting the slider */
  accessibilityHint?: string;
  testID?: string;
  /** Slider variant. "range" shows two thumbs. Default: "continuous" */
  variant?: SliderVariant;
  /** Initial low value for range variant */
  lowValue?: number;
  /** Initial high value for range variant */
  highValue?: number;
  /** Callback for range variant value changes */
  onRangeChange?: (low: number, high: number) => void;
};
