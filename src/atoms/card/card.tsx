import { Pressable } from "react-native";
import { styled, View } from "tamagui";
import type { CardProps } from "./card.type";

const ElevatedCard = styled(View, {
  name: "CardElevated",
  backgroundColor: "$surfaceContainerLow",
  borderRadius: 12,
  padding: 16,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.15,
  shadowRadius: 2,
});

const FilledCard = styled(View, {
  name: "CardFilled",
  backgroundColor: "$surfaceContainerHighest",
  borderRadius: 12,
  padding: 16,
});

const OutlinedCard = styled(View, {
  name: "CardOutlined",
  backgroundColor: "$surface",
  borderRadius: 12,
  padding: 16,
  borderWidth: 1,
  borderColor: "$outlineVariant",
});

const cardComponents = {
  elevated: ElevatedCard,
  filled: FilledCard,
  outlined: OutlinedCard,
};

export function Card({
  variant = "elevated",
  children,
  onPress,
  disabled = false,
  testID,
}: CardProps) {
  const Container = cardComponents[variant];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        testID={testID}
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        style={({ pressed }) => ({ opacity: disabled ? 0.38 : pressed ? 0.9 : 1 })}
      >
        {({ pressed }) => (
          <Container
            style={{ transform: [{ scale: pressed && !disabled ? 0.98 : 1 }] }}
          >
            {children}
          </Container>
        )}
      </Pressable>
    );
  }

  return (
    <Container testID={testID} style={disabled ? { opacity: 0.38 } : undefined}>
      {children}
    </Container>
  );
}
