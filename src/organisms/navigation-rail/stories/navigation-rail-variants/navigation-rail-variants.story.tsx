import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";
import { NavigationRail } from "../../navigation-rail";

const destinations = [
  { icon: "home-outlined", activeIcon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  { icon: "notifications-outlined", activeIcon: "notifications", label: "Alerts", badge: 5 },
  { icon: "person-outline", activeIcon: "person", label: "Profile" },
];

function Variants() {
  return (
    <XStack gap={48} padding={24} flexWrap="wrap">
      <YStack gap={8} alignItems="center">
        <Text fontSize={14} fontWeight="600" color="#49454F">
          With FAB
        </Text>
        <NavigationRail
          destinations={destinations}
          activeIndex={0}
          fab={{ icon: "edit", onPress: () => {}, accessibilityLabel: "Compose" }}
        />
      </YStack>

      <YStack gap={8} alignItems="center">
        <Text fontSize={14} fontWeight="600" color="#49454F">
          Without FAB
        </Text>
        <NavigationRail
          destinations={destinations}
          activeIndex={1}
        />
      </YStack>

      <YStack gap={8} alignItems="center">
        <Text fontSize={14} fontWeight="600" color="#49454F">
          3 Destinations
        </Text>
        <NavigationRail
          destinations={destinations.slice(0, 3)}
          activeIndex={0}
        />
      </YStack>

      <YStack gap={8} alignItems="center">
        <Text fontSize={14} fontWeight="600" color="#49454F">
          5 Destinations
        </Text>
        <NavigationRail
          destinations={[
            ...destinations,
            { icon: "settings-outlined", activeIcon: "settings", label: "Settings" },
          ]}
          activeIndex={0}
        />
      </YStack>
    </XStack>
  );
}

const FIGMA_BASE =
  "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=";

const meta: Meta = {
  title: "Organisms/NavigationRail/Variants",
  component: Variants,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}8-11` },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
