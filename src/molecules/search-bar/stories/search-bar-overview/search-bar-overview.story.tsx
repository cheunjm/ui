import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "tamagui";
import { SearchBar } from "../../search-bar";
import { SectionLabel } from "../../../../storybook";

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
  title: "molecules/search-bar/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/C0eafJVCn9JsDxhxw0NjFw/molecules?node-id=5-7",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
