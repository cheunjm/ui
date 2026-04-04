import type { ReactNode } from "react";

export type TooltipVariant = "plain" | "rich";
export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  /** Tooltip label text (plain) or title (rich) */
  label: string;
  /** Rich tooltip body text */
  description?: string;
  /** Tooltip style variant. Default: "plain" */
  variant?: TooltipVariant;
  /** Placement relative to trigger. Default: "top" */
  placement?: TooltipPlacement;
  /** The element that triggers the tooltip */
  children: ReactNode;
  /** Action button label (rich only) */
  actionLabel?: string;
  /** Action button press handler (rich only) */
  onAction?: () => void;
  /** Test ID */
  testID?: string;
};
