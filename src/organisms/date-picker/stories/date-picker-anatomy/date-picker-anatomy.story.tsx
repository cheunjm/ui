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
      <YStack width={280} height={300} justifyContent="center" alignItems="center">
        <View position="relative" width={260} height={280}>
          <View
            backgroundColor="#FFFBFE"
            borderRadius={28}
            width={260}
            height={280}
            overflow="hidden"
          >
            <View backgroundColor="#E8DEF8" height={80} padding={16} justifyContent="flex-end">
              <Text fontSize={12} color="#49454F">Select date</Text>
              <Text fontSize={20} fontWeight="600" color="#1C1B1F">Mon, Aug 14</Text>
            </View>
            <View padding={12} flex={1}>
              <XStack justifyContent="space-around" marginBottom={8}>
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <Text key={i} fontSize={12} color="#49454F" width={28} textAlign="center">{d}</Text>
                ))}
              </XStack>
              <View height={80} backgroundColor="#F5F5F5" borderRadius={8} />
            </View>
            <XStack justifyContent="flex-end" padding={12} gap={8}>
              <Text fontSize={14} color="#6750A4">Cancel</Text>
              <Text fontSize={14} color="#6750A4" fontWeight="600">OK</Text>
            </XStack>
          </View>
          <View position="absolute" top={10} right={-10}>
            <Callout number={1} />
          </View>
          <View position="absolute" top={100} right={-10}>
            <Callout number={2} />
          </View>
          <View position="absolute" bottom={10} right={-10}>
            <Callout number={3} />
          </View>
        </View>
      </YStack>
      <YStack gap={12}>
        <LegendItem number={1} label="Header" />
        <LegendItem number={2} label="Calendar grid" />
        <LegendItem number={3} label="Action buttons" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/date-picker/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
