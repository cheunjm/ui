import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack } from "tamagui";
import { Badge } from "../../badge";
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
        <SectionLabel label="Small (dot)" />
        <Badge />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Large (1)" />
        <Badge size="large" count={1} />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Large (99)" />
        <Badge size="large" count={99} />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Large (999+)" />
        <Badge size="large" count={1500} />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/badge/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=88-9",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
