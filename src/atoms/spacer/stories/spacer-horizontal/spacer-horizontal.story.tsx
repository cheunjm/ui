import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spacer } from "../../spacer";

const meta: Meta<typeof Spacer> = {
  title: "atoms/spacer/horizontal",
  component: Spacer,
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: [4, 8, 12, 16, 24, 32],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=52-5",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Size4: Story = {
  args: {
    direction: "horizontal",
    size: 4,
  },
};

export const Size8: Story = {
  args: {
    direction: "horizontal",
    size: 8,
  },
};

export const Size12: Story = {
  args: {
    direction: "horizontal",
    size: 12,
  },
};

export const Size16: Story = {
  args: {
    direction: "horizontal",
    size: 16,
  },
};

export const Size24: Story = {
  args: {
    direction: "horizontal",
    size: 24,
  },
};

export const Size32: Story = {
  args: {
    direction: "horizontal",
    size: 32,
  },
};
