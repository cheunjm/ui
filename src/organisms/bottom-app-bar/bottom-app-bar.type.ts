export type BottomAppBarAction = {
  icon: string;
  onPress: () => void;
  accessibilityLabel: string;
  testID?: string;
};

export type BottomAppBarFab = {
  icon: string;
  onPress: () => void;
  accessibilityLabel: string;
};

export type BottomAppBarProps = {
  /** Up to 4 trailing icon button actions */
  actions?: BottomAppBarAction[];
  /** Optional FAB in leading position */
  fab?: BottomAppBarFab;
  testID?: string;
};
