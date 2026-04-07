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
      <YStack width={300} height={200} justifyContent="center" alignItems="center">
        <View position="relative" width={280} height={180}>
          <View width={280} height={150} flexDirection="row" gap={8} overflow="hidden">
            <View backgroundColor="#E8DEF8" width={120} height={150} borderRadius={12} />
            <View backgroundColor="#D0BCFF" width={120} height={150} borderRadius={12} />
          </View>
          <XStack gap={8} justifyContent="center" marginTop={12}>
            <View width={8} height={8} borderRadius={4} backgroundColor="#6750A4" />
            <View width={8} height={8} borderRadius={4} backgroundColor="#CAC4D0" />
            <View width={8} height={8} borderRadius={4} backgroundColor="#CAC4D0" />
          </XStack>
          <View position="absolute" top={-10} left={-10}>
            <Callout number={1} />
          </View>
          <View position="absolute" top={40} left={50}>
            <Callout number={2} />
          </View>
          <View position="absolute" bottom={-5} left={120}>
            <Callout number={3} />
          </View>
        </View>
      </YStack>
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Carousel items" />
        <LegendItem number={3} label="Pagination dots" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/carousel/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
