import { View, useTheme } from "tamagui";
import { Image } from "react-native";
import { Text } from "../text";
import { Icon } from "../icon";
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
  ...props
}: AvatarProps) {
  const theme = useTheme();
  const sizeConfig = AVATAR_SIZES[size];
  const containerSize = sizeConfig.container;

  const bgColor = color?.startsWith("$")
    ? ((theme[color.slice(1)]?.val as string) ?? color)
    : (color ?? (theme.primaryContainer?.val as string));

  const fgColor = theme.onPrimaryContainer?.val as string;

  const initials = name ? extractInitials(name) : "";
  const variant = source ? "image" : initials ? "initials" : "icon";

  return (
    <View
      testID={testID}
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel ?? name}
      width={containerSize}
      height={containerSize}
      borderRadius={containerSize / 2}
      backgroundColor={variant === "image" ? undefined : (bgColor as any)}
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
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
          color={fgColor as any}
          fontSize={sizeConfig.fontSize}
          lineHeight={sizeConfig.fontSize * 1.2}
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
