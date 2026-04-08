import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text } from "tamagui";
import { BottomSheet } from "../../bottom-sheet";
import type { BottomSheetProps } from "../../bottom-sheet.type";

const FIGMA_BASE =
  "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=";

const meta: Meta<BottomSheetProps> = {
  title: "organisms/bottom-sheet/variants",
  component: BottomSheet,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}2-11` },
  },
  args: {
    visible: true,
    onDismiss: () => {},
    children: (
      <View padding={24}>
        <Text>Sheet content</Text>
      </View>
    ),
  },
};

export default meta;
type Story = StoryObj<BottomSheetProps>;

export const Modal: Story = {
  args: { variant: "modal" },
};

export const Standard: Story = {
  args: { variant: "standard" },
};
