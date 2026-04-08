import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "tamagui";
import { Dialog } from "../../dialog";
import type { DialogProps } from "../../dialog.type";

const FIGMA_BASE =
  "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=";

const meta: Meta<DialogProps> = {
  title: "organisms/dialog/variants",
  component: Dialog,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}5-11` },
  },
  args: {
    visible: true,
    onConfirm: () => {},
    onDismiss: () => {},
  },
};

export default meta;
type Story = StoryObj<DialogProps>;

export const Basic: Story = {
  args: {
    title: "Title",
    children: <Text>Body text for the dialog.</Text>,
  },
};

export const WithIcon: Story = {
  args: {
    icon: "info",
    title: "Info",
    children: <Text>Body text for the dialog.</Text>,
  },
};
