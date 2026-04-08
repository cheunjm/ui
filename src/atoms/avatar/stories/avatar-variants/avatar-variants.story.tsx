import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../../avatar";
import type { AvatarProps } from "../../avatar.type";

const meta: Meta<AvatarProps> = {
  title: "atoms/avatar/variants",
  component: Avatar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/placeholder",
    },
  },
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const Image: Story = {
  args: {
    source: { uri: "https://i.pravatar.cc/56" },
    size: "medium",
  },
};

export const Initials: Story = {
  args: {
    name: "John Doe",
    size: "medium",
  },
};

export const IconFallback: Story = {
  name: "Icon (fallback)",
  args: {
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    name: "Alice",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    name: "Bob Smith",
    size: "large",
  },
};

export const CustomColor: Story = {
  name: "Custom Color",
  args: {
    name: "Jane",
    size: "medium",
    color: "#DCFCE7",
  },
};
