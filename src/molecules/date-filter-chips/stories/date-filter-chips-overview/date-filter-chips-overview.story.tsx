import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack, XStack, Text } from "tamagui";
import { DateFilterChips } from "../../date-filter-chips";
import type { DateFilterOption } from "../../date-filter-chips.type";

function SectionLabel({ label }: { label: string }) {
  return (
    <XStack
      backgroundColor="#E8DEF8"
      borderRadius={14}
      paddingHorizontal={12}
      paddingVertical={6}
      justifyContent="center"
    >
      <Text fontSize={12} fontWeight="500" color="#6750A4">
        {label}
      </Text>
    </XStack>
  );
}

const dateOptions: DateFilterOption[] = [
  { value: "today", label: "Today" },
  { value: "this-week", label: "This Week" },
  { value: "this-month", label: "This Month" },
  { value: "this-year", label: "This Year" },
  { value: "all-time", label: "All Time" },
];

function Overview() {
  const [selected, setSelected] = useState("this-week");

  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={24}
    >
      <YStack gap={12}>
        <SectionLabel label="Default" />
        <DateFilterChips options={dateOptions} />
      </YStack>

      <YStack gap={12}>
        <SectionLabel label="With Selection (interactive)" />
        <DateFilterChips
          options={dateOptions}
          selectedValue={selected}
          onSelectionChange={setSelected}
        />
      </YStack>

      <YStack gap={12}>
        <SectionLabel label="Disabled" />
        <DateFilterChips
          options={dateOptions}
          selectedValue="this-month"
          disabled
        />
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "Molecules/DateFilterChips/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
