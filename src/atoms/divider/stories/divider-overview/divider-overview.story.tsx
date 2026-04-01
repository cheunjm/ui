import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { Divider } from "../../divider";

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
  title: "Atoms/Divider/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
