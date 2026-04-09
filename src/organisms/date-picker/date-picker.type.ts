export type DatePickerMode = "calendar" | "input";

/** Selection mode for date picker */
export type DatePickerSelectionMode = "single" | "range";

export type DatePickerProps = {
  /** Whether the picker is visible */
  visible: boolean;
  /** Currently selected date (single mode) */
  value?: Date;
  /** Selection mode. Default: "single" */
  selectionMode?: DatePickerSelectionMode;
  /** Start date for range selection */
  startDate?: Date;
  /** End date for range selection */
  endDate?: Date;
  /** Callback when date is confirmed (single mode) */
  onConfirm: (date: Date) => void;
  /** Callback when date range is confirmed (range mode) */
  onConfirmRange?: (start: Date, end: Date) => void;
  /** Callback to dismiss without selecting */
  onDismiss: () => void;
  /** Initial display mode. Default: "calendar" */
  mode?: DatePickerMode;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Test ID */
  testID?: string;
};
