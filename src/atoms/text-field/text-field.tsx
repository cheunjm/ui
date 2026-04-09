import { useState, useCallback } from "react";
import { TextInput, Pressable } from "react-native";
import { styled, View, Text, useTheme } from "tamagui";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { TextFieldProps } from "./text-field.type";

const FilledContainer = styled(View, {
  name: "TextFieldFilledContainer",
  height: 56,
  backgroundColor: "$surfaceContainerHighest",
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,

  variants: {
    isDisabled: {
      true: {
        opacity: 0.38,
      },
    },
  } as const,
} as const);

const OutlinedContainer = styled(View, {
  name: "TextFieldOutlinedContainer",
  height: 56,
  backgroundColor: "transparent",
  borderRadius: 4,
  borderWidth: 1,
  borderColor: "$outline",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,

  variants: {
    isFocused: {
      true: {
        borderWidth: 2,
        borderColor: "$primary",
      },
    },
    isError: {
      true: {
        borderWidth: 2,
        borderColor: "$error",
      },
    },
    isDisabled: {
      true: {
        opacity: 0.38,
      },
    },
  } as const,
} as const);

const LabelText = styled(Text, {
  name: "TextFieldLabel",
  position: "absolute",
  left: 16,

  variants: {
    isFloating: {
      true: {
        top: 8,
        fontSize: 12,
        lineHeight: 16,
      },
      false: {
        top: 16,
        fontSize: 16,
        lineHeight: 24,
      },
    },
  } as const,
} as const);

const HelperText = styled(Text, {
  name: "TextFieldHelperText",
  fontSize: 12,
  lineHeight: 16,
  paddingHorizontal: 16,
  paddingTop: 4,
} as const);

const CounterText = styled(Text, {
  name: "TextFieldCounterText",
  fontSize: 12,
  lineHeight: 16,
  paddingTop: 4,
  paddingRight: 16,
  color: "$onSurfaceVariant",
} as const);

const FilledBottomBorder = styled(View, {
  name: "TextFieldFilledBorder",
  height: 1,
  backgroundColor: "$onSurfaceVariant",

  variants: {
    isFocused: {
      true: {
        height: 2,
        backgroundColor: "$primary",
      },
    },
    isError: {
      true: {
        height: 2,
        backgroundColor: "$error",
      },
    },
  } as const,
} as const);

export function TextField({
  variant = "filled",
  label,
  value,
  placeholder,
  helperText,
  errorText,
  error = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onTrailingIconPress,
  maxLength,
  onChangeText,
  onFocus,
  onBlur,
  accessibilityLabel,
  accessibilityHint,
  testID,
  keyboardType,
  autoCapitalize,
  secureTextEntry,
  multiline,
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  const isFloating = isFocused || !!value;
  const isError = error || !!errorText;

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    onFocus?.();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    onBlur?.();
  }, [onBlur]);

  const labelColor = isError
    ? (theme.error?.val as string)
    : isFocused
      ? (theme.primary?.val as string)
      : (theme.onSurfaceVariant?.val as string);

  const inputColor = disabled
    ? (theme.onSurface?.val as string)
    : (theme.onSurface?.val as string);

  const iconColor = theme.onSurfaceVariant?.val as string;

  const supportText = errorText ?? helperText;
  const supportColor = isError
    ? (theme.error?.val as string)
    : (theme.onSurfaceVariant?.val as string);

  const inputElement = (
    <TextInput
      value={value}
      placeholder={!label || isFloating ? placeholder : undefined}
      placeholderTextColor={theme.onSurfaceVariant?.val as string}
      onChangeText={onChangeText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      editable={!disabled}
      maxLength={maxLength}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityHint={accessibilityHint}
      accessibilityState={disabled ? { disabled: true } : undefined}
      style={{
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        color: inputColor,
        paddingTop: label && isFloating ? 20 : 0,
        paddingBottom: 0,
        paddingHorizontal: 0,
      }}
      testID={testID ? `${testID}-input` : undefined}
    />
  );

  const leadingIconElement = leadingIcon ? (
    <View marginRight={12}>
      <MaterialIcons name={leadingIcon as any} size={24} color={iconColor} />
    </View>
  ) : null;

  const trailingIconElement = trailingIcon ? (
    <Pressable onPress={disabled ? undefined : onTrailingIconPress}>
      <View marginLeft={12}>
        <MaterialIcons name={trailingIcon as any} size={24} color={iconColor} />
      </View>
    </Pressable>
  ) : null;

  const labelElement = label ? (
    <LabelText
      isFloating={isFloating}
      color={labelColor as any}
      pointerEvents="none"
      style={leadingIcon ? { left: 52 } : undefined}
    >
      {label}
    </LabelText>
  ) : null;

  const bottomRow =
    supportText || maxLength ? (
      <View
        flexDirection="row"
        justifyContent="space-between"
        paddingHorizontal={0}
      >
        {supportText ? (
          <HelperText color={supportColor as any} flex={1}>
            {supportText}
          </HelperText>
        ) : (
          <View flex={1} />
        )}
        {maxLength ? (
          <CounterText>
            {value?.length ?? 0}/{maxLength}
          </CounterText>
        ) : null}
      </View>
    ) : null;

  if (variant === "outlined") {
    return (
      <View testID={testID}>
        <View position="relative">
          <OutlinedContainer
            isFocused={!isError && isFocused ? true : undefined}
            isError={isError ? true : undefined}
            isDisabled={disabled ? true : undefined}
          >
            {leadingIconElement}
            {inputElement}
            {trailingIconElement}
          </OutlinedContainer>
          {labelElement}
        </View>
        {bottomRow}
      </View>
    );
  }

  return (
    <View testID={testID}>
      <View position="relative">
        <FilledContainer isDisabled={disabled ? true : undefined}>
          {leadingIconElement}
          {inputElement}
          {trailingIconElement}
        </FilledContainer>
        {labelElement}
        <FilledBottomBorder
          isFocused={!isError && isFocused ? true : undefined}
          isError={isError ? true : undefined}
        />
      </View>
      {bottomRow}
    </View>
  );
}
