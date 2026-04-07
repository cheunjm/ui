import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { BottomAppBar } from "../../bottom-app-bar";

const fab = { icon: "add", onPress: () => {}, accessibilityLabel: "Add" };
const actions2 = [
  { icon: "search", onPress: () => {}, accessibilityLabel: "Search" },
  { icon: "more-vert", onPress: () => {}, accessibilityLabel: "More" },
];
const actions4 = [
  { icon: "search", onPress: () => {}, accessibilityLabel: "Search" },
  { icon: "tune", onPress: () => {}, accessibilityLabel: "Filter" },
  { icon: "bookmark", onPress: () => {}, accessibilityLabel: "Bookmark" },
  { icon: "more-vert", onPress: () => {}, accessibilityLabel: "More" },
];

function Variants() {
  return (
    <YStack gap={24}>
      <Text fontSize={14} fontWeight="600" color="#49454F">With FAB</Text>
      <BottomAppBar fab={fab} actions={actions2} />

      <Text fontSize={14} fontWeight="600" color="#49454F">Without FAB</Text>
      <BottomAppBar actions={actions2} />

      <Text fontSize={14} fontWeight="600" color="#49454F">2 Actions</Text>
      <BottomAppBar actions={actions2} />

      <Text fontSize={14} fontWeight="600" color="#49454F">4 Actions</Text>
      <BottomAppBar actions={actions4} />
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/BottomAppBar/Variants",
  component: Variants,
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
