import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text, Button } from "tamagui";
import { SideSheet } from "../../side-sheet";

function Overview() {
  const [open, setOpen] = useState(false);

  return (
    <YStack gap={16} padding={16}>
      <Text fontSize={14} fontWeight="600" color="#49454F">Interactive (right side)</Text>
      <Button onPress={() => setOpen(true)}>Open Side Sheet</Button>
      <SideSheet
        open={open}
        onClose={() => setOpen(false)}
        header="Filters"
      >
        <YStack gap={12}>
          <Text>Filter option 1</Text>
          <Text>Filter option 2</Text>
          <Text>Filter option 3</Text>
        </YStack>
      </SideSheet>
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/SideSheet/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
