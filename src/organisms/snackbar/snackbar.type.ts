export type SnackbarProps = {
  /** Whether the snackbar is visible */
  visible: boolean;
  /** Message text to display */
  message: string;
  /** Optional action button label */
  actionLabel?: string;
  /** Callback when action button is pressed */
  onAction?: () => void;
  /** Show close icon button. Default: false */
  showCloseIcon?: boolean;
  /** Callback when snackbar is dismissed (close icon or auto-hide) */
  onDismiss?: () => void;
  /** Auto-hide duration in ms. Default: 4000. Set 0 for indefinite. */
  duration?: number;
  /** Number of text lines. "two" increases height and wraps action below. Default: "single".
   *  Note: the "two" variant caps message display at 2 lines (MD3 constraint); overflow is truncated with an ellipsis. */
  lines?: "single" | "two";
  /** Test ID for testing */
  testID?: string;
};
