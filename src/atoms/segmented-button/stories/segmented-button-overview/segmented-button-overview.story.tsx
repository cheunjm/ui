import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack } from "tamagui";
import { SegmentedButton } from "../../segmented-button";
import { SectionLabel } from "../../../../storybook";

function SingleSelectExample() {
  const [selected, setSelected] = useState("day");
  return (
    <YStack gap={8}>
      <SectionLabel label="Single-select" />
      <SegmentedButton
        segments={[
          { value: "day", label: "Day" },
          { value: "week", label: "Week" },
          { value: "month", label: "Month" },
        ]}
        selected={selected}
        onSelectionChange={(val) => setSelected(val as string)}
      />
    </YStack>
  );
}

function MultiSelectExample() {
  const [selected, setSelected] = useState<string[]>(["songs"]);
  return (
    <YStack gap={8}>
      <SectionLabel label="Multi-select" />
      <SegmentedButton
        segments={[
          { value: "songs", label: "Songs" },
          { value: "albums", label: "Albums" },
          { value: "podcasts", label: "Podcasts" },
        ]}
        selected={selected}
        multiSelect
        onSelectionChange={(val) => setSelected(val as string[])}
      />
    </YStack>
  );
}

function WithIconsExample() {
  const [selected, setSelected] = useState("list");
  return (
    <YStack gap={8}>
      <SectionLabel label="With icons" />
      <SegmentedButton
        segments={[
          { value: "list", label: "List", icon: "list" },
          { value: "grid", label: "Grid", icon: "grid-view" },
          { value: "map", label: "Map", icon: "map" },
        ]}
        selected={selected}
        onSelectionChange={(val) => setSelected(val as string)}
      />
    </YStack>
  );
}

function DisabledExample() {
  return (
    <YStack gap={8}>
      <SectionLabel label="Disabled" />
      <SegmentedButton
        segments={[
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
          { value: "c", label: "Option C" },
        ]}
        selected="a"
        disabled
      />
    </YStack>
  );
}

function Overview() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      flexWrap="wrap"
      gap={32}
      alignItems="flex-start"
    >
      <SingleSelectExample />
      <MultiSelectExample />
      <WithIconsExample />
      <DisabledExample />
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/segmented-button/overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
