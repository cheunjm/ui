export type TimePickerMode = "clock" | "input";
export type TimePeriod = "AM" | "PM";

export type TimePickerProps = {
  /** Whether the picker is visible */
  visible: boolean;
  /** Currently selected hour (0-23) */
  hour?: number;
  /** Currently selected minute (0-59) */
  minute?: number;
  /** Callback when time is confirmed */
  onConfirm: (hour: number, minute: number) => void;
  /** Callback to dismiss without selecting */
  onDismiss: () => void;
  /** Initial display mode. Default: "clock" */
  mode?: TimePickerMode;
  /** Whether to use 24-hour format. Default: false */
  use24Hour?: boolean;
  /** Test ID */
  testID?: string;
};
