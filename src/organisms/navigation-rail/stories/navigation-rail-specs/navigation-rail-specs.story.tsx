import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";

const specs = [
  { property: "Width", value: "80 dp" },
  { property: "Active indicator", value: "56 \u00d7 32 dp" },
  { property: "Indicator corner radius", value: "16 dp" },
  { property: "Icon size", value: "24 dp" },
  { property: "Label font", value: "Label Small (11sp)" },
  { property: "Padding vertical", value: "12 dp" },
  { property: "FAB bottom padding", value: "8 dp" },
  { property: "Destination gap", value: "4 dp (icon to label)" },
  { property: "Active indicator color", value: "md.sys.color.secondary-container" },
  { property: "Active icon color", value: "md.sys.color.on-secondary-container" },
  { property: "Inactive icon color", value: "md.sys.color.on-surface-variant" },
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
      <YStack width={500}>
        <SpecRow property="Property" value="Value" isHeader />
        {specs.map((s) => (
          <SpecRow key={s.property} property={s.property} value={s.value} />
        ))}
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "Organisms/NavigationRail/Specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=8-19",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
