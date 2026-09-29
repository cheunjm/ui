import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text } from "../text";
import { useAppTheme } from "../../tokens/use-app-theme";
import type { ChipProps } from "./chip.type";

const stylesheet = StyleSheet.create((theme) => ({
  chip: {
    height: 32,
    borderRadius: theme.radii.sm,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    backgroundColor: "transparent",
  },
  icon: {
    marginRight: 8,
  },
}));

export function Chip({
  label,
  type = "assist",
  selected = false,
  leadingIcon,
  trailingIcon,
  disabled = false,
  onPress,
  onTrailingIconPress,
  accessibilityLabel,
  accessibilityHint,
  testID,
  style,
  ...props
}: ChipProps) {
  const { theme } = useAppTheme();
  const isSelected = type === "filter" && selected;
  const hasLeadingIcon = !!leadingIcon || isSelected;

  const iconColor = theme.colors.onSurfaceVariant;
  const selectedIconColor = theme.colors.onSecondaryContainer;
  const labelColor = isSelected ? selectedIconColor : iconColor;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      accessibilityState={{ selected: isSelected, disabled }}
      testID={testID}
    >
      <View
        style={[
          stylesheet.chip,
          isSelected
            ? {
                backgroundColor: theme.colors.secondaryContainer,
                borderWidth: 0,
              }
            : null,
          hasLeadingIcon ? { paddingLeft: theme.spacing.sm } : null,
          disabled ? { opacity: theme.opacity.disabled } : null,
          style,
        ]}
        {...props}
      >
        {isSelected && !leadingIcon && (
          <View style={stylesheet.icon}>
            <MaterialIcons name="check" size={18} color={selectedIconColor} />
          </View>
        )}

        {leadingIcon && (
          <View style={stylesheet.icon}>
            <MaterialIcons
              name={leadingIcon as any}
              size={18}
              color={isSelected ? selectedIconColor : iconColor}
            />
          </View>
        )}

        <Text
          role="label"
          size="medium"
          style={{ fontWeight: "500", color: labelColor }}
        >
          {label}
        </Text>

        {type === "input" && trailingIcon && (
          <Pressable
            onPress={onTrailingIconPress}
            disabled={disabled}
            testID={testID ? `${testID}-trailing` : undefined}
          >
            <View style={{ marginLeft: 8 }}>
              <MaterialIcons
                name={trailingIcon as any}
                size={18}
                color={iconColor}
              />
            </View>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}
