export type MenuItem = {
  /** Unique key */
  key: string;
  /** Display label */
  label: string;
  /** Optional leading icon name (Material Icons) */
  leadingIcon?: string;
  /** Optional trailing text */
  trailingText?: string;
  /** Press handler */
  onPress: () => void;
  /** Whether item is disabled */
  disabled?: boolean;
};

export type MenuProps = {
  /** Whether the menu is visible */
  visible: boolean;
  /** Callback to close the menu */
  onDismiss: () => void;
  /** Menu items */
  items: MenuItem[];
  /** Test ID */
  testID?: string;
};
