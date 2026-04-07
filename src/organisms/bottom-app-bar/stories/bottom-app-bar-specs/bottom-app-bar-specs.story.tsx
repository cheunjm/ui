import type { Meta, StoryObj } from "@storybook/react";
import { YStack, XStack, View, Text } from "tamagui";

const specs = [
  ["Height", "80dp"],
  ["Background", "surfaceContainer"],
  ["Padding horizontal", "16dp"],
  ["Max actions", "4 IconButtons"],
  ["FAB size", "Regular (56dp)"],
  ["FAB position", "Leading (left)"],
  ["Actions position", "Trailing (right)"],
  ["Action gap", "8dp"],
];

function Specs() {
  return (
    <YStack padding={16} gap={0}>
      <XStack backgroundColor="#E7E0EC" paddingVertical={10} paddingHorizontal={16}>
        <Text fontSize={13} fontWeight="700" color="#1C1B1F" flex={1}>Property</Text>
        <Text fontSize={13} fontWeight="700" color="#1C1B1F" flex={1}>Value</Text>
      </XStack>
      {specs.map(([prop, val], i) => (
        <XStack
          key={prop}
          backgroundColor={i % 2 === 0 ? "white" : "#FFFBFE"}
          paddingVertical={10}
          paddingHorizontal={16}
          borderBottomWidth={1}
          borderBottomColor="#E7E0EC"
        >
          <Text fontSize={13} color="#49454F" flex={1}>{prop}</Text>
          <Text fontSize={13} color="#1C1B1F" flex={1}>{val}</Text>
        </XStack>
      ))}
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/BottomAppBar/Specs",
  component: Specs,
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
