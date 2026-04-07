import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../text";

const meta: Meta<typeof Text> = {
  title: "atoms/text/headline",
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
    role: "headline",
    size: "large",
    children: "Headline Large",
  },
};

export const Medium: Story = {
  args: {
    role: "headline",
    size: "medium",
    children: "Headline Medium",
  },
};

export const Small: Story = {
  args: {
    role: "headline",
    size: "small",
    children: "Headline Small",
  },
};
