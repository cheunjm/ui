import type { Meta, StoryObj } from "@storybook/react";
import { YStack, XStack, Text } from "tamagui";

const specs = [
  ["Default width", "256dp"],
  ["Height", "Full screen"],
  ["Background", "surface"],
  ["Header height", "56dp"],
  ["Content padding", "16dp"],
  ["Scrim opacity", "32%"],
  ["Elevation", "8"],
  ["Side", "left | right (default: right)"],
];

function Specs() {
  return (
    <YStack padding={16} gap={0}>
      <XStack backgroundColor="#E7E0EC" paddingVertical={10} paddingHorizontal={16}>
        <Text fontSize={13} fontWeight="700" color="#1C1B1F" flex={1}>Property</Text>
        <Text fontSize={13} fontWeight="700" color="#1C1B1F" flex={1}>Value</Text>
      </XStack>
      {specs.map(([prop, val], i) => (
        <XStack
          key={prop}
          backgroundColor={i % 2 === 0 ? "white" : "#FFFBFE"}
          paddingVertical={10}
          paddingHorizontal={16}
          borderBottomWidth={1}
          borderBottomColor="#E7E0EC"
        >
          <Text fontSize={13} color="#49454F" flex={1}>{prop}</Text>
          <Text fontSize={13} color="#1C1B1F" flex={1}>{val}</Text>
        </XStack>
      ))}
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/SideSheet/Specs",
  component: Specs,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=10-19",
    },
  },
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
