import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { TopAppBar } from "../../../../organisms/top-app-bar";
import { DetailTemplate } from "../../detail-template";

function WithTopAppBar() {
  return (
    <DetailTemplate
      testID="detail-full"
      topBar={
        <TopAppBar
          title="Item Details"
          navigationIcon="arrow-back"
          onNavigationPress={() => {}}
          actions={[
            { icon: "edit", onPress: () => {} },
            { icon: "more-vert", onPress: () => {} },
          ]}
        />
      }
    >
      <YStack padding={16} gap={16}>
        <Text fontSize={24} fontWeight="700">
          Detail Title
        </Text>
        <Text fontSize={14} color="#666">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text fontSize={14} color="#666">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Text>
        <YStack
          backgroundColor="#F5F5F5"
          borderRadius={12}
          padding={16}
          gap={8}
        >
          <Text fontSize={12} fontWeight="500" color="#999">
            SECTION
          </Text>
          <Text fontSize={14}>Additional information goes here.</Text>
        </YStack>
      </YStack>
    </DetailTemplate>
  );
}

function Minimal() {
  return (
    <DetailTemplate testID="detail-minimal">
      <YStack padding={16}>
        <Text fontSize={16}>Simple detail content without a top bar.</Text>
      </YStack>
    </DetailTemplate>
  );
}

const meta: Meta = {
  title: "templates/detail-template/overview",
  component: WithTopAppBar,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const MinimalExample: Story = {
  render: () => <Minimal />,
};
