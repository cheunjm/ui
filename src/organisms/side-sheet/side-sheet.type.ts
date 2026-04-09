import type { ReactNode } from "react";

/** MD3 SideSheet variant */
export type SideSheetVariant = "modal" | "standard";

export type SideSheetProps = {
  /** Whether the sheet is visible. Controls Modal visibility for `modal` variant; ignored for `standard` variant (consumer controls rendering). */
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  /** MD3 side sheet variant. Default: "modal" */
  variant?: SideSheetVariant;
  /** Optional header title */
  header?: string;
  /** Side to slide in from. Default: "right" */
  side?: "left" | "right";
  /** Sheet width in dp. Default: 256 */
  width?: number;
  testID?: string;
};
