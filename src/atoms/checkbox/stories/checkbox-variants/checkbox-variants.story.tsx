import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../checkbox";
import type { CheckboxProps } from "../../checkbox.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<CheckboxProps> = {
  title: "atoms/checkbox/variants",
  component: Checkbox,
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}64-2`,
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Checked: Story = {
  args: { state: "checked" },
};

export const Unchecked: Story = {
  args: { state: "unchecked" },
};

export const Indeterminate: Story = {
  args: { state: "indeterminate" },
};

export const Error: Story = {
  args: { state: "unchecked", error: true },
};

export const Disabled: Story = {
  args: { state: "unchecked", disabled: true },
};
