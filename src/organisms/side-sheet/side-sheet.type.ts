import type { ReactNode } from "react";

export type SideSheetProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Optional header title */
  header?: string;
  /** Side to slide in from. Default: "right" */
  side?: "left" | "right";
  /** Sheet width in dp. Default: 256 */
  width?: number;
  testID?: string;
};
