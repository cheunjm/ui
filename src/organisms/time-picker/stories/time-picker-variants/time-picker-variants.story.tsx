import type { Meta, StoryObj } from "@storybook/react-vite";
import { TimePicker } from "../../time-picker";
import type { TimePickerProps } from "../../time-picker.type";

const meta: Meta<TimePickerProps> = {
  title: "organisms/time-picker/variants",
  component: TimePicker,
  args: {
    visible: true,
    hour: 10,
    minute: 30,
    onConfirm: () => {},
    onDismiss: () => {},
  },
};

export default meta;
type Story = StoryObj<TimePickerProps>;

export const Clock: Story = {
  args: { mode: "clock" },
};

export const Input: Story = {
  args: { mode: "input" },
};
