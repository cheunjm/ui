import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { TabBar } from "../../tab-bar";

const tabs = [
  { icon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  { icon: "notifications", label: "Alerts" },
  { icon: "person", label: "Profile" },
];

const manyTabs = [
  { icon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  { icon: "notifications", label: "Alerts" },
  { icon: "person", label: "Profile" },
  { icon: "settings", label: "Settings" },
  { icon: "info", label: "About" },
  { icon: "star", label: "Favorites" },
];

function Variants() {
  return (
    <YStack gap={24}>
      <Text fontSize={14} fontWeight="600" color="#49454F">
        Primary — Fixed
      </Text>
      <TabBar tabs={tabs} activeIndex={0} />

      <Text fontSize={14} fontWeight="600" color="#49454F">
        Primary — Scrollable
      </Text>
      <TabBar tabs={manyTabs} activeIndex={0} scrollable />

      <Text fontSize={14} fontWeight="600" color="#49454F">
        Secondary — Fixed
      </Text>
      <TabBar tabs={tabs} variant="secondary" activeIndex={0} />

      <Text fontSize={14} fontWeight="600" color="#49454F">
        Secondary — Scrollable
      </Text>
      <TabBar tabs={manyTabs} variant="secondary" activeIndex={0} scrollable />
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/TabBar/Variants",
  component: Variants,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
