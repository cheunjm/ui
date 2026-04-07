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
        <View position="relative" width={280} height={48}>
          <XStack
            backgroundColor="#313033"
            borderRadius={4}
            width={280}
            height={48}
            alignItems="center"
            paddingHorizontal={16}
            gap={8}
          >
            {/* Message text */}
            <Text flex={1} fontSize={12} color="#FFFFFF">
              Message sent
            </Text>

            {/* Action button */}
            <Text fontSize={12} fontWeight="500" color="#D0BCFF">
              Undo
            </Text>

            {/* Close icon */}
            <View
              width={18}
              height={18}
              borderRadius={9}
              borderWidth={1.5}
              borderColor="#FFFFFF"
              borderStyle="dashed"
              opacity={0.7}
            />
          </XStack>

          {/* Callout 1 — Container */}
          <View position="absolute" top={-30} left={-10}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Message text */}
          <View position="absolute" bottom={-30} left={20}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Action button */}
          <View position="absolute" top={-30} right={40}>
            <Callout number={3} />
          </View>

          {/* Callout 4 — Close icon */}
          <View position="absolute" bottom={-30} right={-10}>
            <Callout number={4} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Message text" />
        <LegendItem number={3} label="Action button" />
        <LegendItem number={4} label="Close icon" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/snackbar/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
