import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../text";

const meta: Meta<typeof Text> = {
  title: "atoms/text/body",
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
    role: "body",
    size: "large",
    children: "Body Large",
  },
};

export const Medium: Story = {
  args: {
    role: "body",
    size: "medium",
    children: "Body Medium",
  },
};

export const Small: Story = {
  args: {
    role: "body",
    size: "small",
    children: "Body Small",
  },
};
