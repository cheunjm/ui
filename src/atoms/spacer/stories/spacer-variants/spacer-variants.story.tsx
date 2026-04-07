import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spacer } from "../../spacer";
import type { SpacerProps } from "../../spacer.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<SpacerProps> = {
  title: "atoms/spacer/variants",
  component: Spacer,
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}52-5`,
    },
  },
};

export default meta;
type Story = StoryObj<SpacerProps>;

export const Horizontal: Story = {
  args: { direction: "horizontal", size: 16 },
};

export const Vertical: Story = {
  args: { direction: "vertical", size: 16 },
};
