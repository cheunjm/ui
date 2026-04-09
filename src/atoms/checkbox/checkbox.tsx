import { styled, View, useTheme } from "tamagui";
import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { CheckboxProps } from "./checkbox.type";

const StyledCheckbox = styled(View, {
  name: "Checkbox",
  width: 18,
  height: 18,
  borderRadius: 2,
  justifyContent: "center",
  alignItems: "center",

  variants: {
    checkboxState: {
      checked: {
        backgroundColor: "$primary",
        borderWidth: 0,
      },
      unchecked: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "$onSurfaceVariant",
      },
      indeterminate: {
        backgroundColor: "$primary",
        borderWidth: 0,
      },
    },
  } as const,

  defaultVariants: {
    checkboxState: "unchecked",
  },
} as const);

export function Checkbox({
  state = "unchecked",
  error = false,
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID,
  ...props
}: CheckboxProps) {
  const theme = useTheme();

  const fillColor = error ? (theme.error?.val as string) : undefined;
  const borderColor = error ? (theme.error?.val as string) : undefined;
  const iconColor = error
    ? (theme.onError?.val as string)
    : (theme.onPrimary?.val as string);

  const stateOverrides: Record<string, unknown> =
    state === "unchecked" && error
      ? { borderColor }
      : state !== "unchecked" && error
        ? { backgroundColor: fillColor }
        : {};

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ checked: state === "checked", disabled }}
      testID={testID}
      style={{
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        opacity: disabled ? 0.38 : 1,
      }}
    >
      <StyledCheckbox
        checkboxState={state as any}
        {...(stateOverrides as any)}
        {...props}
      >
        {state === "checked" && (
          <MaterialIcons name="check" size={14} color={iconColor} />
        )}
        {state === "indeterminate" && (
          <MaterialIcons name="remove" size={14} color={iconColor} />
        )}
      </StyledCheckbox>
    </Pressable>
  );
}
