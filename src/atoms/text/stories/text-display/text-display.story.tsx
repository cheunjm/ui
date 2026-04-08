import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../text";

const meta: Meta<typeof Text> = {
  title: "atoms/text/display",
  component: Text,
  argTypes: {
    role: {
      control: "select",
      options: ["display", "headline", "title", "body", "label"],
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
    },
    children: { control: "text" },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=52-4",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Large: Story = {
  args: {
    role: "display",
    size: "large",
    children: "Display Large",
  },
};

export const Medium: Story = {
  args: {
    role: "display",
    size: "medium",
    children: "Display Medium",
  },
};

export const Small: Story = {
  args: {
    role: "display",
    size: "small",
    children: "Display Small",
  },
};
