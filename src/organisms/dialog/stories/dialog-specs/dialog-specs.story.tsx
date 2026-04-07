import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";

const specs = [
  { property: "Min width", value: "280 dp" },
  { property: "Max width", value: "560 dp" },
  { property: "Corner radius", value: "28 dp" },
  { property: "Padding", value: "24 dp" },
  { property: "Elevation", value: "Level 3" },
  { property: "Container color", value: "md.sys.color.surface-container-high" },
  { property: "Icon size", value: "24 dp" },
  { property: "Title style", value: "Headline Small (24 sp)" },
  { property: "Body style", value: "Body Medium (14 sp)" },
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
  title: "organisms/dialog/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
