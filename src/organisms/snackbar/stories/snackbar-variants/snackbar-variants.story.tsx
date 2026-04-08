import type { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar } from "../../snackbar";
import type { SnackbarProps } from "../../snackbar.type";

const FIGMA_BASE =
  "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=";

const meta: Meta<SnackbarProps> = {
  title: "organisms/snackbar/variants",
  component: Snackbar,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}11-11` },
  },
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
