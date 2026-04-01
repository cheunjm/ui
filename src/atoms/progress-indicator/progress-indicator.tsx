import { styled, View } from "tamagui";
import type { ProgressIndicatorProps } from "./progress-indicator.type";

const LinearTrack = styled(View, {
  name: "ProgressIndicatorLinearTrack",
  height: 4,
  width: "100%",
  backgroundColor: "$surfaceContainerHighest",
  borderRadius: 2,
  overflow: "hidden",
} as const);

const LinearIndicator = styled(View, {
  name: "ProgressIndicatorLinearIndicator",
  height: 4,
  backgroundColor: "$primary",
  borderRadius: 2,
} as const);

function LinearProgress({
  mode = "indeterminate",
  progress = 0,
  accessibilityLabel,
  testID,
}: Omit<ProgressIndicatorProps, "type" | "size">) {
  const clampedProgress = Math.min(1, Math.max(0, progress));
  const widthPercent = mode === "determinate" ? clampedProgress * 100 : 30;

  return (
    <LinearTrack
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="progressbar"
      accessibilityValue={{
        min: 0,
        max: 100,
        now: mode === "determinate" ? Math.round(clampedProgress * 100) : undefined,
      }}
    >
      <LinearIndicator width={`${widthPercent}%`} />
    </LinearTrack>
  );
}

const CircularTrack = styled(View, {
  name: "ProgressIndicatorCircularTrack",
  borderColor: "$surfaceContainerHighest",
  borderWidth: 4,
} as const);

const CircularIndicatorArc = styled(View, {
  name: "ProgressIndicatorCircularArc",
  position: "absolute",
  borderColor: "transparent",
  borderWidth: 4,
  borderTopColor: "$primary",
} as const);

function CircularProgress({
  mode = "indeterminate",
  progress = 0,
  size = 48,
  accessibilityLabel,
  testID,
}: Omit<ProgressIndicatorProps, "type">) {
  const clampedProgress = Math.min(1, Math.max(0, progress));
  const borderRadius = size / 2;

  // For determinate: show 1-4 quarter arcs based on progress
  // For indeterminate: show a single quarter arc (25%)
  const showRight = mode === "determinate" ? clampedProgress > 0 : true;
  const showBottom = mode === "determinate" ? clampedProgress > 0.25 : false;
  const showLeft = mode === "determinate" ? clampedProgress > 0.5 : false;
  const showTopArc = mode === "determinate" ? clampedProgress > 0.75 : false;

  return (
    <View
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="progressbar"
      accessibilityValue={{
        min: 0,
        max: 100,
        now: mode === "determinate" ? Math.round(clampedProgress * 100) : undefined,
      }}
      width={size}
      height={size}
    >
      <CircularTrack
        width={size}
        height={size}
        borderRadius={borderRadius}
      />
      <CircularIndicatorArc
        width={size}
        height={size}
        borderRadius={borderRadius}
        borderTopColor={showRight || showBottom || showLeft || showTopArc ? "$primary" : "transparent"}
        borderRightColor={showRight ? "$primary" : "transparent"}
        borderBottomColor={showBottom ? "$primary" : "transparent"}
        borderLeftColor={showLeft ? "$primary" : "transparent"}
      />
    </View>
  );
}

export function ProgressIndicator({
  type = "linear",
  mode = "indeterminate",
  progress = 0,
  size = 48,
  accessibilityLabel,
  testID,
}: ProgressIndicatorProps) {
  if (type === "circular") {
    return (
      <CircularProgress
        mode={mode}
        progress={progress}
        size={size}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
      />
    );
  }

  return (
    <LinearProgress
      mode={mode}
      progress={progress}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
    />
  );
}
