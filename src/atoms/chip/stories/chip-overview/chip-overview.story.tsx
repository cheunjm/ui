import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack } from "tamagui";
import { Chip } from "../../chip";
import { SectionLabel } from "../../../../storybook";

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
  title: "atoms/chip/overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
