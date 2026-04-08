import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "../../date-picker";
import type { DatePickerProps } from "../../date-picker.type";

const FIGMA_BASE =
  "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=";

const meta: Meta<DatePickerProps> = {
  title: "organisms/date-picker/variants",
  component: DatePicker,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}4-11` },
  },
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
