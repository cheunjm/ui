import { View } from "react-native";
import { useTheme } from "tamagui";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { IconProps } from "./icon.type";

export function Icon({
  name,
  size = 24,
  color,
  accessibilityLabel,
  testID,
  style,
}: IconProps) {
  const theme = useTheme();
  const resolvedColor = color?.startsWith("$")
    ? ((theme[color.slice(1)]?.val as string) ?? color)
    : (color ?? (theme.onSurface?.val as string));

  return (
    <View testID={testID} accessibilityLabel={accessibilityLabel} style={style}>
      <MaterialIcons name={name as any} size={size} color={resolvedColor} />
    </View>
  );
}
