import { View, Image, StyleSheet as RNStyleSheet } from "react-native";
import { Text } from "../text";
import { Icon } from "../icon";
import { resolveColor } from "../../tokens/resolve-color";
import { useAppTheme } from "../../tokens/use-app-theme";
import { AVATAR_SIZES } from "./avatar.const";
import type { AvatarProps } from "./avatar.type";

function extractInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || parts[0] === "") return "";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({
  source,
  name,
  icon = "person",
  size = "medium",
  color,
  accessibilityLabel,
  testID,
  style,
  ...props
}: AvatarProps) {
  const { theme } = useAppTheme();
  const sizeConfig = AVATAR_SIZES[size];
  const containerSize = sizeConfig.container;

  const bgColor = resolveColor(color, theme) ?? theme.colors.primaryContainer;
  const fgColor = theme.colors.onPrimaryContainer;

  const initials = name ? extractInitials(name) : "";
  const variant = source ? "image" : initials ? "initials" : "icon";

  return (
    <View
      testID={testID}
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel ?? name}
      style={RNStyleSheet.flatten([
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
          backgroundColor: variant === "image" ? undefined : bgColor,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ])}
      {...props}
    >
      {variant === "image" && (
        <Image
          source={source!}
          style={{
            width: containerSize,
            height: containerSize,
            borderRadius: containerSize / 2,
          }}
          testID={testID ? `${testID}-image` : undefined}
        />
      )}
      {variant === "initials" && (
        <Text
          role="label"
          size="medium"
          color={fgColor}
          style={{
            fontSize: sizeConfig.fontSize,
            lineHeight: sizeConfig.fontSize * 1.2,
          }}
          testID={testID ? `${testID}-initials` : undefined}
        >
          {initials}
        </Text>
      )}
      {variant === "icon" && (
        <Icon
          name={icon!}
          size={sizeConfig.iconSize as any}
          color={fgColor}
          testID={testID ? `${testID}-icon` : undefined}
        />
      )}
    </View>
  );
}
