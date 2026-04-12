import type { ReactNode } from "react";

export type FullScreenDialogProps = {
  /** Whether the dialog is visible */
  visible: boolean;
  /** Title displayed in the header bar */
  title: string;
  /** Label for the action button (e.g., "Save", "Done") */
  actionLabel: string;
  /** Callback when action button is pressed */
  onAction: () => void;
  /** Callback when close (X) button is pressed */
  onClose: () => void;
  /** Whether the action button is disabled. Default: false */
  actionDisabled?: boolean;
  /** Scrollable body content */
  children?: ReactNode;
  /** Whether to wrap body in KeyboardAvoidingView (recommended for forms). Default: false */
  keyboardAvoiding?: boolean;
  /** Test ID */
  testID?: string;
};
