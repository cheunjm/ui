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
      <YStack width={300} height={160} justifyContent="center" alignItems="center">
        <View position="relative" width={140} height={32}>
          <View
            backgroundColor="#FFFFFF"
            borderRadius={8}
            borderWidth={1}
            borderColor="#79747E"
            width={140}
            height={32}
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            gap={8}
          >
            <View
              width={14}
              height={14}
              borderRadius={3}
              borderWidth={1.5}
              borderColor="#49454F"
              borderStyle="dashed"
              opacity={0.7}
            />
            <Text fontSize={14} fontWeight="500" color="#49454F">
              Chip
            </Text>
            <View
              width={14}
              height={14}
              borderRadius={3}
              borderWidth={1.5}
              borderColor="#49454F"
              borderStyle="dashed"
              opacity={0.7}
            />
          </View>

          <View position="absolute" top={-36} right={-20}>
            <Callout number={1} />
          </View>

          <View position="absolute" bottom={-36} right={10}>
            <Callout number={2} />
          </View>

          <View position="absolute" bottom={-36} left={-10}>
            <Callout number={3} />
          </View>

          <View position="absolute" top={-36} left={-10}>
            <Callout number={4} />
          </View>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Label text" />
        <LegendItem number={3} label="Leading icon" />
        <LegendItem number={4} label="Trailing icon" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/chip/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=209-29",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
