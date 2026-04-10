import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "tamagui";
import { Text } from "../../../../atoms/text";
import { FullScreenDialog } from "../../full-screen-dialog";
import { Button } from "../../../../atoms/button";
import { TextField } from "../../../../atoms/text-field";
import { SectionLabel } from "../../../../storybook";

function Overview() {
  const [visible, setVisible] = useState(false);

  return (
    <YStack gap={24} padding={32} alignItems="center">
      <YStack gap={8} alignItems="center">
        <SectionLabel label="Full-Screen Dialog" />
        <Text role="body" size="medium" color="$onSurfaceVariant">
          Tap the button to open a full-screen dialog with a form.
        </Text>
        <Button variant="filled" onPress={() => setVisible(true)}>
          Edit Profile
        </Button>
      </YStack>
      <FullScreenDialog
        visible={visible}
        title="Edit Profile"
        actionLabel="Save"
        onAction={() => setVisible(false)}
        onClose={() => setVisible(false)}
        testID="fsd"
      >
        <YStack gap={16}>
          <TextField label="First name" placeholder="Enter first name" />
          <TextField label="Last name" placeholder="Enter last name" />
          <TextField label="Email" placeholder="Enter email" />
          <TextField label="Bio" placeholder="Tell us about yourself" />
        </YStack>
      </FullScreenDialog>
    </YStack>
  );
}

const meta: Meta = {
  title: "organisms/full-screen-dialog/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=4-5",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
