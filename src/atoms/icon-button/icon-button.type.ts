import type { GetProps } from "tamagui";
import type { Button as TamaguiButton } from "tamagui";

/** MD3 IconButton variants */
export type IconButtonVariant =
  | "standard"
  | "filled"
  | "filledTonal"
  | "outlined";

export type IconButtonProps = Omit<
  GetProps<typeof TamaguiButton>,
  "variant" | "children" | "icon"
> & {
  /** Material Icons glyph name */
  icon: string;
  /** MD3 icon button variant. Default: "standard" */
  variant?: IconButtonVariant;
  /** Icon size in px. Default: 24 */
  iconSize?: number;
  /** Icon color — accepts theme token or hex */
  iconColor?: string;
  /** Whether the button is toggled on */
  selected?: boolean;
  /** Disables the button */
  disabled?: boolean;
};
