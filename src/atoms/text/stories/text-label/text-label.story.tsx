import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../text";

const meta: Meta<typeof Text> = {
  title: "atoms/text/label",
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
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Large: Story = {
  args: {
    role: "label",
    size: "large",
    children: "Label Large",
  },
};

export const Medium: Story = {
  args: {
    role: "label",
    size: "medium",
    children: "Label Medium",
  },
};

export const Small: Story = {
  args: {
    role: "label",
    size: "small",
    children: "Label Small",
  },
};
