import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { BottomAppBar } from "../../bottom-app-bar";

const actions = [
  { icon: "search", onPress: () => {}, accessibilityLabel: "Search" },
  { icon: "tune", onPress: () => {}, accessibilityLabel: "Filter" },
  { icon: "more-vert", onPress: () => {}, accessibilityLabel: "More" },
];

const fab = { icon: "add", onPress: () => {}, accessibilityLabel: "Add" };

function Overview() {
  return (
    <YStack gap={24}>
      <Text fontSize={14} fontWeight="600" color="#49454F">With FAB + 3 Actions</Text>
      <BottomAppBar fab={fab} actions={actions} />

      <Text fontSize={14} fontWeight="600" color="#49454F">Without FAB</Text>
      <BottomAppBar actions={actions} />

      <Text fontSize={14} fontWeight="600" color="#49454F">Actions Only (4)</Text>
      <BottomAppBar
        actions={[
          ...actions,
          { icon: "delete", onPress: () => {}, accessibilityLabel: "Delete" },
        ]}
      />
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/BottomAppBar/Overview",
  component: Overview,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=1-7",
    },
  },
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
