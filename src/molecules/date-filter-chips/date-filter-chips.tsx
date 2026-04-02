import { ScrollView } from "react-native";
import { XStack } from "tamagui";
import { Chip } from "../../atoms";
import type { DateFilterChipsProps } from "./date-filter-chips.type";

export function DateFilterChips({
  options,
  selectedValue,
  onSelectionChange,
  disabled = false,
  accessibilityLabel,
  testID,
}: DateFilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
    >
      <XStack gap={8}>
        {options.map((option) => (
          <Chip
            key={option.value}
            label={option.label}
            type="filter"
            selected={option.value === selectedValue}
            leadingIcon={option.icon}
            disabled={disabled}
            onPress={() => onSelectionChange?.(option.value)}
            testID={testID ? `${testID}-chip-${option.value}` : undefined}
          />
        ))}
      </XStack>
    </ScrollView>
  );
}
