import type { Meta, StoryObj } from "@storybook/react";
import { YStack, XStack, View, Text } from "tamagui";
import { BottomAppBar } from "../../bottom-app-bar";

function Callout({ n }: { n: number }) {
  return (
    <View
      width={24}
      height={24}
      borderRadius={12}
      backgroundColor="#6750A4"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white" fontSize={12} fontWeight="700">{n}</Text>
    </View>
  );
}

function Anatomy() {
  return (
    <YStack gap={24} padding={16}>
      <BottomAppBar
        fab={{ icon: "add", onPress: () => {}, accessibilityLabel: "Add" }}
        actions={[
          { icon: "search", onPress: () => {}, accessibilityLabel: "Search" },
          { icon: "more-vert", onPress: () => {}, accessibilityLabel: "More" },
        ]}
      />
      <YStack gap={12} marginTop={8}>
        {[
          [1, "Container — height 80dp, surfaceContainer background"],
          [2, "FAB slot — leading position (optional)"],
          [3, "Action buttons — up to 4 IconButtons on trailing edge"],
        ].map(([n, label]) => (
          <XStack key={n as number} gap={12} alignItems="center">
            <Callout n={n as number} />
            <Text fontSize={13} color="#49454F">{label as string}</Text>
          </XStack>
        ))}
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/BottomAppBar/Anatomy",
  component: Anatomy,
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
