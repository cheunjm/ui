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
      <YStack width={240} height={140} justifyContent="center" alignItems="center">
        <View position="relative" width={200}>
          <View
            height={4}
            backgroundColor="#E6E0E9"
            borderRadius={2}
            width="100%"
          />
          <View
            position="absolute"
            top={0}
            left={0}
            height={4}
            backgroundColor="#6750A4"
            borderRadius={2}
            width="60%"
          />

          <View position="absolute" top={-36} right={20}>
            <Callout number={1} />
          </View>

          <View position="absolute" bottom={-36} left={20}>
            <Callout number={2} />
          </View>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Track" />
        <LegendItem number={2} label="Indicator" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/progress-indicator/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=68-2",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
