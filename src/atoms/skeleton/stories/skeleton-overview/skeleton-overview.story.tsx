import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack } from "tamagui";
import { Skeleton } from "../../skeleton";
import { SectionLabel } from "../../../../storybook";

function Overview() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={32}
      alignItems="flex-start"
    >
      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Line" />
        <Skeleton width={120} height={16} />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Block" />
        <Skeleton width={80} height={80} />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Circle" />
        <Skeleton width={48} height={48} borderRadius={9999} />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Pill" />
        <Skeleton width={96} height={32} borderRadius={9999} />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/skeleton/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=301-8",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
