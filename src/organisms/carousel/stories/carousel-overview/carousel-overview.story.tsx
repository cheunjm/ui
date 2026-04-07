import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, View, Text } from "tamagui";
import { Carousel } from "../../carousel";

const COLORS = ["$primaryContainer", "$secondaryContainer", "$tertiaryContainer", "$errorContainer"] as const;
const LABELS = ["Nature", "Architecture", "Travel", "Food"];

const items = LABELS.map((label, i) => ({
  key: label.toLowerCase(),
  content: (
    <View flex={1} backgroundColor={COLORS[i]} justifyContent="center" alignItems="center" padding={16}>
      <Text fontWeight="600">{label}</Text>
    </View>
  ),
}));

function Overview() {
  return (
    <YStack gap={32} paddingVertical={24}>
      <YStack gap={8}>
        <Text paddingHorizontal={16} fontWeight="500">Multi-browse</Text>
        <Carousel variant="multi-browse" items={items} testID="carousel-multi" />
      </YStack>
      <YStack gap={8}>
        <Text paddingHorizontal={16} fontWeight="500">Uncontained</Text>
        <Carousel variant="uncontained" items={items} testID="carousel-uncontained" />
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "organisms/carousel/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
