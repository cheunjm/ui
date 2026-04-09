import { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "tamagui";
import type { SkeletonProps } from "./skeleton.type";

export function Skeleton({
  width = "100%",
  height = 16,
  borderRadius = 4,
  style,
  testID,
}: SkeletonProps) {
  const theme = useTheme();
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.3, { duration: 700 }),
        withTiming(1, { duration: 700 }),
      ),
      -1,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const backgroundColor = theme.surfaceContainerHighest?.val as string;

  return (
    <Animated.View
      testID={testID}
      accessibilityRole="none"
      style={[
        {
          width: width as any,
          height: height as any,
          borderRadius,
          backgroundColor,
        },
        animatedStyle,
        style,
      ]}
    />
  );
}
