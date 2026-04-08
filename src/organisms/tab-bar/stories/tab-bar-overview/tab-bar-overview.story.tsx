import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { TabBar } from "../../tab-bar";

const tabs = [
  { icon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  { icon: "notifications", label: "Alerts" },
  { icon: "person", label: "Profile" },
];

function Overview() {
  const [primaryActive, setPrimaryActive] = useState(0);
  const [secondaryActive, setSecondaryActive] = useState(0);

  return (
    <YStack gap={24}>
      <Text fontSize={14} fontWeight="600" color="#49454F">
        Primary (Interactive)
      </Text>
      <TabBar
        tabs={tabs}
        activeIndex={primaryActive}
        onTabPress={setPrimaryActive}
      />

      <Text fontSize={14} fontWeight="600" color="#49454F">
        Secondary (Interactive)
      </Text>
      <TabBar
        tabs={tabs}
        variant="secondary"
        activeIndex={secondaryActive}
        onTabPress={setSecondaryActive}
      />
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/TabBar/Overview",
  component: Overview,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=12-7",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
