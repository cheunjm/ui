import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text, View } from "tamagui";
import { Spacer } from "../../spacer";

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
      <YStack gap={8}>
        <SectionLabel label="Vertical (16dp)" />
        <XStack alignItems="center">
          <View backgroundColor="#E8DEF8" height={20} width={60} borderRadius={4} />
          <Spacer direction="vertical" size={16} />
          <View backgroundColor="#E8DEF8" height={20} width={60} borderRadius={4} />
        </XStack>
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="Horizontal (16dp)" />
        <YStack>
          <View backgroundColor="#E8DEF8" height={20} width={120} borderRadius={4} />
          <Spacer direction="horizontal" size={16} />
          <View backgroundColor="#E8DEF8" height={20} width={120} borderRadius={4} />
        </YStack>
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/spacer/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=52-5",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
