import { useState } from "react";
import { Modal, Pressable, ScrollView } from "react-native";
import { styled, View, XStack, YStack } from "tamagui";
import { IconButton } from "../../atoms/icon-button";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";
import { TextField } from "../../atoms/text-field";
import type { DatePickerMode, DatePickerProps } from "./date-picker.type";

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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

const RangeHighlight = styled(View, {
  name: "DatePickerRangeHighlight",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "$primaryContainer",
});

const YearCell = styled(View, {
  name: "DatePickerYearCell",
  width: 72,
  height: 36,
  borderRadius: 18,
  justifyContent: "center",
  alignItems: "center",
});

type ViewMode = "calendar" | "year";

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isBetween(date: Date, start: Date, end: Date) {
  const t = date.getTime();
  return t > start.getTime() && t < end.getTime();
}

function normalizeRange(a: Date, b: Date): [Date, Date] {
  return a.getTime() <= b.getTime() ? [a, b] : [b, a];
}

function formatDate(d: Date) {
  return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(
    d.getDate(),
  ).padStart(2, "0")}/${d.getFullYear()}`;
}

function parseDate(s: string): Date | null {
  const parts = s.split("/");
  if (parts.length === 3) {
    const parsed = new Date(
      Number(parts[2]),
      Number(parts[0]) - 1,
      Number(parts[1]),
    );
    if (!isNaN(parsed.getTime())) return parsed;
  }
  return null;
}

function getYearRange(minDate?: Date, maxDate?: Date) {
  const currentYear = new Date().getFullYear();
  const minYear = minDate ? minDate.getFullYear() : currentYear - 100;
  const maxYear = maxDate ? maxDate.getFullYear() : currentYear + 100;
  const years: number[] = [];
  for (let y = minYear; y <= maxYear; y++) {
    years.push(y);
  }
  return years;
}

export function DatePicker({
  visible,
  value,
  selectionMode = "single",
  startDate: startDateProp,
  endDate: endDateProp,
  onConfirm,
  onConfirmRange,
  onDismiss,
  mode: initialMode = "calendar",
  minDate,
  maxDate,
  testID,
}: DatePickerProps) {
  const today = new Date();
  const initial = value ?? today;

  const [displayMode, setDisplayMode] = useState<DatePickerMode>(initialMode);
  const [viewMode, setViewMode] = useState<ViewMode>("calendar");
  const [currentYear, setCurrentYear] = useState(initial.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(initial.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date>(initial);

  // Range state
  const [rangeStart, setRangeStart] = useState<Date | undefined>(startDateProp);
  const [rangeEnd, setRangeEnd] = useState<Date | undefined>(endDateProp);

  // Input state
  const [inputValue, setInputValue] = useState(formatDate(initial));
  const [rangeStartInput, setRangeStartInput] = useState(
    startDateProp ? formatDate(startDateProp) : "",
  );
  const [rangeEndInput, setRangeEndInput] = useState(
    endDateProp ? formatDate(endDateProp) : "",
  );

  const cells = buildCalendarGrid(currentYear, currentMonth);

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else setCurrentMonth((m) => m - 1);
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else setCurrentMonth((m) => m + 1);
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
    if (selectionMode === "range") return false;
    return (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    );
  }

  function handleDayPress(day: number) {
    const date = new Date(currentYear, currentMonth, day);

    if (selectionMode === "range") {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        setRangeStart(date);
        setRangeEnd(undefined);
      } else {
        const [start, end] = normalizeRange(rangeStart, date);
        setRangeStart(start);
        setRangeEnd(end);
      }
    } else {
      setSelectedDate(date);
    }
  }

  function isRangeStart(day: number) {
    if (!rangeStart) return false;
    const d = new Date(currentYear, currentMonth, day);
    return sameDay(d, rangeStart);
  }

  function isRangeEnd(day: number) {
    if (!rangeEnd) return false;
    const d = new Date(currentYear, currentMonth, day);
    return sameDay(d, rangeEnd);
  }

  function isInRange(day: number) {
    if (!rangeStart || !rangeEnd) return false;
    const d = new Date(currentYear, currentMonth, day);
    return isBetween(d, rangeStart, rangeEnd);
  }

  function handleConfirm() {
    if (selectionMode === "range") {
      if (displayMode === "input") {
        const start = parseDate(rangeStartInput);
        const end = parseDate(rangeEndInput);
        if (start && end && onConfirmRange) {
          const [s, e] = normalizeRange(start, end);
          onConfirmRange(s, e);
        }
        return;
      }
      if (rangeStart && rangeEnd && onConfirmRange) {
        onConfirmRange(rangeStart, rangeEnd);
      }
      return;
    }

    if (displayMode === "input") {
      const parsed = parseDate(inputValue);
      if (parsed) {
        onConfirm(parsed);
        return;
      }
    }
    onConfirm(selectedDate);
  }

  function handleYearSelect(year: number) {
    setCurrentYear(year);
    setViewMode("calendar");
  }

  const years = getYearRange(minDate, maxDate);

  const headerLabel =
    selectionMode === "range" ? "Select date range" : "Select date";

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
              marginBottom={16}
            >
              <Text role="body" size="small" color="$onSurfaceVariant">
                {headerLabel}
              </Text>
              <IconButton
                variant="standard"
                icon={
                  displayMode === "calendar" ? "keyboard" : "calendar_today"
                }
                testID={testID ? `${testID}-mode-toggle` : undefined}
                onPress={() => {
                  setDisplayMode((m) =>
                    m === "calendar" ? "input" : "calendar",
                  );
                  setViewMode("calendar");
                }}
              />
            </XStack>

            {displayMode === "calendar" ? (
              viewMode === "year" ? (
                <YStack
                  gap={8}
                  testID={testID ? `${testID}-year-grid` : undefined}
                >
                  <ScrollView
                    style={{ maxHeight: 280 }}
                    showsVerticalScrollIndicator={false}
                  >
                    <View
                      flexWrap="wrap"
                      flexDirection="row"
                      justifyContent="center"
                      gap={8}
                    >
                      {years.map((year) => {
                        const isCurrentYear = year === currentYear;
                        return (
                          <Pressable
                            key={year}
                            onPress={() => handleYearSelect(year)}
                          >
                            <YearCell
                              backgroundColor={
                                isCurrentYear ? "$primary" : "transparent"
                              }
                              borderWidth={
                                year === today.getFullYear() && !isCurrentYear
                                  ? 1
                                  : 0
                              }
                              borderColor="$primary"
                            >
                              <Text
                                role="body"
                                size="small"
                                color={
                                  isCurrentYear ? "$onPrimary" : "$onSurface"
                                }
                              >
                                {year}
                              </Text>
                            </YearCell>
                          </Pressable>
                        );
                      })}
                    </View>
                  </ScrollView>
                </YStack>
              ) : (
                <YStack gap={8}>
                  <XStack justifyContent="space-between" alignItems="center">
                    <IconButton
                      variant="standard"
                      icon="chevron_left"
                      testID={testID ? `${testID}-prev-month` : undefined}
                      onPress={prevMonth}
                    />
                    <Pressable
                      onPress={() => setViewMode("year")}
                      testID={testID ? `${testID}-year-toggle` : undefined}
                      accessibilityHint="Open year selector"
                    >
                      <XStack alignItems="center" gap={4}>
                        <Text role="title" size="small">
                          {MONTHS[currentMonth]} {currentYear}
                        </Text>
                        <Text
                          role="body"
                          size="small"
                          color="$onSurfaceVariant"
                        >
                          ▾
                        </Text>
                      </XStack>
                    </Pressable>
                    <IconButton
                      variant="standard"
                      icon="chevron_right"
                      testID={testID ? `${testID}-next-month` : undefined}
                      onPress={nextMonth}
                    />
                  </XStack>

                  <XStack justifyContent="space-around">
                    {DAYS_OF_WEEK.map((d) => (
                      <View key={d} width={40} alignItems="center">
                        <Text
                          role="label"
                          size="small"
                          color="$onSurfaceVariant"
                        >
                          {d}
                        </Text>
                      </View>
                    ))}
                  </XStack>

                  <View flexWrap="wrap" flexDirection="row">
                    {cells.map((cell, idx) => {
                      const selected = cell.thisMonth && isSelected(cell.day);
                      const today_ = cell.thisMonth && isToday(cell.day);
                      const disabled = cell.thisMonth && isDisabled(cell.day);

                      const rangeStartCell =
                        selectionMode === "range" &&
                        cell.thisMonth &&
                        isRangeStart(cell.day);
                      const rangeEndCell =
                        selectionMode === "range" &&
                        cell.thisMonth &&
                        isRangeEnd(cell.day);
                      const inRange =
                        selectionMode === "range" &&
                        cell.thisMonth &&
                        isInRange(cell.day);

                      const isEndpoint = rangeStartCell || rangeEndCell;

                      return (
                        <Pressable
                          key={idx}
                          onPress={() => {
                            if (cell.thisMonth && !disabled) {
                              handleDayPress(cell.day);
                            }
                          }}
                          disabled={!cell.thisMonth || disabled}
                          style={{ position: "relative" }}
                        >
                          {inRange && <RangeHighlight />}
                          {rangeStartCell && (
                            <RangeHighlight
                              borderTopLeftRadius={20}
                              borderBottomLeftRadius={20}
                              left="50%"
                            />
                          )}
                          {rangeEndCell && (
                            <RangeHighlight
                              borderTopRightRadius={20}
                              borderBottomRightRadius={20}
                              right="50%"
                            />
                          )}
                          <DayCell
                            backgroundColor={
                              isEndpoint
                                ? "$primary"
                                : selected
                                  ? "$primary"
                                  : "transparent"
                            }
                            borderWidth={
                              today_ && !selected && !isEndpoint ? 1 : 0
                            }
                            borderColor="$primary"
                          >
                            <Text
                              role="body"
                              size="medium"
                              color={
                                isEndpoint || selected
                                  ? "$onPrimary"
                                  : !cell.thisMonth || disabled
                                    ? "$onSurfaceVariant"
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
              )
            ) : selectionMode === "range" ? (
              <YStack
                gap={16}
                marginBottom={8}
                testID={testID ? `${testID}-range-inputs` : undefined}
              >
                <TextField
                  label="Start date"
                  placeholder="mm/dd/yyyy"
                  value={rangeStartInput}
                  onChangeText={setRangeStartInput}
                />
                <TextField
                  label="End date"
                  placeholder="mm/dd/yyyy"
                  value={rangeEndInput}
                  onChangeText={setRangeEndInput}
                />
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
