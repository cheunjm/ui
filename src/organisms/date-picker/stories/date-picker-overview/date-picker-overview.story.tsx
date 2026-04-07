import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, Text } from "tamagui";
import { DatePicker } from "../../date-picker";
import { Button } from "../../../../atoms/button";

function Overview() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <YStack gap={16} padding={32} alignItems="center">
      {selected && <Text>{`Selected: ${selected.toLocaleDateString()}`}</Text>}
      <Button variant="filled" onPress={() => setVisible(true)}>
        Pick a Date
      </Button>
      <DatePicker
        visible={visible}
        value={selected}
        onConfirm={(date) => { setSelected(date); setVisible(false); }}
        onDismiss={() => setVisible(false)}
        testID="date-picker"
      />
    </YStack>
  );
}

const meta: Meta = {
  title: "organisms/date-picker/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
