import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack } from "tamagui";
import { Avatar } from "../../avatar";
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
      <YStack gap={24}>
        <SectionLabel label="Image" />
        <XStack gap={16} alignItems="center">
          <Avatar
            source={{ uri: "https://i.pravatar.cc/56" }}
            size="small"
          />
          <Avatar
            source={{ uri: "https://i.pravatar.cc/56" }}
            size="medium"
          />
          <Avatar
            source={{ uri: "https://i.pravatar.cc/56" }}
            size="large"
          />
        </XStack>
      </YStack>

      <YStack gap={24}>
        <SectionLabel label="Initials" />
        <XStack gap={16} alignItems="center">
          <Avatar name="John Doe" size="small" />
          <Avatar name="John Doe" size="medium" />
          <Avatar name="John Doe" size="large" />
        </XStack>
      </YStack>

      <YStack gap={24}>
        <SectionLabel label="Icon" />
        <XStack gap={16} alignItems="center">
          <Avatar size="small" />
          <Avatar size="medium" />
          <Avatar size="large" />
        </XStack>
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/avatar/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/placeholder",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
