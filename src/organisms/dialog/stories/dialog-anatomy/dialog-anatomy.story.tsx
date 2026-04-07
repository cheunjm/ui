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
      <YStack width={260} height={240} justifyContent="center" alignItems="center">
        <View position="relative" width={240} height={220}>
          <View
            backgroundColor="#FFFBFE"
            borderRadius={28}
            width={240}
            height={220}
            padding={24}
            alignItems="center"
          >
            <View width={24} height={24} borderRadius={12} backgroundColor="#E8DEF8" marginBottom={16} />
            <Text fontSize={18} fontWeight="600" color="#1C1B1F" marginBottom={8}>Dialog Title</Text>
            <Text fontSize={14} color="#49454F" textAlign="center" marginBottom={24}>Supporting text</Text>
            <XStack gap={12} alignSelf="flex-end">
              <Text fontSize={14} color="#6750A4">Cancel</Text>
              <Text fontSize={14} color="#6750A4" fontWeight="600">OK</Text>
            </XStack>
          </View>
          <View position="absolute" top={-10} right={-10}>
            <Callout number={1} />
          </View>
          <View position="absolute" top={20} left={80}>
            <Callout number={2} />
          </View>
          <View position="absolute" top={55} left={-10}>
            <Callout number={3} />
          </View>
          <View position="absolute" top={95} left={-10}>
            <Callout number={4} />
          </View>
          <View position="absolute" bottom={10} right={-10}>
            <Callout number={5} />
          </View>
        </View>
      </YStack>
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Icon" />
        <LegendItem number={3} label="Title" />
        <LegendItem number={4} label="Body" />
        <LegendItem number={5} label="Action buttons" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/dialog/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
