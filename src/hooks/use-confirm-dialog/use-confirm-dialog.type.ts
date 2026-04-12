export type ShowConfirmDialogOptions = {
  /** Dialog title */
  title: string;
  /** Dialog body message */
  message: string;
  /** Confirm button label. Default: "확인" */
  confirmLabel?: string;
  /** Dismiss button label. Default: "취소" */
  dismissLabel?: string;
  /** Callback when confirm is pressed */
  onConfirm: () => void;
  /** Callback when dismissed (optional) */
  onDismiss?: () => void;
};

export type UseConfirmDialogReturn = {
  /** Imperatively show the confirm dialog */
  showConfirmDialog: (options: ShowConfirmDialogOptions) => void;
  /** Render this portal in your view's JSX to enable the dialog */
  ConfirmDialogPortal: () => React.ReactElement | null;
};
