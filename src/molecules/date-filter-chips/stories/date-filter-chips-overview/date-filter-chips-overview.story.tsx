import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "tamagui";
import { DateFilterChips } from "../../date-filter-chips";
import type { DateFilterOption } from "../../date-filter-chips.type";
import { SectionLabel } from "../../../../storybook";

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
  title: "molecules/date-filter-chips/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
