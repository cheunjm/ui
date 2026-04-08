import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";

const specs = [
  { property: "One-line height", value: "56 dp" },
  { property: "Two-line height", value: "72 dp" },
  { property: "Three-line height", value: "88 dp" },
  { property: "Padding horizontal", value: "16 dp" },
  { property: "Leading icon size", value: "24 dp" },
  { property: "Headline font", value: "Body Large (16sp)" },
  { property: "Supporting text font", value: "Body Medium (14sp)" },
  { property: "Trailing text font", value: "Label Small (11sp)" },
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
  title: "molecules/list-item/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/C0eafJVCn9JsDxhxw0NjFw/molecules?node-id=3-19",
    },
  },
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
