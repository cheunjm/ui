import type { Meta, StoryObj } from "@storybook/react";
import { ProgressIndicator } from "../../progress-indicator";
import type { ProgressIndicatorProps } from "../../progress-indicator.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<ProgressIndicatorProps> = {
  title: "atoms/progress-indicator/variants",
  component: ProgressIndicator,
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}68-2`,
    },
  },
};

export default meta;
type Story = StoryObj<ProgressIndicatorProps>;

export const LinearDeterminate: Story = {
  name: "Linear Determinate",
  args: { type: "linear", mode: "determinate", progress: 0.6 },
};

export const LinearIndeterminate: Story = {
  name: "Linear Indeterminate",
  args: { type: "linear", mode: "indeterminate" },
};

export const CircularDeterminate: Story = {
  name: "Circular Determinate",
  args: { type: "circular", mode: "determinate", progress: 0.6 },
};

export const CircularIndeterminate: Story = {
  name: "Circular Indeterminate",
  args: { type: "circular", mode: "indeterminate" },
};
