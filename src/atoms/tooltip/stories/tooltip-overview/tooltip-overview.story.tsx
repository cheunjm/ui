import React from "react";
import { YStack } from "tamagui";
import { Tooltip } from "../../tooltip";
import { Button } from "../../../button";
import { Text } from "../../../text";

export const TooltipOverview = () => (
  <YStack gap={48} padding={32} alignItems="center">
    <Tooltip label="Plain tooltip" variant="plain" placement="top">
      <Button variant="outlined">Long-press me (plain)</Button>
    </Tooltip>
    <Tooltip
      label="Rich tooltip title"
      description="Additional context shown in a rich tooltip with more detail."
      variant="rich"
      placement="bottom"
      actionLabel="Learn more"
      onAction={() => {}}
    >
      <Button variant="outlined">Long-press me (rich)</Button>
    </Tooltip>
    <Tooltip label="Right placement" variant="plain" placement="right">
      <Text variant="bodyMedium">Hover target</Text>
    </Tooltip>
  </YStack>
);

TooltipOverview.storyName = "Tooltip/Overview";
