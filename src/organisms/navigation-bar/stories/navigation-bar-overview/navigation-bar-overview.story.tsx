import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { NavigationBar } from "../../navigation-bar";

const destinations = [
  { icon: "home-outlined", activeIcon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  { icon: "notifications-outlined", activeIcon: "notifications", label: "Alerts", badge: 12 },
  { icon: "person-outline", activeIcon: "person", label: "Profile" },
];

function Overview() {
  const [active, setActive] = useState(0);

  return (
    <YStack gap={24}>
      <Text fontSize={14} fontWeight="600" color="#49454F">
        Interactive
      </Text>
      <NavigationBar
        destinations={destinations}
        activeIndex={active}
        onDestinationPress={setActive}
      />

      <Text fontSize={14} fontWeight="600" color="#49454F">
        3 Destinations
      </Text>
      <NavigationBar
        destinations={destinations.slice(0, 3)}
        activeIndex={0}
      />

      <Text fontSize={14} fontWeight="600" color="#49454F">
        5 Destinations
      </Text>
      <NavigationBar
        destinations={[
          ...destinations,
          { icon: "settings-outlined", activeIcon: "settings", label: "Settings" },
        ]}
        activeIndex={0}
      />
    </YStack>
  );
}

const meta: Meta = {
  title: "organisms/navigation-bar/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
