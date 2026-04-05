import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack } from "tamagui";
import { Checkbox } from "../../checkbox";
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
        <SectionLabel label="Unchecked" />
        <Checkbox state="unchecked" />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Checked" />
        <Checkbox state="checked" />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Indeterminate" />
        <Checkbox state="indeterminate" />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Error" />
        <Checkbox state="unchecked" error />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Error Checked" />
        <Checkbox state="checked" error />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Disabled" />
        <Checkbox state="unchecked" disabled />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/checkbox/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=64-2",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
