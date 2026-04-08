import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text, Button, XStack } from "tamagui";
import { SideSheet } from "../../side-sheet";

function Variants() {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const [openWithHeader, setOpenWithHeader] = useState(false);
  const [openNoHeader, setOpenNoHeader] = useState(false);

  return (
    <YStack gap={16} padding={16}>
      <Text fontSize={14} fontWeight="600" color="#49454F">Right side (default)</Text>
      <Button onPress={() => setOpenRight(true)}>Open right</Button>

      <Text fontSize={14} fontWeight="600" color="#49454F">Left side</Text>
      <Button onPress={() => setOpenLeft(true)}>Open left</Button>

      <Text fontSize={14} fontWeight="600" color="#49454F">With header</Text>
      <Button onPress={() => setOpenWithHeader(true)}>Open with header</Button>

      <Text fontSize={14} fontWeight="600" color="#49454F">Without header</Text>
      <Button onPress={() => setOpenNoHeader(true)}>Open without header</Button>

      <SideSheet open={openRight} onClose={() => setOpenRight(false)} header="Right sheet" side="right">
        <Text>Right side content</Text>
      </SideSheet>
      <SideSheet open={openLeft} onClose={() => setOpenLeft(false)} header="Left sheet" side="left">
        <Text>Left side content</Text>
      </SideSheet>
      <SideSheet open={openWithHeader} onClose={() => setOpenWithHeader(false)} header="With Header">
        <Text>Content with header</Text>
      </SideSheet>
      <SideSheet open={openNoHeader} onClose={() => setOpenNoHeader(false)}>
        <Text>Content without header</Text>
      </SideSheet>
    </YStack>
  );
}

const FIGMA_BASE =
  "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=";

const meta: Meta = {
  title: "Organisms/SideSheet/Variants",
  component: Variants,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}10-11` },
  },
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};
