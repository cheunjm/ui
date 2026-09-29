import type { ViewProps } from "react-native";

/** MD3 Divider orientation */
export type DividerOrientation = "horizontal" | "vertical";

/** MD3 Divider inset variant */
export type DividerInset = "none" | "insetLeft" | "insetRight" | "insetBoth";

export type DividerProps = Omit<ViewProps, "children"> & {
  /** Divider orientation. Default: "horizontal" */
  orientation?: DividerOrientation;
  /** Inset variant — adds 16px margin on specified side(s). Default: "none" */
  inset?: DividerInset;
  /** Background color override, or a legacy "$tokenName" theme reference. */
  backgroundColor?: string;
};
