import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack } from "tamagui";
import { IconButton } from "../../icon-button";
import type { IconButtonVariant } from "../../icon-button.type";
import { SectionLabel } from "../../../../storybook";

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
          <IconButton icon="settings" variant={v} />
        </YStack>
      ))}
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/icon-button/overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
