import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { Icon } from "../../icon";
import type { IconSize } from "../../icon.type";

const sizes: IconSize[] = [20, 24, 40, 48];

const sampleIcons = [
  "home",
  "search",
  "settings",
  "favorite",
  "star",
  "close",
  "add",
  "edit",
] as const;

function SizeLabel({ label }: { label: string }) {
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
    <YStack gap={24}>
      <XStack
        backgroundColor="#FFFFFF"
        borderRadius={12}
        borderWidth={1}
        borderColor="#E0E0E0"
        padding={24}
        gap={24}
        alignItems="flex-end"
      >
        {sizes.map((size) => (
          <YStack key={size} alignItems="center" gap={8}>
            <SizeLabel label={`${size}px`} />
            <Icon name="home" size={size} />
          </YStack>
        ))}
      </XStack>

      <XStack
        backgroundColor="#FFFFFF"
        borderRadius={12}
        borderWidth={1}
        borderColor="#E0E0E0"
        padding={24}
        gap={16}
        flexWrap="wrap"
      >
        {sampleIcons.map((name) => (
          <YStack key={name} alignItems="center" gap={4}>
            <Icon name={name} size={24} />
            <Text fontSize={10} color="#49454F">
              {name}
            </Text>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "Atoms/Icon/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
