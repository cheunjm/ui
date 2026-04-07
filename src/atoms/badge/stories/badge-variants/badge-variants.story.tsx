import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../badge";
import type { BadgeProps } from "../../badge.type";

const meta: Meta<BadgeProps> = {
  title: "atoms/badge/variants",
  component: Badge,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=0-1",
    },
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Small: Story = {
  args: { size: "small" },
};

export const Large: Story = {
  args: { size: "large", count: 5 },
};

export const LargeCount: Story = {
  name: "Large + Count",
  args: { size: "large", count: 999 },
};
