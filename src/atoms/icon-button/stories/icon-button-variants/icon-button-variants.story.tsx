import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../../icon-button";
import type { IconButtonProps } from "../../icon-button.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<IconButtonProps> = {
  title: "atoms/icon-button/variants",
  component: IconButton,
  args: {
    icon: "favorite",
  },
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}70-2`,
    },
  },
};

export default meta;
type Story = StoryObj<IconButtonProps>;

export const Standard: Story = {
  args: { variant: "standard" },
};

export const Filled: Story = {
  args: { variant: "filled" },
};

export const FilledTonal: Story = {
  name: "Filled Tonal",
  args: { variant: "filledTonal" },
};

export const Outlined: Story = {
  args: { variant: "outlined" },
};
