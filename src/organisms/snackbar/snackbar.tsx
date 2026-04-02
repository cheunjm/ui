import { useEffect, useRef } from "react";
import { Pressable } from "react-native";
import { styled, View, XStack, useTheme } from "tamagui";
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
  testID,
}: SnackbarProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
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

  const closeIconColor =
    (theme.inverseOnSurface?.val as string) ?? "#F4EFF4";

  return (
    <Container testID={testID}>
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

        {actionLabel && (
          <Pressable
            onPress={onAction}
            testID={testID ? `${testID}-action` : undefined}
            accessibilityRole="button"
          >
            <Text role="label" size="medium" color="$inversePrimary">
              {actionLabel}
            </Text>
          </Pressable>
        )}

        {showCloseIcon && (
          <Pressable
            onPress={onDismiss}
            testID={testID ? `${testID}-close` : undefined}
            accessibilityRole="button"
          >
            <MaterialIcons name="close" size={18} color={closeIconColor} />
          </Pressable>
        )}
      </XStack>
    </Container>
  );
}
