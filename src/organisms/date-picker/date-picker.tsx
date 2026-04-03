import { useState } from "react";
import { Modal, Pressable } from "react-native";
import { styled, View, XStack, YStack } from "tamagui";
import { Icon } from "../../atoms/icon";
import { IconButton } from "../../atoms/icon-button";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";
import { TextField } from "../../atoms/text-field";
import type { DatePickerMode, DatePickerProps } from "./date-picker.type";

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const Container = styled(View, {
  name: "DatePicker",
  backgroundColor: "$surfaceContainerHigh",
  borderRadius: 28,
  padding: 24,
  minWidth: 328,
});

function buildCalendarGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const cells: Array<{ day: number; thisMonth: boolean }> = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, thisMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, thisMonth: true });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, thisMonth: false });
  }
  return cells;
}

const DayCell = styled(View, {
  name: "DatePickerDay",
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
});

export function DatePicker({
  visible,
  value,
  onConfirm,
  onDismiss,
  mode: initialMode = "calendar",
  minDate,
  maxDate,
  testID,
}: DatePickerProps) {
  const today = new Date();
  const initial = value ?? today;

  const [displayMode, setDisplayMode] = useState<DatePickerMode>(initialMode);
  const [currentYear, setCurrentYear] = useState(initial.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(initial.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date>(initial);
  const [inputValue, setInputValue] = useState(
    `${String(initial.getMonth() + 1).padStart(2, "0")}/${String(initial.getDate()).padStart(2, "0")}/${initial.getFullYear()}`
  );

  const cells = buildCalendarGrid(currentYear, currentMonth);

  function prevMonth() {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  }

  function nextMonth() {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  }

  function isDisabled(day: number) {
    const d = new Date(currentYear, currentMonth, day);
    if (minDate && d < minDate) return true;
    if (maxDate && d > maxDate) return true;
    return false;
  }

  function isToday(day: number) {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  }

  function isSelected(day: number) {
    return (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    );
  }

  function handleConfirm() {
    if (displayMode === "input") {
      const parts = inputValue.split("/");
      if (parts.length === 3) {
        const parsed = new Date(Number(parts[2]), Number(parts[0]) - 1, Number(parts[1]));
        if (!isNaN(parsed.getTime())) {
          onConfirm(parsed);
          return;
        }
      }
    }
    onConfirm(selectedDate);
  }

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onDismiss} testID={testID}>
      <Pressable style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.32)" }} onPress={onDismiss}>
        <Pressable onPress={(e) => e.stopPropagation()}>
          <Container>
            <XStack justifyContent="space-between" alignItems="center" marginBottom={16}>
              <Text variant="bodySmall" color="$onSurfaceVariant">Select date</Text>
              <IconButton
                variant="standard"
                icon={displayMode === "calendar" ? "keyboard" : "calendar_today"}
                onPress={() => setDisplayMode(m => m === "calendar" ? "input" : "calendar")}
              />
            </XStack>

            {displayMode === "calendar" ? (
              <YStack gap={8}>
                <XStack justifyContent="space-between" alignItems="center">
                  <IconButton variant="standard" icon="chevron_left" onPress={prevMonth} />
                  <Text variant="titleSmall">{MONTHS[currentMonth]} {currentYear}</Text>
                  <IconButton variant="standard" icon="chevron_right" onPress={nextMonth} />
                </XStack>

                <XStack justifyContent="space-around">
                  {DAYS_OF_WEEK.map(d => (
                    <View key={d} width={40} alignItems="center">
                      <Text variant="labelSmall" color="$onSurfaceVariant">{d}</Text>
                    </View>
                  ))}
                </XStack>

                <View flexWrap="wrap" flexDirection="row">
                  {cells.map((cell, idx) => {
                    const selected = cell.thisMonth && isSelected(cell.day);
                    const today_ = cell.thisMonth && isToday(cell.day);
                    const disabled = cell.thisMonth && isDisabled(cell.day);

                    return (
                      <Pressable
                        key={idx}
                        onPress={() => {
                          if (cell.thisMonth && !disabled) {
                            setSelectedDate(new Date(currentYear, currentMonth, cell.day));
                          }
                        }}
                        disabled={!cell.thisMonth || disabled}
                      >
                        <DayCell
                          backgroundColor={selected ? "$primary" : "transparent"}
                          borderWidth={today_ && !selected ? 1 : 0}
                          borderColor="$primary"
                        >
                          <Text
                            variant="bodyMedium"
                            color={
                              selected ? "$onPrimary"
                              : !cell.thisMonth || disabled ? "$onSurfaceVariant"
                              : "$onSurface"
                            }
                            opacity={!cell.thisMonth ? 0.38 : 1}
                          >
                            {cell.day}
                          </Text>
                        </DayCell>
                      </Pressable>
                    );
                  })}
                </View>
              </YStack>
            ) : (
              <YStack gap={16} marginBottom={8}>
                <TextField
                  label="Date"
                  placeholder="mm/dd/yyyy"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
              </YStack>
            )}

            <XStack justifyContent="flex-end" gap={8} marginTop={16}>
              <Button variant="text" onPress={onDismiss}>Cancel</Button>
              <Button variant="text" onPress={handleConfirm}>OK</Button>
            </XStack>
          </Container>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
