import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../chip";
import type { ChipProps } from "../../chip.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<ChipProps> = {
  title: "atoms/chip/variants",
  component: Chip,
  args: {
    label: "Chip",
  },
};

export default meta;
type Story = StoryObj<ChipProps>;

export const Assist: Story = {
  args: { type: "assist" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}119-20` },
  },
};

export const Filter: Story = {
  args: { type: "filter" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}119-34` },
  },
};

export const Input: Story = {
  args: { type: "input" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}119-48` },
  },
};

export const Suggestion: Story = {
  args: { type: "suggestion" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}119-62` },
  },
};
