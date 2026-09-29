import type { TextProps as RNTextProps } from "react-native";

/** MD3 type scale roles */
export type TextRole = "display" | "headline" | "title" | "body" | "label";

/** MD3 type scale sizes */
export type TextSize = "large" | "medium" | "small";

/**
 * Tamagui-shorthand style props kept for backward compatibility with call
 * sites that predate the Unistyles migration — folded into `style`
 * internally rather than passed through as bare RN Text props.
 */
export type TextShorthandStyleProps = {
  color?: string;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  fontWeight?: string | number;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  flex?: number;
  flexShrink?: number;
  opacity?: number;
  /** Number, or a legacy "$tokenName" spacing-scale reference. */
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingHorizontal?: number | string;
  paddingVertical?: number | string;
};

export type TextProps = Omit<RNTextProps, "role"> &
  TextShorthandStyleProps & {
    /** MD3 type role. Default: "body" */
    role?: TextRole;
    /** MD3 type size. Default: "medium" */
    size?: TextSize;
  };
