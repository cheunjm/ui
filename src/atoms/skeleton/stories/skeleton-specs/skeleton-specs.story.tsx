import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, XStack, Text } from "tamagui";

function SpecRow({ property, value }: { property: string; value: string }) {
  return (
    <XStack width={392} borderBottomWidth={1} borderColor="#E0E0E0">
      <Text flex={1} padding={10} paddingLeft={16} fontSize={14} color="#1C1B1F">
        {property}
      </Text>
      <Text flex={1} padding={10} paddingLeft={16} fontSize={14} color="#49454F">
        {value}
      </Text>
    </XStack>
  );
}

function Specs() {
  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
    >
      <XStack width={392} borderBottomWidth={1} borderColor="#E0E0E0" marginBottom={4}>
        <Text flex={1} padding={10} paddingLeft={16} fontSize={14} fontWeight="600" color="#1C1B1F">
          Property
        </Text>
        <Text flex={1} padding={10} paddingLeft={16} fontSize={14} fontWeight="600" color="#1C1B1F">
          Value
        </Text>
      </XStack>
      <SpecRow property="Default border radius" value="4 dp" />
      <SpecRow property="Default height" value="16 dp" />
      <SpecRow property="Default width" value="100%" />
      <SpecRow property="Background color" value="surfaceContainerHighest" />
      <SpecRow property="Animation" value="Opacity pulse: 1 → 0.3 → 1" />
      <SpecRow property="Animation duration" value="700 ms per phase (1400 ms total)" />
      <SpecRow property="Circle / pill shape" value="borderRadius: 9999" />
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/skeleton/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=301-65",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
