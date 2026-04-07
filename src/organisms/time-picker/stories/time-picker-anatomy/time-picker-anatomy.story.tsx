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
        <View position="relative" width={260} height={280}>
          <View
            backgroundColor="#F7F2FA"
            borderRadius={28}
            width={260}
            height={280}
            padding={20}
            justifyContent="space-between"
          >
            {/* Header */}
            <View>
              <Text fontSize={11} color="#49454F">Select time</Text>
              <XStack gap={4} alignItems="center" marginTop={8}>
                <View
                  width={48}
                  height={40}
                  borderRadius={8}
                  backgroundColor="#E8DEF8"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text fontSize={20} fontWeight="500" color="#6750A4">10</Text>
                </View>
                <Text fontSize={20} color="#49454F">:</Text>
                <View
                  width={48}
                  height={40}
                  borderRadius={8}
                  backgroundColor="#E8DEF8"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text fontSize={20} fontWeight="500" color="#6750A4">30</Text>
                </View>

                {/* Period selector */}
                <YStack
                  marginLeft={8}
                  borderRadius={8}
                  borderWidth={1}
                  borderColor="#CAC4D0"
                  overflow="hidden"
                >
                  <View
                    backgroundColor="#E8DEF8"
                    paddingHorizontal={8}
                    paddingVertical={4}
                  >
                    <Text fontSize={10} fontWeight="500" color="#6750A4">AM</Text>
                  </View>
                  <View paddingHorizontal={8} paddingVertical={4}>
                    <Text fontSize={10} color="#49454F">PM</Text>
                  </View>
                </YStack>
              </XStack>
            </View>

            {/* Clock face */}
            <View
              width={180}
              height={180}
              borderRadius={90}
              backgroundColor="#E8DEF8"
              alignSelf="center"
              justifyContent="center"
              alignItems="center"
            >
              <View
                width={8}
                height={8}
                borderRadius={4}
                backgroundColor="#6750A4"
              />
            </View>

            {/* Action buttons */}
            <XStack justifyContent="flex-end" gap={8}>
              <Text fontSize={12} fontWeight="500" color="#6750A4">Cancel</Text>
              <Text fontSize={12} fontWeight="500" color="#6750A4">OK</Text>
            </XStack>
          </View>

          {/* Callout 1 — Header */}
          <View position="absolute" top={10} right={-20}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Clock face */}
          <View position="absolute" top={140} left={-20}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Period selector */}
          <View position="absolute" top={50} right={-20}>
            <Callout number={3} />
          </View>

          {/* Callout 4 — Action buttons */}
          <View position="absolute" bottom={10} right={-20}>
            <Callout number={4} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Header" />
        <LegendItem number={2} label="Clock face / Input fields" />
        <LegendItem number={3} label="Period selector (AM/PM)" />
        <LegendItem number={4} label="Action buttons" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/time-picker/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
