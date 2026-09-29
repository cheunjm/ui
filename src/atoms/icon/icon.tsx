import { View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { resolveColor } from "../../tokens/resolve-color";
import { useAppTheme } from "../../tokens/use-app-theme";
import type { IconProps } from "./icon.type";

export function Icon({
  name,
  size = 24,
  color,
  accessibilityLabel,
  testID,
  style,
}: IconProps) {
  const { theme } = useAppTheme();
  const resolvedColor = resolveColor(color, theme) ?? theme.colors.onSurface;

  return (
    <View testID={testID} accessibilityLabel={accessibilityLabel} style={style}>
      <MaterialIcons name={name as any} size={size} color={resolvedColor} />
    </View>
  );
}
