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
      <YStack
        width={200}
        height={140}
        justifyContent="center"
        alignItems="center"
      >
        <View position="relative">
          <View
            backgroundColor="#EADDFF"
            borderRadius={9999}
            width={40}
            height={40}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={16} fontWeight="500" color="#21005D">
              JD
            </Text>
          </View>

          <View position="absolute" top={-36} right={-40}>
            <Callout number={1} />
          </View>

          <View position="absolute" bottom={-36} right={-40}>
            <Callout number={2} />
          </View>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Content (image / initials / icon)" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/avatar/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/placeholder",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
