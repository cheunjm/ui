import type { Meta, StoryObj } from "@storybook/react-vite";
import { FAB } from "../../fab";
import type { FabProps } from "../../fab.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<FabProps> = {
  title: "atoms/fab/variants",
  component: FAB,
  args: {
    icon: "add",
  },
};

export default meta;
type Story = StoryObj<FabProps>;

export const Primary: Story = {
  args: { color: "primary" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}122-14` },
  },
};

export const Secondary: Story = {
  args: { color: "secondary" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}122-27` },
  },
};

export const Tertiary: Story = {
  args: { color: "tertiary" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}122-40` },
  },
};

export const Surface: Story = {
  args: { color: "surface" },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}122-53` },
  },
};
