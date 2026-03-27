import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text/Title",
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
    role: "title",
    size: "large",
    children: "Title Large",
  },
};

export const Medium: Story = {
  args: {
    role: "title",
    size: "medium",
    children: "Title Medium",
  },
};

export const Small: Story = {
  args: {
    role: "title",
    size: "small",
    children: "Title Small",
  },
};
