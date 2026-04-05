import type { Meta, StoryObj } from "@storybook/react";
import { YStack } from "tamagui";
import { ListItem } from "../../list-item";
import { Badge } from "../../../../atoms/badge";
import { Switch } from "../../../../atoms/switch";
import { SectionLabel } from "../../../../storybook";

function Overview() {
  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={16}
    >
      <SectionLabel label="One-line" />
      <ListItem headline="Primary text" />

      <SectionLabel label="Two-line" />
      <ListItem
        headline="Primary text"
        supportingText="Secondary text goes here"
      />

      <SectionLabel label="With leading icon" />
      <ListItem
        headline="Primary text"
        supportingText="Secondary text"
        leadingContent="person"
      />

      <SectionLabel label="With trailing badge" />
      <ListItem
        headline="Primary text"
        supportingText="Secondary text"
        leadingContent="mail"
        trailingContent={<Badge size="large" count={3} />}
      />

      <SectionLabel label="With trailing switch" />
      <ListItem
        headline="Wi-Fi"
        supportingText="Connected"
        leadingContent="wifi"
        trailingContent={<Switch selected />}
      />

      <SectionLabel label="With divider" />
      <ListItem
        headline="First item"
        supportingText="With bottom divider"
        leadingContent="folder"
        showDivider
      />
      <ListItem
        headline="Second item"
        supportingText="After divider"
        leadingContent="folder"
      />

      <SectionLabel label="With overline" />
      <ListItem
        headline="Primary text"
        overlineText="Overline"
        supportingText="Secondary text"
        leadingContent="star"
      />

      <SectionLabel label="Disabled" />
      <ListItem
        headline="Disabled item"
        supportingText="Cannot be pressed"
        leadingContent="block"
        disabled
      />
    </YStack>
  );
}

const meta: Meta = {
  title: "molecules/list-item/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
