import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { Checkbox } from "../../checkbox";

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
  title: "Atoms/Checkbox/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
