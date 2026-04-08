import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";

const specs = [
  { property: "Min width", value: "112 dp" },
  { property: "Max width", value: "280 dp" },
  { property: "Item height", value: "48 dp" },
  { property: "Padding vertical", value: "8 dp" },
  { property: "Item padding horizontal", value: "12 dp" },
  { property: "Corner radius", value: "4 dp" },
  { property: "Elevation", value: "Level 2" },
  { property: "Font", value: "Body Large (16sp)" },
];

function SpecRow({ property, value, isHeader }: { property: string; value: string; isHeader?: boolean }) {
  return (
    <XStack height={36} alignItems="center" borderBottomWidth={1} borderBottomColor="#E0E0E0">
      <Text width={200} paddingLeft={16} fontSize={14} fontWeight={isHeader ? "600" : "400"} color="#1C1B1F">{property}</Text>
      <Text flex={1} fontSize={14} fontWeight={isHeader ? "600" : "400"} color="#49454F">{value}</Text>
    </XStack>
  );
}

function Specs() {
  return (
    <XStack backgroundColor="#FFFFFF" borderRadius={12} borderWidth={1} borderColor="#E0E0E0" padding={24}>
      <YStack width={480}>
        <SpecRow property="Property" value="Value" isHeader />
        {specs.map((s) => (<SpecRow key={s.property} property={s.property} value={s.value} />))}
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "molecules/menu/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/C0eafJVCn9JsDxhxw0NjFw/molecules?node-id=4-19",
    },
  },
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
