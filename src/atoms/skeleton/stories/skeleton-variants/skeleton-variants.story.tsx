import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, XStack, Text } from "tamagui";
import { Skeleton } from "../../skeleton";

function CardSkeleton() {
  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={16}
      gap={12}
      width={280}
    >
      <Skeleton width={280} height={140} borderRadius={8} />
      <Skeleton width={180} height={20} />
      <Skeleton width={240} height={14} />
      <Skeleton width={200} height={14} />
    </YStack>
  );
}

function ListItemSkeleton() {
  return (
    <XStack gap={12} alignItems="center" paddingVertical={8}>
      <Skeleton width={48} height={48} borderRadius={9999} />
      <YStack gap={8} flex={1}>
        <Skeleton width="60%" height={16} />
        <Skeleton width="80%" height={12} />
      </YStack>
    </XStack>
  );
}

function TextBlockSkeleton() {
  return (
    <YStack gap={8} width={280}>
      <Skeleton width="100%" height={20} />
      <Skeleton width="90%" height={16} />
      <Skeleton width="95%" height={16} />
      <Skeleton width="70%" height={16} />
    </YStack>
  );
}

function Variants() {
  return (
    <YStack
      backgroundColor="#F6F5F7"
      padding={24}
      gap={32}
    >
      <YStack gap={8}>
        <Text fontSize={12} fontWeight="600" color="#49454F" letterSpacing={1}>
          CARD
        </Text>
        <CardSkeleton />
      </YStack>

      <YStack gap={8}>
        <Text fontSize={12} fontWeight="600" color="#49454F" letterSpacing={1}>
          LIST ITEMS
        </Text>
        <YStack
          backgroundColor="#FFFFFF"
          borderRadius={12}
          borderWidth={1}
          borderColor="#E0E0E0"
          padding={16}
          gap={4}
          width={320}
        >
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
        </YStack>
      </YStack>

      <YStack gap={8}>
        <Text fontSize={12} fontWeight="600" color="#49454F" letterSpacing={1}>
          TEXT BLOCK
        </Text>
        <YStack
          backgroundColor="#FFFFFF"
          borderRadius={12}
          borderWidth={1}
          borderColor="#E0E0E0"
          padding={16}
        >
          <TextBlockSkeleton />
        </YStack>
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/skeleton/variants",
  component: Variants,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=301-26",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
