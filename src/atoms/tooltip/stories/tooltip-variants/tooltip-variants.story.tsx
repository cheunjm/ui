import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text } from "tamagui";
import { Tooltip } from "../../tooltip";
import type { TooltipProps } from "../../tooltip.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<TooltipProps> = {
  title: "atoms/tooltip/variants",
  component: Tooltip,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}299-20` },
  },
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
