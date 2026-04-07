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
      <YStack width={260} height={160} justifyContent="center" alignItems="center">
        <View position="relative" width={220}>
          <Text fontSize={12} color="#49454F">Label *</Text>
          <View backgroundColor="#E7E0EC" borderTopLeftRadius={4} borderTopRightRadius={4} height={56} width={220} marginTop={4} paddingHorizontal={16} paddingTop={16}>
            <Text fontSize={16} color="#1C1B1F">Input text</Text>
          </View>
          <View height={1} backgroundColor="#49454F" width={220} />
          <Text fontSize={12} color="#49454F" marginTop={4}>Helper text</Text>
          <View position="absolute" top={-20} right={-20}><Callout number={1} /></View>
          <View position="absolute" top={20} right={-30}><Callout number={2} /></View>
          <View position="absolute" bottom={-10} left={-30}><Callout number={3} /></View>
        </View>
      </YStack>
      <YStack gap={12}>
        <LegendItem number={1} label="Label" />
        <LegendItem number={2} label="Text field" />
        <LegendItem number={3} label="Helper / error text" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "molecules/form-field/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
