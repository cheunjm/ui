import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useAppTheme } from "../../tokens/use-app-theme";
import { resolveColor } from "../../tokens/resolve-color";
import type { DividerProps } from "./divider.type";

const stylesheet = StyleSheet.create((theme) => ({
  divider: {
    backgroundColor: theme.colors.outlineVariant,
  },
}));

const ORIENTATION_STYLE = {
  horizontal: { height: 1, width: "100%" as const },
  vertical: { width: 1, height: "100%" as const },
};

export function Divider({
  orientation = "horizontal",
  inset = "none",
  backgroundColor,
  style,
  ...props
}: DividerProps) {
  const { theme } = useAppTheme();

  const insetStyle =
    inset === "insetLeft"
      ? { marginLeft: theme.spacing.lg }
      : inset === "insetRight"
        ? { marginRight: theme.spacing.lg }
        : inset === "insetBoth"
          ? { marginLeft: theme.spacing.lg, marginRight: theme.spacing.lg }
          : null;

  return (
    <View
      style={[
        stylesheet.divider,
        ORIENTATION_STYLE[orientation],
        insetStyle,
        backgroundColor
          ? { backgroundColor: resolveColor(backgroundColor, theme) }
          : null,
        style,
      ]}
      role="separator"
      {...props}
    />
  );
}
