export type SearchBarProps = {
  /** Current search text */
  value?: string;
  /** Placeholder text. Default: "Search" */
  placeholder?: string;
  /** Callback when text changes */
  onChangeText?: (text: string) => void;
  /** Callback when search is submitted */
  onSubmit?: () => void;
  /** Leading icon name. Default: "search" */
  leadingIcon?: string;
  /** Whether to show clear button when text is present. Default: true */
  showClearButton?: boolean;
  /** Trailing icon name (replaces clear button) */
  trailingIcon?: string;
  /** Callback when trailing icon pressed */
  onTrailingIconPress?: () => void;
  /** Whether search bar is disabled */
  disabled?: boolean;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
