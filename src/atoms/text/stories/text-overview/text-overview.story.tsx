import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text as TamaguiText } from "tamagui";
import { Text } from "../../text";
import type { TextRole } from "../../text.type";

function SectionLabel({ label }: { label: string }) {
  return (
    <XStack
      backgroundColor="#E8DEF8"
      borderRadius={14}
      paddingHorizontal={12}
      paddingVertical={6}
      justifyContent="center"
    >
      <TamaguiText fontSize={12} fontWeight="500" color="#6750A4">
        {label}
      </TamaguiText>
    </XStack>
  );
}

const roles: TextRole[] = ["display", "headline", "title", "body", "label"];

function Overview() {
  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={24}
    >
      {roles.map((role) => (
        <YStack key={role} gap={8}>
          <SectionLabel label={role.charAt(0).toUpperCase() + role.slice(1)} />
          <Text role={role} size="large">
            {role.charAt(0).toUpperCase() + role.slice(1)} Large
          </Text>
          <Text role={role} size="medium">
            {role.charAt(0).toUpperCase() + role.slice(1)} Medium
          </Text>
          <Text role={role} size="small">
            {role.charAt(0).toUpperCase() + role.slice(1)} Small
          </Text>
        </YStack>
      ))}
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/text/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=52-4",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
