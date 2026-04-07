import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedButton } from "../../segmented-button";
import type { SegmentedButtonProps } from "../../segmented-button.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const segments = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];

const meta: Meta<SegmentedButtonProps> = {
  title: "atoms/segmented-button/variants",
  component: SegmentedButton,
  args: {
    segments,
  },
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}69-2`,
    },
  },
};

export default meta;
type Story = StoryObj<SegmentedButtonProps>;

export const SingleSelect: Story = {
  name: "Single Select",
  args: { selected: "day", multiSelect: false },
};

export const MultiSelect: Story = {
  name: "Multi Select",
  args: { selected: ["day", "week"], multiSelect: true },
};
