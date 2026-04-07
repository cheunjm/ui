import type { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar } from "../../snackbar";
import type { SnackbarProps } from "../../snackbar.type";

const meta: Meta<SnackbarProps> = {
  title: "organisms/snackbar/variants",
  component: Snackbar,
  args: {
    visible: true,
    message: "Message sent",
    onDismiss: () => {},
  },
};

export default meta;
type Story = StoryObj<SnackbarProps>;

export const TextOnly: Story = {
  args: {},
};

export const WithAction: Story = {
  args: {
    actionLabel: "Undo",
    onAction: () => {},
  },
};

export const WithCloseIcon: Story = {
  args: {
    showCloseIcon: true,
  },
};
