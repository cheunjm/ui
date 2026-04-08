import type { Meta, StoryObj } from "@storybook/react-vite";
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
      <YStack width={240} height={180} justifyContent="center" alignItems="center">
        <View position="relative">
          <YStack backgroundColor="#FFFBFE" borderRadius={4} elevation={2} width={200} paddingVertical={8}>
            <XStack height={48} alignItems="center" paddingHorizontal={12} gap={12}>
              <View width={24} height={24} borderRadius={4} backgroundColor="#E8DEF8" />
              <Text flex={1} fontSize={14} color="#1C1B1F">Item label</Text>
              <Text fontSize={14} color="#49454F">Ctrl+C</Text>
            </XStack>
            <XStack height={48} alignItems="center" paddingHorizontal={12} gap={12}>
              <View width={24} height={24} borderRadius={4} backgroundColor="#E8DEF8" />
              <Text flex={1} fontSize={14} color="#1C1B1F">Item label</Text>
            </XStack>
          </YStack>
          <View position="absolute" top={-24} right={-20}><Callout number={1} /></View>
          <View position="absolute" top={12} left={-24}><Callout number={2} /></View>
          <View position="absolute" top={12} right={-24}><Callout number={3} /></View>
        </View>
      </YStack>
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Leading icon + label" />
        <LegendItem number={3} label="Trailing text" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "molecules/menu/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/C0eafJVCn9JsDxhxw0NjFw/molecules?node-id=4-15",
    },
  },
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
