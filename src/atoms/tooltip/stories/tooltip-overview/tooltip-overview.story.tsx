import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "tamagui";
import { Tooltip } from "../../tooltip";
import { Button } from "../../../button";

function Overview() {
  return (
    <YStack gap={48} padding={32} alignItems="center">
      <Tooltip label="Plain tooltip" variant="plain" placement="top">
        <Button variant="outlined">Long-press (plain)</Button>
      </Tooltip>
      <Tooltip
        label="Rich tooltip title"
        description="Additional context shown in a rich tooltip."
        variant="rich"
        placement="bottom"
        actionLabel="Learn more"
        onAction={() => {}}
      >
        <Button variant="outlined">Long-press (rich)</Button>
      </Tooltip>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/tooltip/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
