import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";

const specs = [
  { property: "Display Large", value: "57sp / Regular" },
  { property: "Display Medium", value: "45sp / Regular" },
  { property: "Display Small", value: "36sp / Regular" },
  { property: "Headline Large", value: "32sp / Regular" },
  { property: "Headline Medium", value: "28sp / Regular" },
  { property: "Headline Small", value: "24sp / Regular" },
  { property: "Title Large", value: "22sp / Regular" },
  { property: "Title Medium", value: "16sp / Medium" },
  { property: "Title Small", value: "14sp / Medium" },
  { property: "Body Large", value: "16sp / Regular" },
  { property: "Body Medium", value: "14sp / Regular" },
  { property: "Body Small", value: "12sp / Regular" },
  { property: "Label Large", value: "14sp / Medium" },
  { property: "Label Medium", value: "12sp / Medium" },
  { property: "Label Small", value: "11sp / Medium" },
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
        <SpecRow property="Role + Size" value="Font Size / Weight" isHeader />
        {specs.map((s) => (
          <SpecRow key={s.property} property={s.property} value={s.value} />
        ))}
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/text/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=52-4",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
