export type DateFilterOption = {
  /** Unique value identifier */
  value: string;
  /** Display label */
  label: string;
  /** Optional icon name */
  icon?: string;
};

export type DateFilterChipsProps = {
  /** Filter options to display */
  options: DateFilterOption[];
  /** Currently selected value */
  selectedValue?: string;
  /** Callback when selection changes */
  onSelectionChange?: (value: string) => void;
  /** Whether the entire row is disabled */
  disabled?: boolean;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
