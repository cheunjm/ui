import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateFilterChips } from "../../date-filter-chips";
import type { DateFilterChipsProps } from "../../date-filter-chips.type";

const options = [
  { value: "1d", label: "1D" },
  { value: "1w", label: "1W" },
  { value: "1m", label: "1M" },
  { value: "3m", label: "3M" },
  { value: "1y", label: "1Y" },
];

const meta: Meta<DateFilterChipsProps> = {
  title: "molecules/date-filter-chips/variants",
  component: DateFilterChips,
  args: { options },
};

export default meta;
type Story = StoryObj<DateFilterChipsProps>;

export const Default: Story = {};

export const PreSelected: Story = {
  name: "Pre-selected",
  args: { selectedValue: "1m" },
};

export const Disabled: Story = {
  args: { disabled: true },
};
