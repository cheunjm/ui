import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack } from "tamagui";
import { Switch } from "../../switch";
import { SectionLabel } from "../../../../storybook";

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
  title: "atoms/switch/overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
