import { Pressable } from "react-native";
import { styled, View, Text, useTheme } from "tamagui";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { ChipProps } from "./chip.type";

const StyledChipContainer = styled(View, {
  name: "Chip",
  height: 32,
  borderRadius: 8,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,
  borderWidth: 1,
  borderColor: "$outline",
  backgroundColor: "transparent",

  variants: {
    selected: {
      true: {
        backgroundColor: "$secondaryContainer",
        borderWidth: 0,
      },
    },
    hasLeadingIcon: {
      true: {
        paddingLeft: 8,
      },
    },
  } as const,
} as const);

const ChipLabel = styled(Text, {
  name: "ChipLabel",
  fontSize: 14,
  fontWeight: "500",
  color: "$onSurface",
});

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
  testID,
  ...props
}: ChipProps) {
  const theme = useTheme();

  const isSelected = type === "filter" && selected;
  const hasLeadingIcon = !!leadingIcon || isSelected;

  const iconColor =
    (theme.onSurfaceVariant?.val as string) ?? "#49454F";
  const selectedIconColor =
    (theme.onSecondaryContainer?.val as string) ?? "#1D192B";
  const labelColor = isSelected ? selectedIconColor : iconColor;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      testID={testID}
    >
      <StyledChipContainer
        selected={isSelected as any}
        hasLeadingIcon={hasLeadingIcon as any}
        opacity={disabled ? 0.38 : 1}
        {...props}
      >
        {isSelected && !leadingIcon && (
          <View marginRight={8}>
            <MaterialIcons
              name="check"
              size={18}
              color={selectedIconColor}
            />
          </View>
        )}

        {leadingIcon && (
          <View marginRight={8}>
            <MaterialIcons
              name={leadingIcon as any}
              size={18}
              color={isSelected ? selectedIconColor : iconColor}
            />
          </View>
        )}

        <ChipLabel color={labelColor as any}>{label}</ChipLabel>

        {type === "input" && trailingIcon && (
          <Pressable
            onPress={onTrailingIconPress}
            disabled={disabled}
            testID={testID ? `${testID}-trailing` : undefined}
          >
            <View marginLeft={8}>
              <MaterialIcons
                name={trailingIcon as any}
                size={18}
                color={iconColor}
              />
            </View>
          </Pressable>
        )}
      </StyledChipContainer>
    </Pressable>
  );
}
