import { Text as RNText } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import type {
  TextProps,
  TextRole,
  TextSize,
  TextShorthandStyleProps,
} from "./text.type";
import { resolveColor } from "../../tokens/resolve-color";
import { resolveSpacing } from "../../tokens/resolve-spacing";
import { useAppTheme } from "../../tokens/use-app-theme";
import {
  fontSize,
  lineHeight,
  letterSpacing,
  type TypographyToken,
} from "../../tokens/generated/typography";

/** Map role + size → typography token key */
function toToken(role: TextRole, size: TextSize): TypographyToken {
  const key = `${role}${size.charAt(0).toUpperCase()}${size.slice(1)}`;
  return key as TypographyToken;
}

const SHORTHAND_KEYS = [
  "color",
  "textTransform",
  "textAlign",
  "fontWeight",
  "fontSize",
  "lineHeight",
  "letterSpacing",
  "flex",
  "flexShrink",
  "opacity",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingHorizontal",
  "paddingVertical",
] as const satisfies readonly (keyof TextShorthandStyleProps)[];

const SPACING_KEYS = new Set([
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingHorizontal",
  "paddingVertical",
]);

const stylesheet = StyleSheet.create((theme) => ({
  text: {
    fontFamily: theme.fontFamily.body,
    color: theme.colors.onSurface,
  },
}));

export function Text({
  role = "body",
  size = "medium",
  style,
  ...rest
}: TextProps) {
  const token = toToken(role, size);
  const { theme } = useAppTheme();

  const shorthandStyle: Record<string, unknown> = {};
  const nativeProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(rest)) {
    if (value === undefined) continue;
    if ((SHORTHAND_KEYS as readonly string[]).includes(key)) {
      if (key === "color") {
        shorthandStyle[key] = resolveColor(value as string, theme);
      } else if (SPACING_KEYS.has(key)) {
        shorthandStyle[key] = resolveSpacing(value as number | string, theme);
      } else {
        shorthandStyle[key] = value;
      }
    } else {
      nativeProps[key] = value;
    }
  }

  return (
    <RNText
      style={[
        stylesheet.text,
        {
          fontSize: fontSize[token],
          lineHeight: lineHeight[token],
          letterSpacing: letterSpacing[token],
          fontFamily:
            role === "label" ? theme.fontFamily.label : theme.fontFamily.body,
        },
        shorthandStyle,
        style,
      ]}
      {...nativeProps}
    />
  );
}
