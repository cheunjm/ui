import { useEffect, useRef } from "react";
import { Pressable } from "react-native";
import { styled, View, XStack, YStack, useTheme } from "tamagui";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text } from "../../atoms/text";
import type { SnackbarProps } from "./snackbar.type";

const Container = styled(View, {
  name: "Snackbar",
  position: "absolute",
  bottom: 16,
  left: 16,
  right: 16,
  minHeight: 48,
  backgroundColor: "$inverseSurface",
  borderRadius: 4,
  paddingHorizontal: 16,
  paddingVertical: 12,
});

export function Snackbar({
  visible,
  message,
  actionLabel,
  onAction,
  showCloseIcon = false,
  onDismiss,
  duration = 4000,
  lines = "single",
  testID,
}: SnackbarProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const theme = useTheme();

  useEffect(() => {
    if (visible && duration > 0) {
      timerRef.current = setTimeout(() => {
        onDismiss?.();
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [visible, duration, onDismiss]);

  if (!visible) return null;

  const closeIconColor = theme.inverseOnSurface?.val as string;

  const isTwoLine = lines === "two";

  const actionButton = actionLabel ? (
    <Pressable
      onPress={onAction}
      testID={testID ? `${testID}-action` : undefined}
      accessibilityRole="button"
    >
      <Text role="label" size="medium" color="$inversePrimary">
        {actionLabel}
      </Text>
    </Pressable>
  ) : null;

  const closeButton = showCloseIcon ? (
    <Pressable
      onPress={onDismiss}
      testID={testID ? `${testID}-close` : undefined}
      accessibilityRole="button"
    >
      <MaterialIcons name="close" size={18} color={closeIconColor} />
    </Pressable>
  ) : null;

  return (
    <Container testID={testID} {...(isTwoLine && { minHeight: 68 })}>
      {isTwoLine ? (
        <YStack gap="$xs">
          <Text
            role="body"
            size="medium"
            color="$inverseOnSurface"
            numberOfLines={2}
            testID={testID ? `${testID}-message` : undefined}
          >
            {message}
          </Text>
          {(actionButton || closeButton) && (
            <XStack justifyContent="flex-end" alignItems="center" gap={8}>
              {actionButton}
              {closeButton}
            </XStack>
          )}
        </YStack>
      ) : (
        <XStack alignItems="center" gap={8}>
          <Text
            role="body"
            size="medium"
            color="$inverseOnSurface"
            flex={1}
            testID={testID ? `${testID}-message` : undefined}
          >
            {message}
          </Text>
          {actionButton}
          {closeButton}
        </XStack>
      )}
    </Container>
  );
}
