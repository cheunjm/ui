import type { Meta, StoryObj } from "@storybook/react-vite";
import { TimePicker } from "../../time-picker";
import type { TimePickerProps } from "../../time-picker.type";

const FIGMA_BASE =
  "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=";

const meta: Meta<TimePickerProps> = {
  title: "organisms/time-picker/variants",
  component: TimePicker,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}13-11` },
  },
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
