import type { Meta, StoryObj } from "@storybook/react";
import { YStack } from "tamagui";
import { Slider } from "../../slider";
import { SectionLabel } from "../../../../storybook";

function Overview() {
  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={32}
    >
      <YStack gap={8}>
        <SectionLabel label="Continuous" />
        <Slider type="continuous" value={50} />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="Discrete (step=20)" />
        <Slider type="discrete" step={20} value={40} />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="With Value Label" />
        <Slider type="continuous" value={75} showLabel />
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="Disabled" />
        <Slider type="continuous" value={30} disabled />
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/slider/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=67-2",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
