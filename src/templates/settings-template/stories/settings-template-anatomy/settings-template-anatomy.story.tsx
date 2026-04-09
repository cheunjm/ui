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

function LegendItem({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
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
      <YStack width={300} height={320} justifyContent="center" alignItems="center">
        <View position="relative" width={200} height={300}>
          <View
            backgroundColor="#F7F2FA"
            borderRadius={12}
            width={200}
            height={300}
            overflow="hidden"
          >
            <View
              backgroundColor="#E8DEF8"
              height={48}
              width="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={10} color="#6750A4">
                Top Bar
              </Text>
            </View>

            <View padding={8}>
              <Text fontSize={9} color="#6750A4" marginBottom={4}>
                Section Title
              </Text>
              <View backgroundColor="#EDE7F6" height={24} marginBottom={2} borderRadius={4} />
              <View backgroundColor="#EDE7F6" height={24} marginBottom={2} borderRadius={4} />
            </View>

            <View height={1} backgroundColor="#CAC4D0" />

            <View padding={8}>
              <Text fontSize={9} color="#6750A4" marginBottom={4}>
                Collapsible Section
              </Text>
              <View backgroundColor="#EDE7F6" height={24} marginBottom={2} borderRadius={4} />
            </View>

            <View flex={1} padding={8} justifyContent="center" alignItems="center">
              <Text fontSize={10} color="#49454F">
                Children
              </Text>
            </View>
          </View>

          <View position="absolute" top={12} right={-30}>
            <Callout number={1} />
          </View>

          <View position="absolute" top={70} right={-30}>
            <Callout number={2} />
          </View>

          <View position="absolute" top={150} right={-30}>
            <Callout number={3} />
          </View>

          <View position="absolute" bottom={20} right={-30}>
            <Callout number={4} />
          </View>
        </View>
      </YStack>

      <YStack gap={12}>
        <LegendItem number={1} label="Top bar slot (optional)" />
        <LegendItem number={2} label="Settings section with title" />
        <LegendItem number={3} label="Collapsible section (Accordion)" />
        <LegendItem number={4} label="Children slot (optional)" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "templates/settings-template/anatomy",
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
