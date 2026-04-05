import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";
import { TimePicker } from "../../time-picker";
import { Button } from "../../../../atoms/button";

function Overview() {
  const [visible, setVisible] = useState(false);
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(0);

  const h12 = hour % 12 || 12;
  const period = hour < 12 ? "AM" : "PM";
  const display = `${String(h12).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${period}`;

  return (
    <YStack gap={16} padding={32} alignItems="center">
      <Text>{`Selected: ${display}`}</Text>
      <Button variant="filled" onPress={() => setVisible(true)}>
        Pick a Time
      </Button>
      <TimePicker
        visible={visible}
        hour={hour}
        minute={minute}
        onConfirm={(h, m) => { setHour(h); setMinute(m); setVisible(false); }}
        onDismiss={() => setVisible(false)}
        testID="time-picker"
      />
    </YStack>
  );
}

const meta: Meta = {
  title: "organisms/time-picker/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
