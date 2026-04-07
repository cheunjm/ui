import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text, View } from "tamagui";

function Callout({ number }: { number: number }) {
  return (
    <XStack
      width={24}
      height={24}
      borderRadius={12}
      backgroundColor="#6750A4"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={12} fontWeight="600" color="#FFFFFF">
        {number}
      </Text>
    </XStack>
  );
}

function LegendItem({ number, label }: { number: number; label: string }) {
  return (
    <XStack gap={10} alignItems="center">
      <Callout number={number} />
      <Text fontSize={14} color="#1C1B1F">
        {label}
      </Text>
    </XStack>
  );
}

function Anatomy() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={48}
      alignItems="center"
    >
      <YStack width={280} height={180} justifyContent="center" alignItems="center">
        <View position="relative" width={56} height={56}>
          <View
            backgroundColor="#EADDFF"
            borderRadius={16}
            width={56}
            height={56}
            justifyContent="center"
            alignItems="center"
          >
            <View
              width={24}
              height={24}
              borderRadius={4}
              borderWidth={1.5}
              borderColor="#6750A4"
              borderStyle="dashed"
              opacity={0.7}
            />
          </View>

          <View position="absolute" top={-36} right={-30}>
            <Callout number={1} />
          </View>

          <View position="absolute" bottom={-36} right={-30}>
            <Callout number={2} />
          </View>
        </View>

        <View position="absolute" bottom={20} left={40}>
          <XStack alignItems="center" gap={8}>
            <Text fontSize={12} color="#49454F" fontStyle="italic">
              Label text (extended only)
            </Text>
            <Callout number={3} />
          </XStack>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Icon" />
        <LegendItem number={3} label="Label text (extended only)" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/fab/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=210-24",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
