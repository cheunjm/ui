import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, Text } from "tamagui";
import { NavigationRail } from "../../navigation-rail";

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
      <NavigationRail
        destinations={destinations}
        activeIndex={active}
        onDestinationPress={setActive}
      />

      <Text fontSize={14} fontWeight="600" color="#49454F">
        With FAB
      </Text>
      <NavigationRail
        destinations={destinations}
        activeIndex={0}
        fab={{ icon: "edit", onPress: () => {}, accessibilityLabel: "Compose" }}
      />
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/NavigationRail/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
