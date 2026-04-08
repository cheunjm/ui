import type { Meta, StoryObj } from "@storybook/react";
import { YStack, XStack, View, Text } from "tamagui";

function Callout({ n }: { n: number }) {
  return (
    <View
      width={24}
      height={24}
      borderRadius={12}
      backgroundColor="#6750A4"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white" fontSize={12} fontWeight="700">{n}</Text>
    </View>
  );
}

function Anatomy() {
  return (
    <YStack gap={24} padding={16}>
      <YStack gap={12}>
        {[
          [1, "Scrim — semi-transparent overlay (32% opacity), dismisses sheet on tap"],
          [2, "Sheet panel — slides in from left or right, configurable width (default 256dp)"],
          [3, "Header — optional title + close button (56dp height)"],
          [4, "Content area — children rendered with 16dp padding"],
          [5, "Close button — IconButton that fires onClose"],
        ].map(([n, label]) => (
          <XStack key={n as number} gap={12} alignItems="center">
            <Callout n={n as number} />
            <Text fontSize={13} color="#49454F" flex={1}>{label as string}</Text>
          </XStack>
        ))}
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/SideSheet/Anatomy",
  component: Anatomy,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=10-15",
    },
  },
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
