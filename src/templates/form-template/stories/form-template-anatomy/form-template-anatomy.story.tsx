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
      <YStack width={300} height={280} justifyContent="center" alignItems="center">
        <View position="relative" width={200} height={260}>
          {/* Full screen container */}
          <View
            backgroundColor="#F7F2FA"
            borderRadius={12}
            width={200}
            height={260}
            overflow="hidden"
          >
            {/* Top bar slot */}
            <View
              backgroundColor="#E8DEF8"
              height={48}
              width="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={10} color="#6750A4">
                Top Bar
              </Text>
            </View>

            {/* Form content */}
            <View flex={1} padding={8} justifyContent="center" alignItems="center">
              <Text fontSize={10} color="#49454F">
                Form Content (scrollable)
              </Text>
            </View>

            {/* Sticky actions */}
            <View
              backgroundColor="#E8DEF8"
              height={48}
              width="100%"
              justifyContent="center"
              alignItems="center"
              borderTopWidth={1}
              borderTopColor="#CAC4D0"
            >
              <Text fontSize={10} color="#6750A4">
                Action Buttons
              </Text>
            </View>
          </View>

          {/* Callout 1 — Top bar */}
          <View position="absolute" top={12} right={-30}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Form content */}
          <View position="absolute" top={120} right={-30}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Sticky actions */}
          <View position="absolute" bottom={12} right={-30}>
            <Callout number={3} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Top bar slot (optional)" />
        <LegendItem number={2} label="Form content (scrollable)" />
        <LegendItem number={3} label="Sticky action buttons (optional)" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "templates/form-template/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
