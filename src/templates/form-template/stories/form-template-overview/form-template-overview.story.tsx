import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, XStack } from "tamagui";
import { FormTemplate } from "../../form-template";
import { TopAppBar } from "../../../../organisms/top-app-bar";
import { TextField } from "../../../../atoms/text-field";
import { Button } from "../../../../atoms/button";

function SingleAction() {
  return (
    <FormTemplate
      testID="form-single-action"
      topBar={<TopAppBar title="New Entry" type="small" />}
      actions={<Button variant="filled">Submit</Button>}
    >
      <YStack gap={16}>
        <TextField label="First Name" variant="outlined" />
        <TextField label="Last Name" variant="outlined" />
        <TextField label="Email" variant="outlined" />
      </YStack>
    </FormTemplate>
  );
}

function TwoActions() {
  return (
    <FormTemplate
      testID="form-two-actions"
      topBar={<TopAppBar title="Edit Profile" type="small" />}
      actions={
        <XStack gap={12}>
          <Button variant="outlined" flex={1}>
            Cancel
          </Button>
          <Button variant="filled" flex={1}>
            Submit
          </Button>
        </XStack>
      }
    >
      <YStack gap={16}>
        <TextField label="Display Name" variant="outlined" />
        <TextField label="Bio" variant="outlined" />
        <TextField label="Website" variant="outlined" />
      </YStack>
    </FormTemplate>
  );
}

const meta: Meta = {
  title: "templates/form-template/overview",
  component: SingleAction,
};

export default meta;
type Story = StoryObj;

export const WithSingleAction: Story = {
  render: () => <SingleAction />,
};

export const WithTwoActions: Story = {
  render: () => <TwoActions />,
};
