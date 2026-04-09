import { useState } from "react";
import { Modal, Pressable } from "react-native";
import { styled, View, XStack, YStack } from "tamagui";
import { IconButton } from "../../atoms/icon-button";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";
import { TextField } from "../../atoms/text-field";
import type {
  TimePeriod,
  TimePickerMode,
  TimePickerProps,
} from "./time-picker.type";

const CLOCK_SIZE = 240;
const CLOCK_RADIUS = CLOCK_SIZE / 2;
const NUMBER_RADIUS = CLOCK_RADIUS - 32;

const Container = styled(View, {
  name: "TimePicker",
  backgroundColor: "$surfaceContainerHigh",
  borderRadius: 28,
  padding: 24,
  minWidth: 328,
});

const TimeSegment = styled(View, {
  name: "TimeSegment",
  backgroundColor: "$surfaceContainerHighest",
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 8,
  alignItems: "center",
  justifyContent: "center",
  minWidth: 96,
  height: 80,
});

const PeriodButton = styled(View, {
  name: "TimePeriodButton",
  paddingHorizontal: 12,
  paddingVertical: 10,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: "$outline",
});

function clockPosition(
  index: number,
  total: number,
  radius: number,
  size: number,
) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    left: CLOCK_RADIUS + radius * Math.cos(angle) - size / 2,
    top: CLOCK_RADIUS + radius * Math.sin(angle) - size / 2,
  };
}

type ClockFaceProps = {
  isHours: boolean;
  selected: number;
  use24Hour: boolean;
  onSelect: (value: number) => void;
};

function ClockFace({ isHours, selected, use24Hour, onSelect }: ClockFaceProps) {
  const numbers = isHours
    ? use24Hour
      ? Array.from({ length: 24 }, (_, i) => i)
      : Array.from({ length: 12 }, (_, i) => (i === 0 ? 12 : i))
    : Array.from({ length: 12 }, (_, i) => i * 5);

  const displayNumbers = use24Hour && isHours ? numbers.slice(0, 12) : numbers;

  return (
    <View
      width={CLOCK_SIZE}
      height={CLOCK_SIZE}
      borderRadius={CLOCK_RADIUS}
      backgroundColor="$surfaceContainerHighest"
      position="relative"
    >
      {displayNumbers.map((num, idx) => {
        const pos = clockPosition(
          idx === 0 ? displayNumbers.length : idx,
          displayNumbers.length,
          NUMBER_RADIUS,
          36,
        );
        const isActive = isHours
          ? use24Hour
            ? num === selected
            : (selected % 12 || 12) === num
          : num === selected;

        return (
          <Pressable
            key={num}
            onPress={() => onSelect(num)}
            style={{
              position: "absolute",
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: isActive ? "#6750A4" : "transparent",
              alignItems: "center",
              justifyContent: "center",
              ...pos,
            }}
          >
            <Text
              role="body"
              size="medium"
              color={isActive ? "$onPrimary" : "$onSurface"}
            >
              {String(num).padStart(2, "0")}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function TimePicker({
  visible,
  hour: initialHour = 9,
  minute: initialMinute = 0,
  onConfirm,
  onDismiss,
  mode: initialMode = "clock",
  use24Hour = false,
  testID,
}: TimePickerProps) {
  const [displayMode, setDisplayMode] = useState<TimePickerMode>(initialMode);
  const [hour, setHour] = useState(initialHour);
  const [minute, setMinute] = useState(initialMinute);
  const [period, setPeriod] = useState<TimePeriod>(
    initialHour < 12 ? "AM" : "PM",
  );
  const [clockFocus, setClockFocus] = useState<"hours" | "minutes">("hours");

  const displayHour = use24Hour ? hour : hour % 12 || 12;

  function handleConfirm() {
    let h = hour;
    if (!use24Hour) {
      h =
        period === "AM"
          ? hour === 12
            ? 0
            : hour
          : hour === 12
          ? 12
          : hour + 12;
    }
    onConfirm(h, minute);
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onDismiss}
      testID={testID}
    >
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.32)",
        }}
        onPress={onDismiss}
      >
        <Pressable onPress={(e) => e.stopPropagation()}>
          <Container>
            <XStack
              justifyContent="space-between"
              alignItems="center"
              marginBottom={20}
            >
              <Text role="body" size="small" color="$onSurfaceVariant">
                Enter time
              </Text>
              <IconButton
                variant="standard"
                icon={displayMode === "clock" ? "keyboard" : "schedule"}
                onPress={() =>
                  setDisplayMode((m) => (m === "clock" ? "input" : "clock"))
                }
              />
            </XStack>

            <XStack gap={8} alignItems="center" marginBottom={24}>
              <Pressable onPress={() => setClockFocus("hours")}>
                <TimeSegment
                  backgroundColor={
                    clockFocus === "hours" && displayMode === "clock"
                      ? "$primaryContainer"
                      : "$surfaceContainerHighest"
                  }
                >
                  <Text role="display" size="small" color="$onSurface">
                    {String(displayHour).padStart(2, "0")}
                  </Text>
                </TimeSegment>
              </Pressable>
              <Text role="display" size="small" color="$onSurface">
                :
              </Text>
              <Pressable onPress={() => setClockFocus("minutes")}>
                <TimeSegment
                  backgroundColor={
                    clockFocus === "minutes" && displayMode === "clock"
                      ? "$primaryContainer"
                      : "$surfaceContainerHighest"
                  }
                >
                  <Text role="display" size="small" color="$onSurface">
                    {String(minute).padStart(2, "0")}
                  </Text>
                </TimeSegment>
              </Pressable>
              {!use24Hour && (
                <YStack
                  borderRadius={8}
                  overflow="hidden"
                  borderWidth={1}
                  borderColor="$outline"
                >
                  <Pressable onPress={() => setPeriod("AM")}>
                    <PeriodButton
                      backgroundColor={
                        period === "AM" ? "$tertiaryContainer" : "transparent"
                      }
                    >
                      <Text
                        role="label"
                        size="medium"
                        color={
                          period === "AM"
                            ? "$onTertiaryContainer"
                            : "$onSurface"
                        }
                      >
                        AM
                      </Text>
                    </PeriodButton>
                  </Pressable>
                  <View height={1} backgroundColor="$outline" />
                  <Pressable onPress={() => setPeriod("PM")}>
                    <PeriodButton
                      backgroundColor={
                        period === "PM" ? "$tertiaryContainer" : "transparent"
                      }
                    >
                      <Text
                        role="label"
                        size="medium"
                        color={
                          period === "PM"
                            ? "$onTertiaryContainer"
                            : "$onSurface"
                        }
                      >
                        PM
                      </Text>
                    </PeriodButton>
                  </Pressable>
                </YStack>
              )}
            </XStack>

            {displayMode === "clock" ? (
              <View alignItems="center" marginBottom={16}>
                <ClockFace
                  isHours={clockFocus === "hours"}
                  selected={clockFocus === "hours" ? hour : minute}
                  use24Hour={use24Hour}
                  onSelect={(val) => {
                    if (clockFocus === "hours") {
                      setHour(val);
                      setClockFocus("minutes");
                    } else setMinute(val);
                  }}
                />
              </View>
            ) : (
              <XStack gap={8} marginBottom={16}>
                <View flex={1}>
                  <TextField
                    label="Hour"
                    placeholder={use24Hour ? "00" : "12"}
                    value={String(displayHour)}
                    onChangeText={(v) => {
                      const n = parseInt(v);
                      if (!isNaN(n)) setHour(n);
                    }}
                  />
                </View>
                <View flex={1}>
                  <TextField
                    label="Minute"
                    placeholder="00"
                    value={String(minute).padStart(2, "0")}
                    onChangeText={(v) => {
                      const n = parseInt(v);
                      if (!isNaN(n)) setMinute(Math.min(59, n));
                    }}
                  />
                </View>
              </XStack>
            )}

            <XStack justifyContent="flex-end" gap={8}>
              <Button variant="text" onPress={onDismiss}>
                Cancel
              </Button>
              <Button variant="text" onPress={handleConfirm}>
                OK
              </Button>
            </XStack>
          </Container>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
