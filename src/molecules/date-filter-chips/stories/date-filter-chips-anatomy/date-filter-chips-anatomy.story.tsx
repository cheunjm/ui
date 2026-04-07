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
      <YStack width={260} height={100} justifyContent="center" alignItems="center">
        <View position="relative">
          <XStack gap={8}>
            {["1D", "1W", "1M"].map((label) => (
              <View key={label} backgroundColor="#E8DEF8" borderRadius={8} paddingHorizontal={12} paddingVertical={6}>
                <Text fontSize={14} fontWeight="500" color="#1D192B">{label}</Text>
              </View>
            ))}
          </XStack>
          <View position="absolute" top={-30} right={-20}><Callout number={1} /></View>
          <View position="absolute" bottom={-30} left={20}><Callout number={2} /></View>
        </View>
      </YStack>
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Filter chips" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "molecules/date-filter-chips/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
