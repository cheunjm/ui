import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "tamagui";
import { EmptyStateTemplate } from "../../empty-state-template";
import type { EmptyStateTemplateProps } from "../../empty-state-template.type";

const meta: Meta<EmptyStateTemplateProps> = {
  title: "templates/empty-state-template/variants",
  component: EmptyStateTemplate,
};

export default meta;
type Story = StoryObj<EmptyStateTemplateProps>;

export const WithIcon: Story = {
  args: {
    icon: "inbox",
    title: "No Items",
    body: "You don't have any items yet. Add one to get started.",
  },
};

export const WithAction: Story = {
  args: {
    icon: "add_circle_outline",
    title: "Nothing Here",
    body: "Start by adding your first item.",
    action: (
      <View backgroundColor="#6750A4" borderRadius={20} paddingHorizontal={24} paddingVertical={10}>
        <Text color="#FFF">Add Item</Text>
      </View>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: "No Results",
    body: "Try adjusting your search or filters.",
  },
};
