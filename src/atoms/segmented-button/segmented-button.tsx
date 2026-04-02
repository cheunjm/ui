import { styled, View, Text, useTheme } from "tamagui";
import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { SegmentedButtonProps } from "./segmented-button.type";

const StyledGroup = styled(View, {
  name: "SegmentedButton",
  flexDirection: "row",
  borderWidth: 1,
  borderColor: "$outline",
  borderRadius: 20,
  overflow: "hidden",
  height: 40,
} as const);

const StyledDivider = styled(View, {
  name: "SegmentedButtonDivider",
  width: 1,
  backgroundColor: "$outline",
} as const);

const SegmentLabel = styled(Text, {
  name: "SegmentLabel",
  fontSize: 14,
  fontWeight: "500",
  lineHeight: 20,
} as const);

export function SegmentedButton({
  segments,
  selected,
  multiSelect = false,
  onSelectionChange,
  disabled = false,
  accessibilityLabel,
  testID,
}: SegmentedButtonProps) {
  const theme = useTheme();

  const selectedSet = new Set(
    Array.isArray(selected) ? selected : [selected],
  );

  const outlineColor = (theme.outline?.val as string) ?? "#79747E";
  const secondaryContainerColor =
    (theme.secondaryContainer?.val as string) ?? "#E8DEF8";
  const onSecondaryContainerColor =
    (theme.onSecondaryContainer?.val as string) ?? "#1D192B";
  const onSurfaceColor = (theme.onSurface?.val as string) ?? "#1C1B1F";

  function handlePress(value: string) {
    if (disabled) return;

    if (multiSelect) {
      const next = new Set(selectedSet);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      onSelectionChange?.([...next]);
    } else {
      onSelectionChange?.(value);
    }
  }

  return (
    <StyledGroup
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="tablist"
      testID={testID}
      opacity={disabled ? 0.38 : 1}
    >
      {segments.map((segment, index) => {
        const isSelected = selectedSet.has(segment.value);
        const isDisabled = disabled || segment.disabled;
        const isFirst = index === 0;
        const isLast = index === segments.length - 1;

        return (
          <View key={segment.value} flexDirection="row" flex={1}>
            {index > 0 && <StyledDivider />}
            <Pressable
              onPress={() => handlePress(segment.value)}
              disabled={isDisabled}
              accessibilityRole="tab"
              accessibilityState={{ selected: isSelected, disabled: isDisabled }}
              testID={testID ? `${testID}-segment-${segment.value}` : undefined}
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                backgroundColor: isSelected
                  ? secondaryContainerColor
                  : "transparent",
                borderTopLeftRadius: isFirst ? 20 : 0,
                borderBottomLeftRadius: isFirst ? 20 : 0,
                borderTopRightRadius: isLast ? 20 : 0,
                borderBottomRightRadius: isLast ? 20 : 0,
                opacity: segment.disabled ? 0.38 : 1,
              }}
            >
              {isSelected && (
                <MaterialIcons
                  name="check"
                  size={18}
                  color={onSecondaryContainerColor}
                />
              )}
              {!isSelected && segment.icon && (
                <MaterialIcons
                  name={segment.icon as any}
                  size={18}
                  color={onSurfaceColor}
                />
              )}
              <SegmentLabel
                color={
                  isSelected ? "$onSecondaryContainer" : "$onSurface"
                }
              >
                {segment.label}
              </SegmentLabel>
            </Pressable>
          </View>
        );
      })}
    </StyledGroup>
  );
}
