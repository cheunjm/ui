import { useState } from "react";
import { Switch } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItem } from "../../list-item";
import type { ListItemProps } from "../../list-item.type";

const FIGMA_BASE =
  "https://www.figma.com/design/C0eafJVCn9JsDxhxw0NjFw/molecules?node-id=";

const meta: Meta<ListItemProps> = {
  title: "molecules/list-item/variants",
  component: ListItem,
  args: { headline: "List item headline" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}3-11` },
  },
};

export default meta;
type Story = StoryObj<ListItemProps>;

export const OneLine: Story = {
  name: "One Line",
  args: { headline: "Single line item" },
};
export const TwoLine: Story = {
  name: "Two Line",
  args: { headline: "Two line item", supportingText: "Supporting text" },
};
export const ThreeLine: Story = {
  name: "Three Line",
  args: {
    headline: "Three line item",
    supportingText: "Supporting text that provides additional context",
    overlineText: "OVERLINE",
  },
};
export const WithLeadingIcon: Story = {
  name: "With Leading Icon",
  args: { headline: "With icon", leadingContent: "person" },
};
export const WithTrailing: Story = {
  name: "With Trailing",
  args: {
    headline: "With trailing",
    trailingContent: "100+",
    trailingSupportingText: "2h ago",
  },
};

export const WithLeadingAvatar: Story = {
  name: "With Leading Avatar",
  args: {
    headline: "John Doe",
    supportingText: "john@example.com",
    leadingAvatar: { name: "John Doe" },
    trailingSupportingText: "2m ago",
  },
};

export const WithTrailingElement: Story = {
  name: "With Trailing Element",
  render: (args) => {
    const [enabled, setEnabled] = useState(true);
    return (
      <ListItem
        {...args}
        trailingElement={<Switch value={enabled} onValueChange={setEnabled} />}
      />
    );
  },
  args: {
    headline: "Notifications",
    supportingText: "Receive push notifications",
  },
};
