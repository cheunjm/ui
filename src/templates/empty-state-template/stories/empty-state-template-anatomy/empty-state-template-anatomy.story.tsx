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
      <YStack width={300} height={300} justifyContent="center" alignItems="center">
        <View position="relative" width={200} height={280}>
          {/* Full screen container */}
          <View
            backgroundColor="#F7F2FA"
            borderRadius={12}
            width={200}
            height={280}
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

            {/* Centered content */}
            <View flex={1} justifyContent="center" alignItems="center" gap={8}>
              {/* Icon */}
              <View
                width={48}
                height={48}
                borderRadius={24}
                backgroundColor="#E8DEF8"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize={20}>★</Text>
              </View>

              {/* Title */}
              <Text fontSize={14} fontWeight="600" color="#1C1B1F">
                Title
              </Text>

              {/* Body */}
              <Text fontSize={10} color="#49454F">
                Body text
              </Text>

              {/* Action button */}
              <View
                backgroundColor="#6750A4"
                borderRadius={16}
                paddingHorizontal={16}
                paddingVertical={6}
              >
                <Text fontSize={10} color="#FFFFFF">
                  Action
                </Text>
              </View>
            </View>
          </View>

          {/* Callout 1 — Top bar */}
          <View position="absolute" top={12} right={-30}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Icon */}
          <View position="absolute" top={80} right={-30}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Title */}
          <View position="absolute" top={140} right={-30}>
            <Callout number={3} />
          </View>

          {/* Callout 4 — Body */}
          <View position="absolute" top={170} right={-30}>
            <Callout number={4} />
          </View>

          {/* Callout 5 — Action button */}
          <View position="absolute" top={200} right={-30}>
            <Callout number={5} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Top bar slot (optional)" />
        <LegendItem number={2} label="Icon" />
        <LegendItem number={3} label="Title" />
        <LegendItem number={4} label="Body text" />
        <LegendItem number={5} label="Action button (optional)" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "templates/empty-state-template/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
