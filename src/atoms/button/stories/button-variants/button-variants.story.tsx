import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { Button } from "../../button";
import type { ButtonVariant } from "../../button.type";

const types: ButtonVariant[] = [
  "filled",
  "outlined",
  "text",
  "elevated",
  "tonal",
];

const typeLabels: Record<ButtonVariant, string> = {
  filled: "Filled",
  outlined: "Outlined",
  text: "Text",
  elevated: "Elevated",
  tonal: "Tonal",
};

const states = ["enabled", "hovered", "focused", "pressed", "disabled"] as const;

const stateLabels: Record<(typeof states)[number], string> = {
  enabled: "Enabled",
  hovered: "Hovered",
  focused: "Focused",
  pressed: "Pressed",
  disabled: "Disabled",
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

function Variants() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
    >
      <YStack gap={12}>
        {/* Column headers */}
        <XStack gap={12}>
          <XStack width={100} />
          {states.map((s) => (
            <XStack key={s} width={120} justifyContent="center">
              <VariantLabel label={stateLabels[s]} />
            </XStack>
          ))}
        </XStack>

        {/* Rows — one per type */}
        {types.map((type) => (
          <XStack key={type} gap={12} alignItems="center">
            <XStack width={100}>
              <VariantLabel label={typeLabels[type]} />
            </XStack>
            {states.map((state) => (
              <XStack key={state} width={120} justifyContent="center">
                <Button
                  variant={type}
                  disabled={state === "disabled"}
                >
                  Button
                </Button>
              </XStack>
            ))}
          </XStack>
        ))}
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "Atoms/Button/Variants",
  component: Variants,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=208-34",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
