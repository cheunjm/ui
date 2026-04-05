import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { Divider } from "../../divider";
import { SectionLabel } from "../../../../storybook";

function Overview() {
  return (
    <YStack gap={24}>
      <YStack
        backgroundColor="#FFFFFF"
        borderRadius={12}
        borderWidth={1}
        borderColor="#E0E0E0"
        padding={24}
        gap={16}
      >
        <SectionLabel label="Full Width" />
        <Divider />
        <SectionLabel label="Inset Left" />
        <Divider inset="insetLeft" />
        <SectionLabel label="Inset Right" />
        <Divider inset="insetRight" />
        <SectionLabel label="Inset Both" />
        <Divider inset="insetBoth" />
      </YStack>

      <XStack
        backgroundColor="#FFFFFF"
        borderRadius={12}
        borderWidth={1}
        borderColor="#E0E0E0"
        padding={24}
        gap={16}
        height={120}
        alignItems="stretch"
      >
        <SectionLabel label="Vertical" />
        <Divider orientation="vertical" />
        <Text color="#49454F" alignSelf="center">
          Content between vertical dividers
        </Text>
        <Divider orientation="vertical" />
        <SectionLabel label="Vertical" />
      </XStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/divider/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=1-4",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
