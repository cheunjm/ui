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
      <YStack width={220} height={160} justifyContent="center" alignItems="center">
        <View position="relative">
          <View
            backgroundColor="#313033"
            borderRadius={4}
            paddingHorizontal={12}
            paddingVertical={8}
            width={160}
          >
            <Text fontSize={14} fontWeight="500" color="#FFFFFF">
              Tooltip title
            </Text>
            <Text fontSize={12} color="#E6E1E5" marginTop={4}>
              Description text
            </Text>
            <Text fontSize={12} fontWeight="500" color="#CCC2DC" marginTop={8}>
              Action
            </Text>
          </View>

          <View position="absolute" top={-30} right={-20}>
            <Callout number={1} />
          </View>

          <View position="absolute" top={2} left={-30}>
            <Callout number={2} />
          </View>

          <View position="absolute" top={24} right={-30}>
            <Callout number={3} />
          </View>

          <View position="absolute" bottom={2} left={-30}>
            <Callout number={4} />
          </View>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Label" />
        <LegendItem number={3} label="Description (rich)" />
        <LegendItem number={4} label="Action (rich)" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/tooltip/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=300-2",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
