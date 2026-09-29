import type { PressableProps } from "react-native";
import type { ReactNode } from "react";

/** MD3 Button variants */
export type ButtonVariant =
  | "filled"
  | "outlined"
  | "text"
  | "elevated"
  | "tonal";

export type ButtonProps = Omit<PressableProps, "children"> & {
  /** MD3 button variant. Default: "filled" */
  variant?: ButtonVariant;
  /** Disables the button */
  disabled?: boolean;
  /** Accessibility hint describing the result of pressing the button */
  accessibilityHint?: string;
  /** Button label */
  children?: ReactNode;
  /** Background color override — bypasses the variant's default. */
  backgroundColor?: string;
  /** Label color override — bypasses the variant's default. */
  color?: string;
  /** Number, or a legacy "$tokenName" spacing-scale reference. */
  marginTop?: number | string;
  flex?: number;
  /** Optional leading icon element, rendered before the label. */
  icon?: ReactNode;
};
