import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "../../navigation-bar";
import type { NavigationBarProps } from "../../navigation-bar.type";

const meta: Meta<NavigationBarProps> = {
  title: "organisms/navigation-bar/variants",
  component: NavigationBar,
  args: {
    activeIndex: 0,
    onDestinationPress: () => {},
  },
};

export default meta;
type Story = StoryObj<NavigationBarProps>;

export const ThreeItems: Story = {
  args: {
    destinations: [
      { icon: "home", label: "Home" },
      { icon: "search", label: "Search" },
      { icon: "person", label: "Profile" },
    ],
  },
};

export const FourItems: Story = {
  args: {
    destinations: [
      { icon: "home", label: "Home" },
      { icon: "search", label: "Search" },
      { icon: "notifications", label: "Alerts" },
      { icon: "person", label: "Profile" },
    ],
  },
};

export const FiveItems: Story = {
  args: {
    destinations: [
      { icon: "home", label: "Home" },
      { icon: "search", label: "Search" },
      { icon: "add-circle", label: "Create" },
      { icon: "notifications", label: "Alerts" },
      { icon: "person", label: "Profile" },
    ],
  },
};
