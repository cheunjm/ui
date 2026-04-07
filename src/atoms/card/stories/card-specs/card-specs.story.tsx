import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";

const specs = [
  { property: "Corner radius", value: "12 dp" },
  { property: "Padding", value: "16 dp" },
  { property: "Elevation (elevated)", value: "Level 1" },
  { property: "Elevation (filled)", value: "Level 0" },
  { property: "Container (elevated)", value: "md.sys.color.surface-container-low" },
  { property: "Container (filled)", value: "md.sys.color.surface-container-highest" },
  { property: "Container (outlined)", value: "md.sys.color.surface" },
  { property: "Outline color", value: "md.sys.color.outline-variant" },
  { property: "Disabled opacity", value: "0.38" },
];

function SpecRow({
  property,
  value,
  isHeader,
}: {
  property: string;
  value: string;
  isHeader?: boolean;
}) {
  return (
    <XStack
      height={36}
      alignItems="center"
      borderBottomWidth={1}
      borderBottomColor="#E0E0E0"
    >
      <Text
        width={200}
        paddingLeft={16}
        fontSize={14}
        fontWeight={isHeader ? "600" : "400"}
        color="#1C1B1F"
      >
        {property}
      </Text>
      <Text
        flex={1}
        fontSize={14}
        fontWeight={isHeader ? "600" : "400"}
        color="#49454F"
      >
        {value}
      </Text>
    </XStack>
  );
}

function Specs() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
    >
      <YStack width={480}>
        <SpecRow property="Property" value="Value" isHeader />
        {specs.map((s) => (
          <SpecRow key={s.property} property={s.property} value={s.value} />
        ))}
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/card/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=296-82",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
