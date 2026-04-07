import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "../../text-field";
import type { TextFieldProps } from "../../text-field.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<TextFieldProps> = {
  title: "atoms/text-field/variants",
  component: TextField,
  args: {
    label: "Label",
    value: "Input text",
  },
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}52-2`,
    },
  },
};

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Filled: Story = {
  args: { variant: "filled" },
};

export const Outlined: Story = {
  args: { variant: "outlined" },
};
