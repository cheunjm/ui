import type { ReactNode } from "react";

/** MD3 SideSheet variant */
export type SideSheetVariant = "modal" | "standard";

export type SideSheetProps = {
  open: boolean;
  onClose: () => void;
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
