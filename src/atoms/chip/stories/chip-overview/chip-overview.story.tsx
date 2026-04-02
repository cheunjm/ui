import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { Chip } from "../../chip";

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

function Overview() {
  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={24}
    >
      <XStack gap={16} flexWrap="wrap" alignItems="center">
        <SectionLabel label="Assist" />
        <Chip label="Assist" />
        <Chip label="With Icon" leadingIcon="event" />
      </XStack>

      <XStack gap={16} flexWrap="wrap" alignItems="center">
        <SectionLabel label="Filter" />
        <Chip label="Unselected" type="filter" />
        <Chip label="Selected" type="filter" selected />
        <Chip label="Selected + Icon" type="filter" selected leadingIcon="check" />
      </XStack>

      <XStack gap={16} flexWrap="wrap" alignItems="center">
        <SectionLabel label="Input" />
        <Chip label="Input" type="input" />
        <Chip label="With Icons" type="input" leadingIcon="person" trailingIcon="close" />
      </XStack>

      <XStack gap={16} flexWrap="wrap" alignItems="center">
        <SectionLabel label="Suggestion" />
        <Chip label="Suggestion" type="suggestion" />
      </XStack>

      <XStack gap={16} flexWrap="wrap" alignItems="center">
        <SectionLabel label="Disabled" />
        <Chip label="Disabled" disabled />
        <Chip label="Disabled Filter" type="filter" selected disabled />
      </XStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "Atoms/Chip/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
