import { useCallback, useMemo, useRef, useState } from "react";
import { PanResponder, type LayoutChangeEvent } from "react-native";
import { styled, View, Text, useTheme } from "tamagui";
import type { SliderProps } from "./slider.type";

const SliderContainer = styled(View, {
  name: "SliderContainer",
  width: "100%",
  justifyContent: "center",
  paddingVertical: 16,
} as const);

const Track = styled(View, {
  name: "SliderTrack",
  height: 4,
  width: "100%",
  borderRadius: 2,
} as const);

const ActiveTrack = styled(View, {
  name: "SliderActiveTrack",
  height: 4,
  borderRadius: 2,
  position: "absolute",
  left: 0,
  top: 0,
} as const);

const Thumb = styled(View, {
  name: "SliderThumb",
  width: 20,
  height: 20,
  borderRadius: 10,
  position: "absolute",
  top: -8,
} as const);

const TickMark = styled(View, {
  name: "SliderTickMark",
  width: 4,
  height: 4,
  borderRadius: 2,
  position: "absolute",
  top: 0,
} as const);

const ValueLabel = styled(View, {
  name: "SliderValueLabel",
  position: "absolute",
  top: -32,
  borderRadius: 8,
  paddingHorizontal: 8,
  paddingVertical: 4,
  alignItems: "center",
} as const);

const ValueLabelText = styled(Text, {
  name: "SliderValueLabelText",
  fontSize: 12,
  fontWeight: "500",
} as const);

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

function snapToStep(val: number, min: number, max: number, step: number) {
  const snapped = Math.round((val - min) / step) * step + min;
  return clamp(snapped, min, max);
}

export function Slider({
  type = "continuous",
  value: controlledValue,
  min = 0,
  max = 100,
  step = 1,
  showLabel = false,
  disabled = false,
  onValueChange,
  accessibilityLabel,
  accessibilityHint,
  testID,
  variant = "continuous",
  lowValue: controlledLow,
  highValue: controlledHigh,
  onRangeChange,
}: SliderProps) {
  const theme = useTheme();
  const [trackWidth, setTrackWidth] = useState(0);
  const [internalValue, setInternalValue] = useState(controlledValue ?? min);
  const [internalLow, setInternalLow] = useState(controlledLow ?? min);
  const [internalHigh, setInternalHigh] = useState(controlledHigh ?? max);
  const activeThumb = useRef<"low" | "high">("low");

  const isRange = variant === "range";

  const currentValue = controlledValue ?? internalValue;
  const fraction = max > min ? (currentValue - min) / (max - min) : 0;

  const currentLow = controlledLow ?? internalLow;
  const currentHigh = controlledHigh ?? internalHigh;
  const lowFraction = max > min ? (currentLow - min) / (max - min) : 0;
  const highFraction = max > min ? (currentHigh - min) / (max - min) : 1;

  const updateValue = useCallback(
    (locationX: number) => {
      if (disabled || trackWidth === 0) return;
      const raw = (locationX / trackWidth) * (max - min) + min;
      const resolved =
        type === "discrete"
          ? snapToStep(raw, min, max, step)
          : clamp(raw, min, max);
      setInternalValue(resolved);
      onValueChange?.(resolved);
    },
    [disabled, trackWidth, max, min, type, step, onValueChange],
  );

  const updateRangeValue = useCallback(
    (locationX: number) => {
      if (disabled || trackWidth === 0) return;
      const raw = (locationX / trackWidth) * (max - min) + min;
      const resolved =
        type === "discrete"
          ? snapToStep(raw, min, max, step)
          : clamp(raw, min, max);
      if (activeThumb.current === "low") {
        const newLow = Math.min(resolved, currentHigh);
        setInternalLow(newLow);
        onRangeChange?.(newLow, currentHigh);
      } else {
        const newHigh = Math.max(resolved, currentLow);
        setInternalHigh(newHigh);
        onRangeChange?.(currentLow, newHigh);
      }
    },
    [disabled, trackWidth, max, min, type, step, currentLow, currentHigh, onRangeChange],
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => !disabled,
        onMoveShouldSetPanResponder: () => !disabled,
        onPanResponderGrant: (evt) => {
          updateValue(evt.nativeEvent.locationX);
        },
        onPanResponderMove: (evt) => {
          updateValue(evt.nativeEvent.locationX);
        },
      }),
    [disabled, updateValue],
  );

  const rangePanResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => !disabled,
        onMoveShouldSetPanResponder: () => !disabled,
        onPanResponderGrant: (evt) => {
          if (trackWidth === 0) return;
          const x = evt.nativeEvent.locationX;
          const lowX = lowFraction * trackWidth;
          const highX = highFraction * trackWidth;
          activeThumb.current =
            Math.abs(x - lowX) < Math.abs(x - highX) ? "low" : "high";
          updateRangeValue(x);
        },
        onPanResponderMove: (evt) => {
          updateRangeValue(evt.nativeEvent.locationX);
        },
      }),
    [disabled, trackWidth, lowFraction, highFraction, updateRangeValue],
  );

  const handleLayout = useCallback((e: LayoutChangeEvent) => {
    setTrackWidth(e.nativeEvent.layout.width);
  }, []);

  const primaryColor = theme.primary?.val as string;
  const primaryContainerColor = theme.primaryContainer?.val as string;
  const onPrimaryColor = theme.onPrimary?.val as string;
  const containerOpacity = disabled ? 0.38 : 1;

  const tickMarks = useMemo(() => {
    if (type !== "discrete" || trackWidth === 0) return null;
    const count = Math.floor((max - min) / step) + 1;
    const marks = [];
    for (let i = 0; i < count; i++) {
      const tickFraction = i / (count - 1);
      const tickLeft = tickFraction * trackWidth - 2;
      const isActive = isRange
        ? tickFraction >= lowFraction && tickFraction <= highFraction
        : tickFraction <= fraction;
      marks.push(
        <TickMark
          key={i}
          backgroundColor={(isActive ? onPrimaryColor : primaryColor) as any}
          left={tickLeft}
        />,
      );
    }
    return marks;
  }, [
    type,
    trackWidth,
    max,
    min,
    step,
    fraction,
    isRange,
    lowFraction,
    highFraction,
    onPrimaryColor,
    primaryColor,
  ]);

  const thumbLeft = fraction * trackWidth - 10;

  return (
    <SliderContainer
      testID={testID}
      opacity={containerOpacity}
      accessibilityRole="adjustable"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityValue={{ min, max, now: currentValue }}
    >
      <View
        position="relative"
        {...(isRange
          ? rangePanResponder.panHandlers
          : panResponder.panHandlers)}
        onLayout={handleLayout}
      >
        <Track backgroundColor={primaryContainerColor as any} />
        {isRange ? (
          <ActiveTrack
            backgroundColor={primaryColor as any}
            left={lowFraction * trackWidth}
            width={(highFraction - lowFraction) * trackWidth}
          />
        ) : (
          <ActiveTrack
            backgroundColor={primaryColor as any}
            width={fraction * trackWidth}
          />
        )}
        {tickMarks}
        {isRange ? (
          <>
            <Thumb
              backgroundColor={primaryColor as any}
              left={lowFraction * trackWidth - 10}
              testID={testID ? `${testID}-thumb-low` : undefined}
            />
            <Thumb
              backgroundColor={primaryColor as any}
              left={highFraction * trackWidth - 10}
              testID={testID ? `${testID}-thumb-high` : undefined}
            />
          </>
        ) : (
          <Thumb backgroundColor={primaryColor as any} left={thumbLeft}>
            {showLabel && (
              <ValueLabel backgroundColor={primaryColor as any}>
                <ValueLabelText color={onPrimaryColor as any}>
                  {Math.round(currentValue)}
                </ValueLabelText>
              </ValueLabel>
            )}
          </Thumb>
        )}
      </View>
    </SliderContainer>
  );
}
