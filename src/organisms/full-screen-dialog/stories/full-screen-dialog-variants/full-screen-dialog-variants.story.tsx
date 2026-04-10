import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "tamagui";
import { Text } from "../../../../atoms/text";
import { FullScreenDialog } from "../../full-screen-dialog";
import { Button } from "../../../../atoms/button";
import { TextField } from "../../../../atoms/text-field";
import type { FullScreenDialogProps } from "../../full-screen-dialog.type";

const FIGMA_BASE =
  "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=";

function WithFormContent(props: FullScreenDialogProps) {
  const [visible, setVisible] = useState(false);
  return (
    <YStack padding={32}>
      <Button variant="filled" onPress={() => setVisible(true)}>
        Open Dialog
      </Button>
      <FullScreenDialog
        {...props}
        visible={visible}
        onClose={() => setVisible(false)}
        onAction={() => setVisible(false)}
      >
        <YStack gap={16}>
          <TextField label="Name" placeholder="Enter name" />
          <TextField label="Description" placeholder="Enter description" />
        </YStack>
      </FullScreenDialog>
    </YStack>
  );
}

function WithLongContent(props: FullScreenDialogProps) {
  const [visible, setVisible] = useState(false);
  return (
    <YStack padding={32}>
      <Button variant="filled" onPress={() => setVisible(true)}>
        Open Dialog
      </Button>
      <FullScreenDialog
        {...props}
        visible={visible}
        onClose={() => setVisible(false)}
        onAction={() => setVisible(false)}
      >
        <YStack gap={16}>
          {Array.from({ length: 20 }, (_, i) => (
            <Text key={i} role="body" size="medium">
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Text>
          ))}
        </YStack>
      </FullScreenDialog>
    </YStack>
  );
}

const meta: Meta<FullScreenDialogProps> = {
  title: "organisms/full-screen-dialog/variants",
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}4-9` },
  },
};

export default meta;
type Story = StoryObj<FullScreenDialogProps>;

export const WithForm: Story = {
  render: () => (
    <WithFormContent
      visible={false}
      title="New Entry"
      actionLabel="Save"
      onAction={() => {}}
      onClose={() => {}}
    />
  ),
};

export const WithScrollableContent: Story = {
  render: () => (
    <WithLongContent
      visible={false}
      title="Terms & Conditions"
      actionLabel="Accept"
      onAction={() => {}}
      onClose={() => {}}
    />
  ),
};

export const ActionDisabled: Story = {
  render: () => (
    <WithFormContent
      visible={false}
      title="Edit Profile"
      actionLabel="Save"
      actionDisabled
      onAction={() => {}}
      onClose={() => {}}
    />
  ),
};
