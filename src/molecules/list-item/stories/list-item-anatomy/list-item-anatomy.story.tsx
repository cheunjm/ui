import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text, View } from "tamagui";

function Callout({ number }: { number: number }) {
  return (
    <XStack width={24} height={24} borderRadius={12} backgroundColor="#6750A4" justifyContent="center" alignItems="center">
      <Text fontSize={12} fontWeight="600" color="#FFFFFF">{number}</Text>
    </XStack>
  );
}

function LegendItem({ number, label }: { number: number; label: string }) {
  return (
    <XStack gap={10} alignItems="center">
      <Callout number={number} />
      <Text fontSize={14} color="#1C1B1F">{label}</Text>
    </XStack>
  );
}

function Anatomy() {
  return (
    <XStack backgroundColor="#FFFFFF" borderRadius={12} borderWidth={1} borderColor="#E0E0E0" padding={24} gap={48} alignItems="center">
      <YStack width={300} height={120} justifyContent="center" alignItems="center">
        <View position="relative">
          <XStack height={72} width={280} alignItems="center" paddingHorizontal={16} gap={16}>
            <View width={24} height={24} borderRadius={4} backgroundColor="#E8DEF8" />
            <YStack flex={1}>
              <Text fontSize={16} color="#1C1B1F">Headline</Text>
              <Text fontSize={14} color="#49454F">Supporting text</Text>
            </YStack>
            <Text fontSize={14} color="#49454F">100+</Text>
          </XStack>
          <View position="absolute" top={-24} left={0}><Callout number={1} /></View>
          <View position="absolute" top={8} left={-24}><Callout number={2} /></View>
          <View position="absolute" top={24} right={-24}><Callout number={3} /></View>
        </View>
      </YStack>
      <YStack gap={12}>
        <LegendItem number={1} label="Leading content" />
        <LegendItem number={2} label="Headline + supporting text" />
        <LegendItem number={3} label="Trailing content" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "molecules/list-item/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
