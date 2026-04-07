import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../../divider";
import type { DividerProps } from "../../divider.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<DividerProps> = {
  title: "atoms/divider/variants",
  component: Divider,
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}1-4`,
    },
  },
};

export default meta;
type Story = StoryObj<DividerProps>;

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [
    (Story) => (
      <div style={{ height: 100 }}>
        <Story />
      </div>
    ),
  ],
};

export const InsetLeft: Story = {
  name: "Inset Left",
  args: { orientation: "horizontal", inset: "insetLeft" },
};

export const InsetBoth: Story = {
  name: "Inset Both",
  args: { orientation: "horizontal", inset: "insetBoth" },
};
