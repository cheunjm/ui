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
        <View position="relative" width={280} height={64} backgroundColor="#F7F2FA" borderRadius={0}>
          {/* Tab items */}
          <XStack height="100%" alignItems="center">
            <View flex={1} alignItems="center" justifyContent="center" height="100%" position="relative">
              <View width={18} height={18} borderRadius={4} borderWidth={1.5} borderColor="#6750A4" borderStyle="dashed" opacity={0.7} />
              <Text fontSize={12} color="#6750A4" marginTop={2}>Home</Text>
              <View position="absolute" bottom={0} left={0} right={0} height={3} backgroundColor="#6750A4" />
            </View>
            <View flex={1} alignItems="center" justifyContent="center" height="100%">
              <Text fontSize={12} color="#79747E">Search</Text>
            </View>
          </XStack>

          {/* Callout 1 — Container */}
          <View position="absolute" top={-30} right={-20}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Active indicator */}
          <View position="absolute" bottom={-30} left={20}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Icon */}
          <View position="absolute" top={-30} left={20}>
            <Callout number={3} />
          </View>

          {/* Callout 4 — Label */}
          <View position="absolute" bottom={-30} right={20}>
            <Callout number={4} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Active indicator" />
        <LegendItem number={3} label="Icon" />
        <LegendItem number={4} label="Label" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "Organisms/TabBar/Anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=12-15",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
