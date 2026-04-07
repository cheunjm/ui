import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack } from "tamagui";
import { RadioButton } from "../../radio-button";
import { SectionLabel } from "../../../../storybook";

function Overview() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={32}
      alignItems="flex-start"
    >
      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Unselected" />
        <RadioButton />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Selected" />
        <RadioButton selected />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Error (unselected)" />
        <RadioButton error />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Error (selected)" />
        <RadioButton selected error />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Disabled" />
        <RadioButton disabled />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Disabled (selected)" />
        <RadioButton selected disabled />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/radio-button/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=65-2",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
