import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopAppBar } from "../../top-app-bar";
import type { TopAppBarProps } from "../../top-app-bar.type";

const meta: Meta<TopAppBarProps> = {
  title: "organisms/top-app-bar/variants",
  component: TopAppBar,
  args: {
    title: "Title",
    navigationIcon: "arrow-back",
    onNavigationPress: () => {},
    actions: [{ icon: "more-vert", onPress: () => {} }],
  },
};

export default meta;
type Story = StoryObj<TopAppBarProps>;

export const CenterAligned: Story = {
  args: { type: "center-aligned" },
};

export const Small: Story = {
  args: { type: "small" },
};

export const Medium: Story = {
  args: { type: "medium" },
};

export const Large: Story = {
  args: { type: "large" },
};
