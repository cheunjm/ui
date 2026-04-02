import { styled, View } from "tamagui";
import { Pressable } from "react-native";
import type { RadioButtonProps } from "./radio-button.type";

const OuterCircle = styled(View, {
  name: "RadioButtonOuter",
  width: 20,
  height: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: "$onSurfaceVariant",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    selected: {
      true: {
        borderColor: "$primary",
      },
    },
    error: {
      true: {
        borderColor: "$error",
      },
    },
  } as const,
} as const);

const InnerCircle = styled(View, {
  name: "RadioButtonInner",
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: "$primary",

  variants: {
    error: {
      true: {
        backgroundColor: "$error",
      },
    },
  } as const,
} as const);

export function RadioButton({
  selected = false,
  error = false,
  disabled = false,
  onPress,
  accessibilityLabel,
  testID,
  ...props
}: RadioButtonProps) {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected, disabled }}
      accessibilityLabel={accessibilityLabel}
      style={{
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        opacity: disabled ? 0.38 : 1,
      }}
      testID={testID}
    >
      <OuterCircle
        selected={selected as any}
        error={error as any}
        {...props}
      >
        {selected && <InnerCircle error={error as any} />}
      </OuterCircle>
    </Pressable>
  );
}
