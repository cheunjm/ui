import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack } from "tamagui";
import { TextField } from "../../text-field";
import { SectionLabel } from "../../../../storybook";

function FilledExample() {
  const [value, setValue] = useState("");
  return (
    <TextField
      label="Label"
      value={value}
      onChangeText={setValue}
      helperText="Supporting text"
    />
  );
}

function OutlinedExample() {
  const [value, setValue] = useState("");
  return (
    <TextField
      variant="outlined"
      label="Label"
      value={value}
      onChangeText={setValue}
      helperText="Supporting text"
    />
  );
}

function ErrorExample() {
  return (
    <TextField
      label="Email"
      value="invalid"
      errorText="Please enter a valid email"
    />
  );
}

function WithIconsExample() {
  const [value, setValue] = useState("");
  return (
    <TextField
      label="Search"
      value={value}
      onChangeText={setValue}
      leadingIcon="search"
      trailingIcon="close"
      onTrailingIconPress={() => setValue("")}
    />
  );
}

function WithCounterExample() {
  const [value, setValue] = useState("");
  return (
    <TextField
      label="Description"
      value={value}
      onChangeText={setValue}
      maxLength={100}
      helperText="Enter a short description"
    />
  );
}

function DisabledExample() {
  return <TextField label="Disabled" value="Cannot edit" disabled />;
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
        <SectionLabel label="Filled" />
        <FilledExample />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="Outlined" />
        <OutlinedExample />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="Error" />
        <ErrorExample />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="With Icons" />
        <WithIconsExample />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="With Counter" />
        <WithCounterExample />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="Disabled" />
        <DisabledExample />
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/text-field/overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
