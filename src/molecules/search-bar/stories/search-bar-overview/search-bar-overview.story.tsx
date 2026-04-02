import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack, XStack, Text } from "tamagui";
import { SearchBar } from "../../search-bar";

function SectionLabel({ label }: { label: string }) {
  return (
    <XStack
      backgroundColor="#E8DEF8"
      borderRadius={14}
      paddingHorizontal={12}
      paddingVertical={6}
      justifyContent="center"
    >
      <Text fontSize={12} fontWeight="500" color="#6750A4">
        {label}
      </Text>
    </XStack>
  );
}

function Overview() {
  const [text, setText] = useState("Design system");

  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={24}
    >
      <YStack gap={8}>
        <SectionLabel label="Empty" />
        <SearchBar placeholder="Search anything..." />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="With Text + Clear" />
        <SearchBar value={text} onChangeText={setText} />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="With Trailing Icon" />
        <SearchBar
          value="Voice search"
          trailingIcon="mic"
          onTrailingIconPress={() => {}}
        />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="Disabled" />
        <SearchBar value="Cannot edit" disabled />
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "Molecules/SearchBar/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
