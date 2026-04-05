import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";

const specs = [
  { property: "Primary height (with icon)", value: "64 dp" },
  { property: "Primary height (label only)", value: "48 dp" },
  { property: "Secondary height", value: "48 dp" },
  { property: "Active indicator", value: "3 dp underline (primary)" },
  { property: "Min tab width (scrollable)", value: "90 dp" },
  { property: "Icon size", value: "24 dp" },
  { property: "Font", value: "Label Medium" },
  { property: "Active color (primary)", value: "md.sys.color.primary" },
  { property: "Inactive color", value: "md.sys.color.on-surface-variant" },
  { property: "Secondary active bg", value: "md.sys.color.secondary-container" },
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
        width={220}
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
  title: "Organisms/TabBar/Specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
