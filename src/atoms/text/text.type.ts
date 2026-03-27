import type { GetProps } from "tamagui";
import type { Text as TamaguiText } from "tamagui";

/** MD3 type scale roles */
export type TextRole = "display" | "headline" | "title" | "body" | "label";

/** MD3 type scale sizes */
export type TextSize = "large" | "medium" | "small";

export type TextProps = Omit<GetProps<typeof TamaguiText>, "role"> & {
  /** MD3 type role. Default: "body" */
  role?: TextRole;
  /** MD3 type size. Default: "medium" */
  size?: TextSize;
};
