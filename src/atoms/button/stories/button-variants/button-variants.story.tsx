import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../button";
import type { ButtonProps } from "../../button.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<ButtonProps> = {
  title: "atoms/button/variants",
  component: Button,
  args: {
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Filled: Story = {
  args: { variant: "filled" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}118-20` },
  },
};

export const Outlined: Story = {
  args: { variant: "outlined" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}118-44` },
  },
};

export const Text: Story = {
  args: { variant: "text" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}118-68` },
  },
};

export const Elevated: Story = {
  args: { variant: "elevated" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}118-92` },
  },
};

export const Tonal: Story = {
  args: { variant: "tonal" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}118-116` },
  },
};
