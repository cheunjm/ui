import type { GetProps } from "tamagui";
import type { View } from "tamagui";

/** MD3 Divider orientation */
export type DividerOrientation = "horizontal" | "vertical";

/** MD3 Divider inset variant */
export type DividerInset = "none" | "insetLeft" | "insetRight" | "insetBoth";

export type DividerProps = Omit<
  GetProps<typeof View>,
  "children" | "orientation" | "inset"
> & {
  /** Divider orientation. Default: "horizontal" */
  orientation?: DividerOrientation;
  /** Inset variant — adds 16px margin on specified side(s). Default: "none" */
  inset?: DividerInset;
};
