export type DatePickerMode = "calendar" | "input";

export type DatePickerProps = {
  /** Whether the picker is visible */
  visible: boolean;
  /** Currently selected date */
  value?: Date;
  /** Callback when date is confirmed */
  onConfirm: (date: Date) => void;
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
