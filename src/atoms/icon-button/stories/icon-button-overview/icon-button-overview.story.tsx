import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { IconButton } from "../../icon-button";
import type { IconButtonVariant } from "../../icon-button.type";

const variants: IconButtonVariant[] = [
  "standard",
  "filled",
  "filledTonal",
  "outlined",
];

const variantLabels: Record<IconButtonVariant, string> = {
  standard: "Standard",
  filled: "Filled",
  filledTonal: "Filled Tonal",
  outlined: "Outlined",
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
          <IconButton icon="settings" variant={v} />
        </YStack>
      ))}
    </XStack>
  );
}

const meta: Meta = {
  title: "Atoms/IconButton/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
