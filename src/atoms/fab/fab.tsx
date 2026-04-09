import { useTheme, Text } from "tamagui";
import { Pressable, type ViewStyle } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { FabProps } from "./fab.type";
import {
  FAB_SIZE_MAP,
  FAB_COLOR_MAP,
  FAB_EXTENDED_GAP,
  FAB_EXTENDED_PADDING_HORIZONTAL,
  FAB_EXTENDED_BORDER_RADIUS,
} from "./fab.const";

export function FAB({
  icon,
  size = "regular",
  color = "primary",
  label,
  onPress,
  accessibilityLabel,
  testID,
  ...props
}: FabProps) {
  const theme = useTheme();
  const sizeConfig = FAB_SIZE_MAP[size];
  const colorConfig = FAB_COLOR_MAP[color];

  const bgToken = colorConfig.background;
  const iconToken = colorConfig.icon;

  const backgroundColor =
    (theme[bgToken]?.val as string) ?? "$primaryContainer";
  const iconColor =
    (theme[iconToken]?.val as string);

  const isExtended = !!label;

  const containerStyle: ViewStyle = isExtended
    ? {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: sizeConfig.height,
        borderRadius: FAB_EXTENDED_BORDER_RADIUS,
        paddingHorizontal: FAB_EXTENDED_PADDING_HORIZONTAL,
        gap: FAB_EXTENDED_GAP,
        backgroundColor,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }
    : {
        width: sizeConfig.width,
        height: sizeConfig.height,
        borderRadius: sizeConfig.borderRadius,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      };

  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      testID={testID}
      style={containerStyle}
    >
      <MaterialIcons
        name={icon as any}
        size={sizeConfig.iconSize}
        color={iconColor}
      />
      {isExtended && (
        <Text
          fontSize={14}
          fontWeight="500"
          color={iconColor as any}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}
