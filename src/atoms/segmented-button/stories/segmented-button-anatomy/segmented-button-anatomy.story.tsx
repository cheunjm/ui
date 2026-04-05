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
      <YStack width={280} height={140} justifyContent="center" alignItems="center">
        <View position="relative">
          <XStack
            borderWidth={1}
            borderColor="#79747E"
            borderRadius={9999}
            overflow="hidden"
          >
            <View
              width={80}
              height={40}
              backgroundColor="#E8DEF8"
              justifyContent="center"
              alignItems="center"
              borderRightWidth={1}
              borderRightColor="#79747E"
            >
              <Text fontSize={14} fontWeight="500" color="#1D192B">
                Day
              </Text>
            </View>
            <View
              width={80}
              height={40}
              backgroundColor="#FFFBFE"
              justifyContent="center"
              alignItems="center"
              borderRightWidth={1}
              borderRightColor="#79747E"
            >
              <Text fontSize={14} fontWeight="500" color="#49454F">
                Week
              </Text>
            </View>
            <View
              width={80}
              height={40}
              backgroundColor="#FFFBFE"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={14} fontWeight="500" color="#49454F">
                Month
              </Text>
            </View>
          </XStack>

          <View position="absolute" top={-36} left={80}>
            <Callout number={1} />
          </View>

          <View position="absolute" bottom={-36} left={10}>
            <Callout number={2} />
          </View>

          <View position="absolute" bottom={-36} right={-20}>
            <Callout number={3} />
          </View>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Segments" />
        <LegendItem number={3} label="Selected indicator" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/segmented-button/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=69-2",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
