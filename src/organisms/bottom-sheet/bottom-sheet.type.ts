import type { ReactNode } from "react";

/** MD3 BottomSheet variant */
export type BottomSheetVariant = "modal" | "standard";

export type BottomSheetProps = {
  /** Whether the bottom sheet is visible */
  visible: boolean;
  /** MD3 bottom sheet variant. Default: "modal" */
  variant?: BottomSheetVariant;
  /** Called when the sheet is dismissed (scrim tap or drag) */
  onDismiss?: () => void;
  /** Whether to show the drag handle. Default: true */
  showDragHandle?: boolean;
  /** Content rendered inside the sheet */
  children?: ReactNode;
  /** Test ID for testing */
  testID?: string;
};
