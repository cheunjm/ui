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
  /** Test ID for testing */
  testID?: string;
};
