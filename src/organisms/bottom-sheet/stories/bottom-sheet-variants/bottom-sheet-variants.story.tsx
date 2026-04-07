import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "tamagui";
import { BottomSheet } from "../../bottom-sheet";
import type { BottomSheetProps } from "../../bottom-sheet.type";

const meta: Meta<BottomSheetProps> = {
  title: "organisms/bottom-sheet/variants",
  component: BottomSheet,
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
