import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "../../date-picker";
import type { DatePickerProps } from "../../date-picker.type";

const meta: Meta<DatePickerProps> = {
  title: "organisms/date-picker/variants",
  component: DatePicker,
  args: {
    visible: true,
    onConfirm: () => {},
    onDismiss: () => {},
  },
};

export default meta;
type Story = StoryObj<DatePickerProps>;

export const Calendar: Story = {
  args: { mode: "calendar" },
};

export const Input: Story = {
  args: { mode: "input" },
};
