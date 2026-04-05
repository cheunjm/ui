import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../../slider";
import type { SliderProps } from "../../slider.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<SliderProps> = {
  title: "atoms/slider/variants",
  component: Slider,
  args: {
    value: 40,
    min: 0,
    max: 100,
  },
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}67-2`,
    },
  },
};

export default meta;
type Story = StoryObj<SliderProps>;

export const Continuous: Story = {
  args: { type: "continuous" },
};

export const Discrete: Story = {
  args: { type: "discrete", step: 20 },
};

export const WithLabel: Story = {
  name: "With Label",
  args: { type: "continuous", showLabel: true },
};

export const Disabled: Story = {
  args: { type: "continuous", disabled: true },
};
