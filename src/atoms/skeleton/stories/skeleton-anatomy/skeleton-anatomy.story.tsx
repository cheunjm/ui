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
      <YStack width={200} height={120} justifyContent="center" alignItems="center" gap={12}>
        <View position="relative" width={160} height={16} borderRadius={4} backgroundColor="#E6E1E5">
          <View position="absolute" top={-32} right={-24}>
            <Callout number={1} />
          </View>
        </View>
        <View position="relative" width={160} height={16} borderRadius={4} backgroundColor="#E6E1E5">
          <View position="absolute" bottom={-32} right={-24}>
            <Callout number={2} />
          </View>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Pulse animation" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/skeleton/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=301-44",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
