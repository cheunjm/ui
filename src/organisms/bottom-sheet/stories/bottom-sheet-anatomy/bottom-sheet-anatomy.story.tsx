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
      <YStack width={280} height={260} justifyContent="center" alignItems="center">
        <View position="relative" width={260} height={240}>
          <View
            backgroundColor="rgba(0,0,0,0.32)"
            width={260}
            height={240}
            borderRadius={4}
          />
          <View
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            height={160}
            backgroundColor="#FFFBFE"
            borderTopLeftRadius={28}
            borderTopRightRadius={28}
            alignItems="center"
            paddingTop={12}
          >
            <View width={32} height={4} borderRadius={2} backgroundColor="#CAC4D0" />
            <View padding={24} width="100%">
              <Text fontSize={14} color="#1C1B1F">Sheet content</Text>
            </View>
          </View>
          <View position="absolute" top={20} right={-10}>
            <Callout number={1} />
          </View>
          <View position="absolute" bottom={130} left={-10}>
            <Callout number={2} />
          </View>
          <View position="absolute" bottom={120} left={100}>
            <Callout number={3} />
          </View>
          <View position="absolute" bottom={40} right={-10}>
            <Callout number={4} />
          </View>
        </View>
      </YStack>
      <YStack gap={12}>
        <LegendItem number={1} label="Scrim" />
        <LegendItem number={2} label="Container" />
        <LegendItem number={3} label="Drag handle" />
        <LegendItem number={4} label="Content" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/bottom-sheet/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
