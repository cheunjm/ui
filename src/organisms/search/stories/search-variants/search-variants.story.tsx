import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { Search } from "../../search";

const suggestions = [
  { label: "React Native", icon: "trending-up", onPress: () => {} },
  { label: "Tamagui", icon: "code", onPress: () => {} },
  { label: "Material Design 3", icon: "palette", onPress: () => {} },
];

const recentSearches = ["button styles", "navigation bar", "bottom sheet"];

function Variants() {
  return (
    <YStack gap={32}>
      <YStack gap={8}>
        <Text fontSize={14} fontWeight="600" color="#49454F">
          Active with suggestions
        </Text>
        <Search
          active
          value="React"
          suggestions={suggestions}
          placeholder="Search components"
        />
      </YStack>

      <YStack gap={8}>
        <Text fontSize={14} fontWeight="600" color="#49454F">
          Active with recent searches
        </Text>
        <Search
          active
          recentSearches={recentSearches}
          onClearRecent={() => {}}
          placeholder="Search components"
        />
      </YStack>

      <YStack gap={8}>
        <Text fontSize={14} fontWeight="600" color="#49454F">
          Inactive (bar only)
        </Text>
        <Search active={false} placeholder="Search components" />
      </YStack>

      <YStack gap={8}>
        <Text fontSize={14} fontWeight="600" color="#49454F">
          Active empty state
        </Text>
        <Search active placeholder="Search components" />
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/Search/Variants",
  component: Variants,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
