import { View, Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAppTheme } from "../../tokens/use-app-theme";
import type { SwitchProps } from "./switch.type";

const stylesheet = StyleSheet.create((theme) => ({
  track: {
    width: 52,
    height: 32,
    borderRadius: theme.radii.full,
    justifyContent: "center",
  },
  thumb: {
    borderRadius: theme.radii.full,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export function Switch({
  selected = false,
  showIcon = false,
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID,
  style,
  ...props
}: SwitchProps) {
  const { theme } = useAppTheme();

  const thumbSize = selected || showIcon ? 24 : 16;

  const thumbBackgroundColor = (() => {
    if (selected) {
      return showIcon
        ? theme.colors.onPrimaryContainer
        : theme.colors.onPrimary;
    }
    return showIcon ? theme.colors.onSurfaceVariant : theme.colors.outline;
  })();

  const iconColor = selected
    ? theme.colors.primaryContainer
    : theme.colors.surfaceContainerHighest;

  const trackStyle = selected
    ? {
        backgroundColor: theme.colors.primary,
        borderWidth: 0,
        paddingHorizontal: 4,
      }
    : {
        backgroundColor: theme.colors.surfaceContainerHighest,
        borderWidth: 2,
        borderColor: theme.colors.outline,
        paddingHorizontal: 2,
      };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: selected, disabled }}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      testID={testID}
      style={{ minWidth: 52, minHeight: 48, justifyContent: "center" }}
    >
      <View
        style={[disabled ? { opacity: theme.opacity.disabled } : null, style]}
        {...props}
      >
        <View style={[stylesheet.track, trackStyle]}>
          <View
            style={[
              stylesheet.thumb,
              {
                width: thumbSize,
                height: thumbSize,
                backgroundColor: thumbBackgroundColor,
                alignSelf: selected ? "flex-end" : "flex-start",
              },
            ]}
          >
            {showIcon && (
              <MaterialIcons
                name={selected ? "check" : "close"}
                size={16}
                color={iconColor}
              />
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
}
