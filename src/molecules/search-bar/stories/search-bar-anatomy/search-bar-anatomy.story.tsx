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
      <YStack width={300} height={100} justifyContent="center" alignItems="center">
        <View position="relative">
          <XStack backgroundColor="#E6E0E9" borderRadius={28} height={56} width={280} alignItems="center" paddingHorizontal={16} gap={12}>
            <View width={24} height={24} borderRadius={4} backgroundColor="#CCC2DC" />
            <Text flex={1} fontSize={16} color="#49454F">Search</Text>
            <View width={24} height={24} borderRadius={4} backgroundColor="#CCC2DC" />
          </XStack>
          <View position="absolute" top={-24} left={-10}><Callout number={1} /></View>
          <View position="absolute" top={10} left={-28}><Callout number={2} /></View>
          <View position="absolute" top={10} right={-28}><Callout number={3} /></View>
        </View>
      </YStack>
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Leading icon" />
        <LegendItem number={3} label="Trailing icon / clear" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = { title: "molecules/search-bar/anatomy", component: Anatomy, tags: ["autodocs", "!dev"] };
export default meta;
type Story = StoryObj;
export const Default: Story = {};
