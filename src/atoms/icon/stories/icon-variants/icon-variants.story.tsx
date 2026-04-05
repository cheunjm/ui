import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../icon";
import type { IconProps } from "../../icon.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<IconProps> = {
  title: "atoms/icon/variants",
  component: Icon,
  args: {
    name: "star",
  },
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}52-3`,
    },
  },
};

export default meta;
type Story = StoryObj<IconProps>;

export const Size20: Story = {
  name: "Size 20",
  args: { size: 20 },
};

export const Size24: Story = {
  name: "Size 24",
  args: { size: 24 },
};

export const Size40: Story = {
  name: "Size 40",
  args: { size: 40 },
};

export const Size48: Story = {
  name: "Size 48",
  args: { size: 48 },
};
