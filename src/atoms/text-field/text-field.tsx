import { useState, useCallback } from "react";
import { TextInput, Pressable, View, Text as RNText } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { fontSize, lineHeight } from "../../tokens/generated/typography";
import { useAppTheme } from "../../tokens/use-app-theme";
import type { TextFieldProps } from "./text-field.type";

const stylesheet = StyleSheet.create((theme) => ({
  filledContainer: {
    height: 56,
    backgroundColor: theme.colors.surfaceContainerHighest,
    borderTopLeftRadius: theme.radii.md,
    borderTopRightRadius: theme.radii.md,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
  },
  outlinedContainer: {
    height: 56,
    backgroundColor: "transparent",
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
  },
  label: {
    position: "absolute",
    left: theme.spacing.lg,
  },
  labelWithIcon: {
    left: 52,
  },
  helperText: {
    fontSize: fontSize.bodySmall,
    lineHeight: lineHeight.bodySmall,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xs,
  },
  counterText: {
    fontSize: fontSize.bodySmall,
    lineHeight: lineHeight.bodySmall,
    paddingTop: theme.spacing.xs,
    paddingRight: theme.spacing.lg,
    color: theme.colors.onSurfaceVariant,
  },
  filledBottomBorder: {
    height: 1,
    backgroundColor: theme.colors.onSurfaceVariant,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 0,
  },
}));

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
  const { theme } = useAppTheme();

  const isFloating = isFocused || !!value;
  const isError = error || !!errorText;
  const showFocusRing = !isError && isFocused;

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    onFocus?.();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    onBlur?.();
  }, [onBlur]);

  const labelColor = isError
    ? theme.colors.error
    : isFocused
      ? theme.colors.primary
      : theme.colors.onSurfaceVariant;

  const inputColor = theme.colors.onSurface;
  const iconColor = theme.colors.onSurfaceVariant;
  const supportText = errorText ?? helperText;
  const supportColor = isError
    ? theme.colors.error
    : theme.colors.onSurfaceVariant;

  const labelVariantStyle = isFloating
    ? {
        top: theme.spacing.sm,
        fontSize: fontSize.bodySmall,
        lineHeight: lineHeight.bodySmall,
      }
    : {
        top: theme.spacing.lg,
        fontSize: fontSize.bodyLarge,
        lineHeight: lineHeight.bodyLarge,
      };

  const outlinedBorderStyle = isError
    ? { borderWidth: 2, borderColor: theme.colors.error }
    : showFocusRing
      ? { borderWidth: 2, borderColor: theme.colors.primary }
      : null;

  const bottomBorderStyle = isError
    ? { height: 2, backgroundColor: theme.colors.error }
    : showFocusRing
      ? { height: 2, backgroundColor: theme.colors.primary }
      : null;

  const disabledStyle = disabled ? { opacity: theme.opacity.disabled } : null;

  const inputElement = (
    <TextInput
      value={value}
      placeholder={!label || isFloating ? placeholder : undefined}
      placeholderTextColor={theme.colors.onSurfaceVariant}
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
        fontSize: fontSize.bodyLarge,
        lineHeight: lineHeight.bodyLarge,
        color: inputColor,
        paddingTop: label && isFloating ? 20 : 0,
        paddingBottom: 0,
        paddingHorizontal: 0,
      }}
      testID={testID ? `${testID}-input` : undefined}
    />
  );

  const leadingIconElement = leadingIcon ? (
    <View style={{ marginRight: theme.spacing.md }}>
      <MaterialIcons name={leadingIcon as any} size={24} color={iconColor} />
    </View>
  ) : null;

  const trailingIconElement = trailingIcon ? (
    <Pressable onPress={disabled ? undefined : onTrailingIconPress}>
      <View style={{ marginLeft: theme.spacing.md }}>
        <MaterialIcons name={trailingIcon as any} size={24} color={iconColor} />
      </View>
    </Pressable>
  ) : null;

  const labelElement = label ? (
    <RNText
      style={[
        stylesheet.label,
        labelVariantStyle,
        { color: labelColor },
        leadingIcon ? stylesheet.labelWithIcon : null,
      ]}
      pointerEvents="none"
    >
      {label}
    </RNText>
  ) : null;

  const bottomRow =
    supportText || maxLength ? (
      <View style={stylesheet.bottomRow}>
        {supportText ? (
          <RNText
            style={[stylesheet.helperText, { color: supportColor, flex: 1 }]}
          >
            {supportText}
          </RNText>
        ) : (
          <View style={{ flex: 1 }} />
        )}
        {maxLength ? (
          <RNText style={stylesheet.counterText}>
            {value?.length ?? 0}/{maxLength}
          </RNText>
        ) : null}
      </View>
    ) : null;

  if (variant === "outlined") {
    return (
      <View testID={testID}>
        <View style={{ position: "relative" }}>
          <View
            style={[
              stylesheet.outlinedContainer,
              outlinedBorderStyle,
              disabledStyle,
            ]}
          >
            {leadingIconElement}
            {inputElement}
            {trailingIconElement}
          </View>
          {labelElement}
        </View>
        {bottomRow}
      </View>
    );
  }

  return (
    <View testID={testID}>
      <View style={{ position: "relative" }}>
        <View style={[stylesheet.filledContainer, disabledStyle]}>
          {leadingIconElement}
          {inputElement}
          {trailingIconElement}
        </View>
        {labelElement}
        <View style={[stylesheet.filledBottomBorder, bottomBorderStyle]} />
      </View>
      {bottomRow}
    </View>
  );
}
