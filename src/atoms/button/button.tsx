import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Text } from "../text";
import { useAppTheme } from "../../tokens/use-app-theme";
import { resolveColor } from "../../tokens/resolve-color";
import { resolveSpacing } from "../../tokens/resolve-spacing";
import type { ButtonProps, ButtonVariant } from "./button.type";

const stylesheet = StyleSheet.create((theme) => ({
  button: {
    borderRadius: theme.radii.sm,
    paddingHorizontal: theme.spacing["2xl"],
    paddingVertical: theme.spacing.sm,
    minHeight: 40,
    minWidth: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: theme.fontFamily.label,
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.1,
  },
}));

export function Button({
  variant = "filled" as ButtonVariant,
  disabled,
  children,
  style,
  backgroundColor,
  color,
  marginTop,
  flex,
  icon,
  ...props
}: ButtonProps) {
  const { theme } = useAppTheme();

  // A many-option variant axis on StyleSheet.create's `variants` confuses
  // TypeScript's declaration-emit for `.useVariants` (a known inference
  // limit around ~5+ string-literal branches) — resolved via a plain
  // lookup instead, which is just as reactive to theme changes.
  const colorStyles: Record<
    ButtonVariant,
    { container: object; label: object }
  > = {
    filled: {
      container: { backgroundColor: theme.colors.primary },
      label: { color: theme.colors.onPrimary },
    },
    outlined: {
      container: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: theme.colors.outline,
      },
      label: { color: theme.colors.primary },
    },
    text: {
      container: { backgroundColor: "transparent", borderWidth: 0 },
      label: { color: theme.colors.primary },
    },
    elevated: {
      container: { backgroundColor: theme.colors.surfaceContainerLow },
      label: { color: theme.colors.primary },
    },
    tonal: {
      container: { backgroundColor: theme.colors.secondaryContainer },
      label: { color: theme.colors.onSecondaryContainer },
    },
  };
  const resolved = colorStyles[variant];

  return (
    <Pressable
      style={[
        stylesheet.button,
        resolved.container,
        disabled ? { opacity: theme.opacity.disabled } : null,
        backgroundColor
          ? { backgroundColor: resolveColor(backgroundColor, theme) }
          : null,
        marginTop != null
          ? { marginTop: resolveSpacing(marginTop, theme) }
          : null,
        flex != null ? { flex } : null,
        style as any,
      ]}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={disabled ? { disabled: true } : undefined}
      {...props}
    >
      {icon ? <View style={{ marginRight: 8 }}>{icon}</View> : null}
      {typeof children === "string" ? (
        <Text
          style={[
            stylesheet.label,
            resolved.label,
            color ? { color: resolveColor(color, theme) } : null,
          ]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
