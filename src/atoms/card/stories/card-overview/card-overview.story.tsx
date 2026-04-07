import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, Text } from "tamagui";
import { Card } from "../../card";

function Overview() {
  return (
    <YStack gap={16} padding={16}>
      <Card variant="elevated">
        <Text fontWeight="600" marginBottom={4}>Elevated Card</Text>
        <Text color="#49454F">Surface container low background with shadow.</Text>
      </Card>
      <Card variant="filled">
        <Text fontWeight="600" marginBottom={4}>Filled Card</Text>
        <Text color="#49454F">Surface container highest background, no shadow.</Text>
      </Card>
      <Card variant="outlined">
        <Text fontWeight="600" marginBottom={4}>Outlined Card</Text>
        <Text color="#49454F">Surface background with outline border.</Text>
      </Card>
      <Card variant="elevated" onPress={() => {}}>
        <Text fontWeight="600" marginBottom={4}>Interactive Card</Text>
        <Text color="#49454F">Press me — scale feedback on tap.</Text>
      </Card>
      <Card variant="filled" disabled>
        <Text fontWeight="600" marginBottom={4}>Disabled Card</Text>
        <Text color="#49454F">Opacity 0.38.</Text>
      </Card>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/card/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=1-2",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
