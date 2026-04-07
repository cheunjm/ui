import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioButton } from "../../radio-button";
import type { RadioButtonProps } from "../../radio-button.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<RadioButtonProps> = {
  title: "atoms/radio-button/variants",
  component: RadioButton,
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}65-2`,
    },
  },
};

export default meta;
type Story = StoryObj<RadioButtonProps>;

export const Selected: Story = {
  args: { selected: true },
};

export const Unselected: Story = {
  args: { selected: false },
};

export const Error: Story = {
  args: { selected: false, error: true },
};

export const Disabled: Story = {
  args: { selected: false, disabled: true },
};
