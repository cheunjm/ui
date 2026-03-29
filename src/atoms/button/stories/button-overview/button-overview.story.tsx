import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { Button } from "../../button";
import type { ButtonVariant } from "../../button.type";

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

function VariantLabel({ label }: { label: string }) {
  return (
    <XStack
      backgroundColor="#E8DEF8"
      borderRadius={14}
      paddingHorizontal={12}
      paddingVertical={6}
      justifyContent="center"
    >
      <Text fontSize={12} fontWeight="500" color="#6750A4">
        {label}
      </Text>
    </XStack>
  );
}

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
          <VariantLabel label={variantLabels[v]} />
          <Button variant={v}>Button</Button>
        </YStack>
      ))}
    </XStack>
  );
}

const meta: Meta = {
  title: "Atoms/Button/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
