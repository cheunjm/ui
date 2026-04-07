import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "../../menu";
import type { MenuProps } from "../../menu.type";

const meta: Meta<MenuProps> = {
  title: "molecules/menu/variants",
  component: Menu,
  args: {
    visible: true,
    onDismiss: () => {},
  },
};

export default meta;
type Story = StoryObj<MenuProps>;

export const Default: Story = {
  args: {
    items: [
      { key: "cut", label: "Cut", onPress: () => {} },
      { key: "copy", label: "Copy", onPress: () => {} },
      { key: "paste", label: "Paste", onPress: () => {} },
    ],
  },
};

export const WithIcons: Story = {
  name: "With Icons",
  args: {
    items: [
      { key: "cut", label: "Cut", leadingIcon: "content_cut", onPress: () => {} },
      { key: "copy", label: "Copy", leadingIcon: "content_copy", onPress: () => {} },
      { key: "paste", label: "Paste", leadingIcon: "content_paste", onPress: () => {} },
    ],
  },
};

export const WithTrailingText: Story = {
  name: "With Trailing Text",
  args: {
    items: [
      { key: "cut", label: "Cut", trailingText: "Ctrl+X", onPress: () => {} },
      { key: "copy", label: "Copy", trailingText: "Ctrl+C", onPress: () => {} },
      { key: "paste", label: "Paste", trailingText: "Ctrl+V", onPress: () => {} },
    ],
  },
};

export const WithDisabledItem: Story = {
  name: "With Disabled Item",
  args: {
    items: [
      { key: "cut", label: "Cut", onPress: () => {} },
      { key: "copy", label: "Copy", onPress: () => {}, disabled: true },
      { key: "paste", label: "Paste", onPress: () => {} },
    ],
  },
};
