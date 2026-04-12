export type SearchSuggestion = {
  label: string;
  icon?: string;
  onPress: () => void;
};

export type SearchVariant = "bar" | "fullScreen";

export type SearchProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmit?: () => void;
  onBack?: () => void;
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  recentSearches?: string[];
  onRecentSearchPress?: (query: string) => void;
  onClearRecent?: () => void;
  /**
   * Controls suggestion visibility. Ignored when `variant="fullScreen"`,
   * which is always active. Default: false.
   */
  active?: boolean;
  /**
   * Called when the search transitions from inactive to active.
   * Not called when `variant="fullScreen"` since it is always active.
   */
  onActiveChange?: (active: boolean) => void;
  /** Search display variant. "fullScreen" expands to fill the screen. Default: "bar" */
  variant?: SearchVariant;
  testID?: string;
};
