import { useEffect, useRef } from "react";
import { Animated } from "react-native";
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
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [opacity]);

  const backgroundColor =
    (theme.surfaceContainerHighest?.val as string);

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
          opacity,
        },
        style,
      ]}
    />
  );
}
