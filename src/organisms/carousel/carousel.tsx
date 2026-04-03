import { useRef, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { styled, View, XStack } from "tamagui";
import type { CarouselProps } from "./carousel.type";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ITEM_WIDTHS = {
  "multi-browse": 240,
  uncontained: SCREEN_WIDTH - 48,
  "full-screen": SCREEN_WIDTH,
};

const ItemContainer = styled(View, {
  name: "CarouselItem",
  backgroundColor: "$surfaceContainerLow",
  overflow: "hidden",
});

const Dot = styled(View, {
  name: "CarouselDot",
  width: 8,
  height: 8,
  borderRadius: 4,
});

export function Carousel({
  variant = "multi-browse",
  items,
  showDots = true,
  testID,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemWidth = ITEM_WIDTHS[variant];
  const borderRadius = variant === "full-screen" ? 0 : 16;
  const isPaging = variant === "full-screen";

  return (
    <View testID={testID}>
      <ScrollView
        horizontal
        pagingEnabled={isPaging}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: variant === "multi-browse" ? 8 : 0, paddingHorizontal: variant === "full-screen" ? 0 : 16 }}
        onScroll={(e) => {
          const offset = e.nativeEvent.contentOffset.x;
          const index = Math.round(offset / itemWidth);
          setActiveIndex(Math.max(0, Math.min(index, items.length - 1)));
        }}
        scrollEventThrottle={16}
      >
        {items.map((item) => (
          <ItemContainer
            key={item.key}
            width={itemWidth}
            borderRadius={borderRadius}
            minHeight={variant === "full-screen" ? 300 : 200}
          >
            {item.content}
          </ItemContainer>
        ))}
      </ScrollView>
      {showDots && items.length > 1 && (
        <XStack justifyContent="center" gap={6} marginTop={12}>
          {items.map((item, idx) => (
            <Dot
              key={item.key}
              backgroundColor={idx === activeIndex ? "$onSurface" : "$outlineVariant"}
            />
          ))}
        </XStack>
      )}
    </View>
  );
}
