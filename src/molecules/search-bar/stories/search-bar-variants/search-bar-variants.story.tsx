import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchBar } from "../../search-bar";
import type { SearchBarProps } from "../../search-bar.type";

const meta: Meta<SearchBarProps> = {
  title: "molecules/search-bar/variants",
  component: SearchBar,
};

export default meta;
type Story = StoryObj<SearchBarProps>;

export const Empty: Story = {
  args: { placeholder: "Search" },
};

export const WithText: Story = {
  name: "With Text",
  args: { value: "Search query" },
};

export const WithTrailingIcon: Story = {
  name: "With Trailing Icon",
  args: { trailingIcon: "mic" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Search" },
};
