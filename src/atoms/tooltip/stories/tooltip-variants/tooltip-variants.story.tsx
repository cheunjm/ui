import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "tamagui";
import { Tooltip } from "../../tooltip";
import type { TooltipProps } from "../../tooltip.type";

const meta: Meta<TooltipProps> = {
  title: "atoms/tooltip/variants",
  component: Tooltip,
  args: {
    children: (
      <View
        backgroundColor="#6750A4"
        borderRadius={9999}
        width={40}
        height={40}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="#FFFFFF" fontSize={18}>
          ?
        </Text>
      </View>
    ),
  },
};

export default meta;
type Story = StoryObj<TooltipProps>;

export const Plain: Story = {
  args: { variant: "plain", label: "Tooltip label" },
};

export const Rich: Story = {
  args: {
    variant: "rich",
    label: "Rich tooltip",
    description: "Supporting description text for the tooltip.",
    actionLabel: "Action",
  },
};
