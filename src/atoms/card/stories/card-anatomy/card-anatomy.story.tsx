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
      <YStack width={240} height={160} justifyContent="center" alignItems="center">
        <View position="relative" width={200} height={120}>
          <View
            backgroundColor="#FFFBFE"
            borderRadius={12}
            width={200}
            height={120}
            padding={16}
          >
            <Text fontSize={14} fontWeight="600" color="#1C1B1F">
              Title
            </Text>
            <Text fontSize={12} color="#49454F" marginTop={4}>
              Supporting text content
            </Text>
          </View>

          <View position="absolute" top={-30} right={-20}>
            <Callout number={1} />
          </View>

          <View position="absolute" bottom={10} right={-30}>
            <Callout number={2} />
          </View>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Content" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/card/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
