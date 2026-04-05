import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";
import { TopAppBar } from "../../top-app-bar";
import type { TopAppBarType } from "../../top-app-bar.type";

const types: TopAppBarType[] = [
  "center-aligned",
  "small",
  "medium",
  "large",
];

const typeLabels: Record<TopAppBarType, string> = {
  "center-aligned": "Center-aligned",
  small: "Small",
  medium: "Medium",
  large: "Large",
};

function TypeLabel({ label }: { label: string }) {
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
  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={24}
    >
      {types.map((t) => (
        <YStack key={t} gap={8}>
          <TypeLabel label={typeLabels[t]} />
          <TopAppBar
            type={t}
            title="Page Title"
            navigationIcon="menu"
            onNavigationPress={() => {}}
            actions={[
              { icon: "attach-file", onPress: () => {} },
              { icon: "today", onPress: () => {} },
              { icon: "more-vert", onPress: () => {} },
            ]}
          />
        </YStack>
      ))}
    </YStack>
  );
}

const meta: Meta = {
  title: "organisms/top-app-bar/overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
