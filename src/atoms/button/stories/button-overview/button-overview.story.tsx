import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack } from "tamagui";
import { Button } from "../../button";
import type { ButtonVariant } from "../../button.type";
import { SectionLabel } from "../../../../storybook";

const variants: ButtonVariant[] = [
  "filled",
  "outlined",
  "text",
  "elevated",
  "tonal",
];

const variantLabels: Record<ButtonVariant, string> = {
  filled: "Filled",
  outlined: "Outlined",
  text: "Text",
  elevated: "Elevated",
  tonal: "Tonal",
};

function Overview() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={24}
      alignItems="flex-start"
    >
      {variants.map((v) => (
        <YStack key={v} alignItems="center" gap={8}>
          <SectionLabel label={variantLabels[v]} />
          <Button variant={v}>Button</Button>
        </YStack>
      ))}
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/button/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=208-33",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
