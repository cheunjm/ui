import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text, View } from "tamagui";

const specs = [
  { property: "Height", value: "40 dp" },
  { property: "Min width", value: "64 dp" },
  { property: "Corner radius", value: "20 dp (full)" },
  { property: "Padding horizontal", value: "24 dp (16 with icon)" },
  { property: "Icon size", value: "18 dp" },
  { property: "Font", value: "Label Large (14sp, Medium)" },
  { property: "Container color", value: "md.sys.color.primary" },
  { property: "Label color", value: "md.sys.color.on-primary" },
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
        width={160}
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
      <YStack width={392}>
        <SpecRow property="Property" value="Value" isHeader />
        {specs.map((s) => (
          <SpecRow key={s.property} property={s.property} value={s.value} />
        ))}
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "Atoms/Button/Specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=208-36",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
