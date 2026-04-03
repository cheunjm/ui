import React from "react";
import { YStack, View } from "tamagui";
import { Carousel } from "../../carousel";
import { Text } from "../../../atoms/text";

const COLORS = ["$primaryContainer", "$secondaryContainer", "$tertiaryContainer", "$errorContainer"];
const LABELS = ["Nature", "Architecture", "Travel", "Food"];

const items = LABELS.map((label, i) => ({
  key: label.toLowerCase(),
  content: (
    <View flex={1} backgroundColor={COLORS[i]} justifyContent="center" alignItems="center" padding={16}>
      <Text variant="titleMedium">{label}</Text>
    </View>
  ),
}));

export const CarouselOverview = () => (
  <YStack gap={32} paddingVertical={24}>
    <YStack gap={8}>
      <Text variant="labelLarge" paddingHorizontal={16}>Multi-browse</Text>
      <Carousel variant="multi-browse" items={items} testID="carousel-multi" />
    </YStack>
    <YStack gap={8}>
      <Text variant="labelLarge" paddingHorizontal={16}>Uncontained</Text>
      <Carousel variant="uncontained" items={items} testID="carousel-uncontained" />
    </YStack>
  </YStack>
);

CarouselOverview.storyName = "Carousel/Overview";
