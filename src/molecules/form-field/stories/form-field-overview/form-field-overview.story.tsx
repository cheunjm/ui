import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack } from "tamagui";
import { FormField } from "../../form-field";
import { SectionLabel } from "../../../../storybook";

function BasicExample() {
  const [value, setValue] = useState("");
  return (
    <FormField
      label="Email"
      value={value}
      onChangeText={setValue}
      helperText="We'll never share your email"
    />
  );
}

function WithHelperText() {
  const [value, setValue] = useState("");
  return (
    <FormField
      label="Username"
      value={value}
      onChangeText={setValue}
      helperText="Must be at least 3 characters"
    />
  );
}

function WithError() {
  return (
    <FormField
      label="Email"
      value="invalid-email"
      errorText="Please enter a valid email address"
    />
  );
}

function RequiredField() {
  const [value, setValue] = useState("");
  return (
    <FormField
      label="Full Name"
      required
      value={value}
      onChangeText={setValue}
      helperText="As shown on your ID"
    />
  );
}

function WithCharacterCounter() {
  const [value, setValue] = useState("");
  const max = 50;
  return (
    <FormField
      label="Bio"
      value={value}
      onChangeText={setValue}
      characterCount={{ current: value.length, max }}
      helperText="Tell us about yourself"
    />
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
      <YStack gap={8}>
        <SectionLabel label="Basic with Label" />
        <BasicExample />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="With Helper Text" />
        <WithHelperText />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="With Error" />
        <WithError />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="Required" />
        <RequiredField />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="With Character Counter" />
        <WithCharacterCounter />
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "molecules/form-field/overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
