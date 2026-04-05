import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "../../list-item";
import type { ListItemProps } from "../../list-item.type";

const meta: Meta<ListItemProps> = {
  title: "molecules/list-item/variants",
  component: ListItem,
  args: { headline: "List item headline" },
};

export default meta;
type Story = StoryObj<ListItemProps>;

export const OneLine: Story = { name: "One Line", args: { headline: "Single line item" } };
export const TwoLine: Story = { name: "Two Line", args: { headline: "Two line item", supportingText: "Supporting text" } };
export const ThreeLine: Story = { name: "Three Line", args: { headline: "Three line item", supportingText: "Supporting text that provides additional context", overlineText: "OVERLINE" } };
export const WithLeadingIcon: Story = { name: "With Leading Icon", args: { headline: "With icon", leadingContent: "person" } };
export const WithTrailing: Story = { name: "With Trailing", args: { headline: "With trailing", trailingContent: "100+", trailingSupportingText: "2h ago" } };
