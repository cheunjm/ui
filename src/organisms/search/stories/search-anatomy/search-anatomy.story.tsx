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
      <YStack width={320} gap={8}>
        {/* Search bar area */}
        <View position="relative">
          <View
            backgroundColor="#E6E0EC"
            borderRadius={28}
            height={56}
            flexDirection="row"
            alignItems="center"
            paddingHorizontal={16}
            gap={12}
          >
            <View width={24} height={24} borderRadius={4} borderWidth={1.5} borderColor="#6750A4" borderStyle="dashed" />
            <Text fontSize={16} color="#49454F">Search</Text>
          </View>
          <View position="absolute" top={-12} right={-12}>
            <Callout number={1} />
          </View>
        </View>

        {/* Suggestions panel area */}
        <View position="relative">
          <YStack
            backgroundColor="#FFFBFE"
            borderRadius={12}
            borderWidth={1}
            borderColor="#E0E0E0"
            padding={12}
            gap={4}
          >
            {/* Recent section */}
            <View position="relative">
              <XStack height={32} alignItems="center" gap={12} paddingHorizontal={4}>
                <Text fontSize={12} fontWeight="600" color="#49454F">Recent searches</Text>
              </XStack>
              <View position="absolute" top={4} right={-24}>
                <Callout number={3} />
              </View>
            </View>

            {/* Suggestion item */}
            <View position="relative">
              <XStack height={40} alignItems="center" gap={12} paddingHorizontal={4}>
                <View width={20} height={20} borderRadius={4} borderWidth={1.5} borderColor="#6750A4" borderStyle="dashed" />
                <Text fontSize={14} color="#1C1B1F">Suggestion item</Text>
              </XStack>
              <View position="absolute" top={8} right={-24}>
                <Callout number={4} />
              </View>
            </View>
          </YStack>
          <View position="absolute" top={-12} left={-12}>
            <Callout number={2} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Search bar" />
        <LegendItem number={2} label="Suggestions panel" />
        <LegendItem number={3} label="Recent searches" />
        <LegendItem number={4} label="Suggestion item" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "Organisms/Search/Anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=9-15",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
