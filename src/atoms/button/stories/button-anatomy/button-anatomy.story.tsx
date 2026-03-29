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
      <YStack width={300} height={180} justifyContent="center" alignItems="center">
        {/* Button container shape */}
        <View position="relative" width={160} height={48}>
          <View
            backgroundColor="#6750A4"
            borderRadius={9999}
            width={160}
            height={48}
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            gap={8}
          >
            {/* Icon placeholder */}
            <View
              width={18}
              height={18}
              borderRadius={4}
              borderWidth={1.5}
              borderColor="#FFFFFF"
              borderStyle="dashed"
              opacity={0.7}
            />
            {/* Label */}
            <Text fontSize={14} fontWeight="500" color="#FFFFFF" letterSpacing={0.1}>
              Button
            </Text>
          </View>

          {/* Callout 1 — Container (top-right) */}
          <View position="absolute" top={-36} right={-20}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Label text (bottom-right) */}
          <View position="absolute" bottom={-36} right={20}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Icon (bottom-left) */}
          <View position="absolute" bottom={-36} left={-10}>
            <Callout number={3} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Label text" />
        <LegendItem number={3} label="Icon (optional)" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "Atoms/Button/Anatomy",
  component: Anatomy,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
