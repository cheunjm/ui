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

function LegendItem({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
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
      {/* Diagram */}
      <YStack width={300} height={120} justifyContent="center" alignItems="center">
        <View position="relative" width={280} height={64}>
          <XStack
            backgroundColor="#F7F2FA"
            width={280}
            height={64}
            alignItems="center"
            paddingHorizontal={8}
            gap={8}
          >
            {/* Navigation icon */}
            <View
              width={24}
              height={24}
              borderRadius={4}
              borderWidth={1.5}
              borderColor="#49454F"
              borderStyle="dashed"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={10} color="#49454F">&larr;</Text>
            </View>

            {/* Title */}
            <Text flex={1} fontSize={16} fontWeight="500" color="#1C1B1F">
              Title
            </Text>

            {/* Action icons */}
            <XStack gap={4}>
              <View
                width={24}
                height={24}
                borderRadius={4}
                borderWidth={1.5}
                borderColor="#49454F"
                borderStyle="dashed"
              />
              <View
                width={24}
                height={24}
                borderRadius={4}
                borderWidth={1.5}
                borderColor="#49454F"
                borderStyle="dashed"
              />
            </XStack>
          </XStack>

          {/* Callout 1 — Container */}
          <View position="absolute" top={-30} right={80}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Navigation icon */}
          <View position="absolute" bottom={-30} left={-10}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Title */}
          <View position="absolute" bottom={-30} left={80}>
            <Callout number={3} />
          </View>

          {/* Callout 4 — Action icons */}
          <View position="absolute" top={-30} right={-10}>
            <Callout number={4} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Navigation icon" />
        <LegendItem number={3} label="Title" />
        <LegendItem number={4} label="Action icons" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/top-app-bar/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
