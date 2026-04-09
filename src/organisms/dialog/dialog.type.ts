import type { ReactNode } from "react";

export type DialogProps = {
  /** Whether the dialog is visible */
  visible: boolean;
  /** Optional icon name (Material Icons) */
  icon?: string;
  /** Optional title text */
  title?: string;
  /** Dialog body content */
  children?: ReactNode;
  /** Confirm button label. Default: "OK" */
  confirmLabel?: string;
  /** Dismiss button label. Default: "Cancel" */
  dismissLabel?: string;
  /** Callback when confirm button is pressed */
  onConfirm?: () => void;
  /** Callback when dialog is dismissed (scrim tap or dismiss button) */
  onDismiss?: () => void;
  /** Whether body content is scrollable. Default: false */
  scrollable?: boolean;
  /** Test ID for testing */
  testID?: string;
};
