import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { EmptyStateTemplate } from "../../empty-state-template";
import { Button } from "../../../../atoms/button";

function Full() {
  return (
    <YStack flex={1} backgroundColor="$background">
      <EmptyStateTemplate
        icon="inbox"
        title="No messages"
        body="You don't have any messages yet. Start a conversation to see them here."
        action={<Button variant="filled">Compose</Button>}
      />
    </YStack>
  );
}

function Minimal() {
  return (
    <YStack flex={1} backgroundColor="$background">
      <EmptyStateTemplate title="Nothing here" />
    </YStack>
  );
}

function WithTopAppBar() {
  return (
    <YStack flex={1} backgroundColor="$background">
      <EmptyStateTemplate
        topBar={
          <YStack
            paddingHorizontal={16}
            paddingVertical={14}
            backgroundColor="$surface"
          >
            <Text fontSize={22} fontWeight="400" color="$onSurface">
              Inbox
            </Text>
          </YStack>
        }
        icon="mail"
        title="All caught up"
        body="No new messages to show."
      />
    </YStack>
  );
}

const meta: Meta = {
  title: "templates/empty-state-template/overview",
  component: Full,
  tags: ["autodocs", "!dev"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = { render: () => <Full /> };
export const MinimalExample: Story = { render: () => <Minimal /> };
export const WithTopBar: Story = { render: () => <WithTopAppBar /> };
