import type { Meta, StoryObj } from "@storybook/react";
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
            width="40%"
          />
          <View
            position="absolute"
            top={-8}
            left="37%"
            width={20}
            height={20}
            borderRadius={10}
            backgroundColor="#6750A4"
          />

          <XStack position="absolute" top={14} width="100%" justifyContent="space-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <View key={i} width={4} height={4} borderRadius={2} backgroundColor="#49454F" />
            ))}
          </XStack>

          <View position="absolute" top={-40} right={60}>
            <Callout number={1} />
          </View>

          <View position="absolute" top={-40} left={50}>
            <Callout number={2} />
          </View>

          <View position="absolute" bottom={-40} left={80}>
            <Callout number={3} />
          </View>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Track" />
        <LegendItem number={2} label="Thumb" />
        <LegendItem number={3} label="Tick marks" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/slider/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=67-2",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
