import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { Search } from "../../search";

const sampleSuggestions = [
  { label: "React Native", icon: "trending-up", onPress: () => {} },
  { label: "Tamagui components", icon: "code", onPress: () => {} },
  { label: "Material Design 3", icon: "palette", onPress: () => {} },
];

const sampleRecent = ["button styles", "navigation bar", "bottom sheet"];

function Overview() {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);

  return (
    <YStack gap={24} flex={1}>
      <Text fontSize={14} fontWeight="600" color="#49454F">
        Interactive
      </Text>
      <Search
        value={value}
        onChangeText={setValue}
        active={active}
        onActiveChange={setActive}
        onBack={() => setActive(false)}
        suggestions={sampleSuggestions}
        recentSearches={sampleRecent}
        onRecentSearchPress={(query) => setValue(query)}
        onClearRecent={() => {}}
        placeholder="Search components"
      />
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/Search/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
