import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, Text } from "tamagui";
import { DatePicker } from "../../date-picker";
import { Button } from "../../../../atoms/button";
import { SectionLabel } from "../../../../storybook";

function Overview() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  const [rangeVisible, setRangeVisible] = useState(false);
  const [rangeStart, setRangeStart] = useState<Date | undefined>();
  const [rangeEnd, setRangeEnd] = useState<Date | undefined>();

  return (
    <YStack gap={24} padding={32} alignItems="center">
      <YStack gap={8} alignItems="center">
        <SectionLabel label="Single Date" />
        {selected && (
          <Text>{`Selected: ${selected.toLocaleDateString()}`}</Text>
        )}
        <Button variant="filled" onPress={() => setVisible(true)}>
          Pick a Date
        </Button>
        <DatePicker
          visible={visible}
          value={selected}
          onConfirm={(date) => {
            setSelected(date);
            setVisible(false);
          }}
          onDismiss={() => setVisible(false)}
          testID="date-picker"
        />
      </YStack>

      <YStack gap={8} alignItems="center">
        <SectionLabel label="Date Range" />
        {rangeStart && rangeEnd && (
          <Text>{`Range: ${rangeStart.toLocaleDateString()} – ${rangeEnd.toLocaleDateString()}`}</Text>
        )}
        <Button variant="filled" onPress={() => setRangeVisible(true)}>
          Pick a Range
        </Button>
        <DatePicker
          visible={rangeVisible}
          selectionMode="range"
          startDate={rangeStart}
          endDate={rangeEnd}
          onConfirm={() => {}}
          onConfirmRange={(start, end) => {
            setRangeStart(start);
            setRangeEnd(end);
            setRangeVisible(false);
          }}
          onDismiss={() => setRangeVisible(false)}
          testID="date-range-picker"
        />
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "organisms/date-picker/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=4-7",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
