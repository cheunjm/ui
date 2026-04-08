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
      <YStack width={120} height={320} justifyContent="flex-start" alignItems="center">
        {/* Rail container shape */}
        <View
          position="relative"
          width={80}
          height={300}
          backgroundColor="#F3EDF7"
          borderRadius={0}
          alignItems="center"
          paddingVertical={12}
          gap={0}
        >
          {/* FAB slot */}
          <View
            width={40}
            height={40}
            borderRadius={12}
            backgroundColor="#EADDFF"
            justifyContent="center"
            alignItems="center"
            marginBottom={8}
          >
            <Text fontSize={18} color="#6750A4">+</Text>
          </View>

          {/* Active indicator */}
          <View
            width={56}
            height={32}
            borderRadius={16}
            backgroundColor="#E8DEF8"
            justifyContent="center"
            alignItems="center"
            marginBottom={4}
          />
          <Text fontSize={10} color="#49454F" marginBottom={12}>Home</Text>

          {/* Inactive destination */}
          <View
            width={56}
            height={32}
            justifyContent="center"
            alignItems="center"
            marginBottom={4}
          />
          <Text fontSize={10} color="#79747E">Search</Text>

          {/* Callouts */}
          <View position="absolute" top={-12} right={-28}>
            <Callout number={1} />
          </View>
          <View position="absolute" top={16} right={-28}>
            <Callout number={2} />
          </View>
          <View position="absolute" top={72} right={-28}>
            <Callout number={3} />
          </View>
          <View position="absolute" top={112} right={-28}>
            <Callout number={4} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Rail container" />
        <LegendItem number={2} label="FAB slot (optional)" />
        <LegendItem number={3} label="Active indicator" />
        <LegendItem number={4} label="Destination label" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "Organisms/NavigationRail/Anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=8-15",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
