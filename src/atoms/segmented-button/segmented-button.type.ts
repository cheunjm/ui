export type SegmentedButtonSegment = {
  /** Unique value for this segment */
  value: string;
  /** Display label */
  label: string;
  /** Optional icon name (Material Icons) */
  icon?: string;
  /** Whether this segment is disabled */
  disabled?: boolean;
};

export type SegmentedButtonProps = {
  /** Array of segments */
  segments: SegmentedButtonSegment[];
  /** Selected value(s) — string for single-select, string[] for multi-select */
  selected: string | string[];
  /** Whether multi-select is enabled. Default: false (single-select) */
  multiSelect?: boolean;
  /** Callback when selection changes */
  onSelectionChange?: (selected: string | string[]) => void;
  /** Whether entire group is disabled */
  disabled?: boolean;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
