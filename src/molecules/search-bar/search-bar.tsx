import { useCallback } from "react";
import { TextInput } from "react-native";
import { styled, View, useTheme } from "tamagui";
import { Icon } from "../../atoms/icon";
import { IconButton } from "../../atoms/icon-button";
import type { SearchBarProps } from "./search-bar.type";

const PillContainer = styled(View, {
  name: "SearchBarContainer",
  height: 56,
  borderRadius: 28,
  backgroundColor: "$surfaceContainerHigh",
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

export function SearchBar({
  value,
  placeholder = "Search",
  onChangeText,
  onSubmit,
  leadingIcon = "search",
  showClearButton = true,
  trailingIcon,
  onTrailingIconPress,
  disabled = false,
  accessibilityLabel,
  testID,
}: SearchBarProps) {
  const theme = useTheme();

  const inputColor = (theme.onSurface?.val as string) ?? "#1C1B1F";
  const placeholderColor =
    (theme.onSurfaceVariant?.val as string) ?? "#49454F";

  const handleClear = useCallback(() => {
    onChangeText?.("");
  }, [onChangeText]);

  const hasValue = !!value && value.length > 0;

  const trailingElement = trailingIcon ? (
    <IconButton
      icon={trailingIcon}
      variant="standard"
      iconSize={24}
      onPress={disabled ? undefined : onTrailingIconPress}
      testID={testID ? `${testID}-trailing` : undefined}
    />
  ) : showClearButton && hasValue ? (
    <IconButton
      icon="close"
      variant="standard"
      iconSize={24}
      onPress={disabled ? undefined : handleClear}
      testID={testID ? `${testID}-clear` : undefined}
    />
  ) : null;

  return (
    <PillContainer
      isDisabled={disabled ? true : undefined}
      testID={testID}
      accessibilityLabel={accessibilityLabel ?? placeholder}
      accessibilityRole="search"
    >
      <View marginRight={12}>
        <Icon name={leadingIcon} size={24} color="$onSurface" />
      </View>

      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        editable={!disabled}
        style={{
          flex: 1,
          fontSize: 16,
          lineHeight: 24,
          color: inputColor,
          paddingVertical: 0,
          paddingHorizontal: 0,
        }}
        testID={testID ? `${testID}-input` : undefined}
      />

      {trailingElement}
    </PillContainer>
  );
}
