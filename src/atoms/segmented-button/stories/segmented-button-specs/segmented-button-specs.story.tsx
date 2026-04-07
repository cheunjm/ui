import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";

const specs = [
  { property: "Height", value: "40 dp" },
  { property: "Corner radius", value: "20 dp (full)" },
  { property: "Border width", value: "1 dp" },
  { property: "Icon size", value: "18 dp" },
  { property: "Font", value: "Label Large (14sp, Medium)" },
  { property: "Container (selected)", value: "md.sys.color.secondary-container" },
  { property: "Container (unselected)", value: "md.sys.color.surface" },
  { property: "Outline color", value: "md.sys.color.outline" },
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
  title: "atoms/segmented-button/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=69-2",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
