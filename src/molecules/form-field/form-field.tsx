import { View, XStack, YStack } from "tamagui";
import { Text, TextField } from "@/atoms";
import type { FormFieldProps } from "./form-field.type";

export function FormField({
  label,
  required = false,
  helperText,
  errorText,
  characterCount,
  testID,
  ...textFieldProps
}: FormFieldProps) {
  const isError = !!errorText;
  const supportText = errorText ?? helperText;
  const hasBottomRow = !!supportText || !!characterCount;

  return (
    <YStack gap={4} testID={testID}>
      {label ? (
        <Text
          role="body"
          size="small"
          color="$onSurfaceVariant"
          testID={testID ? `${testID}-label` : undefined}
        >
          {label}
          {required ? (
            <Text role="body" size="small" color="$error">
              {" *"}
            </Text>
          ) : null}
        </Text>
      ) : null}

      <TextField {...textFieldProps} error={isError} />

      {hasBottomRow ? (
        <XStack justifyContent="space-between">
          {supportText ? (
            <Text
              role="body"
              size="small"
              color={isError ? "$error" : "$onSurfaceVariant"}
              flex={1}
              testID={testID ? `${testID}-support` : undefined}
            >
              {supportText}
            </Text>
          ) : (
            <View flex={1} />
          )}
          {characterCount ? (
            <Text
              role="body"
              size="small"
              color="$onSurfaceVariant"
              testID={testID ? `${testID}-counter` : undefined}
            >
              {characterCount.current}/{characterCount.max}
            </Text>
          ) : null}
        </XStack>
      ) : null}
    </YStack>
  );
}
