import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";

const specs = [
  { property: "Small container", value: "24 x 24 dp" },
  { property: "Small font size", value: "11 sp" },
  { property: "Small icon size", value: "16 dp" },
  { property: "Medium container", value: "40 x 40 dp" },
  { property: "Medium font size", value: "16 sp" },
  { property: "Medium icon size", value: "24 dp" },
  { property: "Large container", value: "56 x 56 dp" },
  { property: "Large font size", value: "22 sp" },
  { property: "Large icon size", value: "32 dp" },
  { property: "Corner radius", value: "50% (circle)" },
  { property: "Container color", value: "md.sys.color.primary-container" },
  { property: "Content color", value: "md.sys.color.on-primary-container" },
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
      <YStack width={460}>
        <SpecRow property="Property" value="Value" isHeader />
        {specs.map((s) => (
          <SpecRow key={s.property} property={s.property} value={s.value} />
        ))}
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/avatar/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/placeholder",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
