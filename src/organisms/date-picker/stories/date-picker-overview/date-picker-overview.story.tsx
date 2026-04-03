import React, { useState } from "react";
import { YStack } from "tamagui";
import { DatePicker } from "../../date-picker";
import { Button } from "../../../atoms/button";
import { Text } from "../../../atoms/text";

export const DatePickerOverview = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <YStack gap={16} padding={32} alignItems="center">
      {selected && (
        <Text variant="bodyMedium">
          Selected: {selected.toLocaleDateString()}
        </Text>
      )}
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
};

DatePickerOverview.storyName = "DatePicker/Overview";
