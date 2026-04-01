import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { Switch } from "../../switch";

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
      gap={24}
      alignItems="flex-start"
    >
      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Off" />
        <Switch />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="On" />
        <Switch selected />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Off + Icon" />
        <Switch showIcon />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="On + Icon" />
        <Switch selected showIcon />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Disabled Off" />
        <Switch disabled />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Disabled On" />
        <Switch selected disabled />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "Atoms/Switch/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
