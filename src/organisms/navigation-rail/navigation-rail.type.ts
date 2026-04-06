/** A single rail navigation destination */
export type RailDestination = {
  /** Icon name for inactive state (outlined) */
  icon: string;
  /** Icon name for active state (filled). Falls back to `icon` if omitted. */
  activeIcon?: string;
  /** Text label shown below the icon */
  label: string;
  /** Optional badge count. Shows a large badge with count when provided. */
  badge?: number;
};

/** Optional FAB displayed at the top of the rail */
export type RailFab = {
  /** Material icon name */
  icon: string;
  /** Callback when pressed */
  onPress: () => void;
  /** Accessibility label */
  accessibilityLabel: string;
};

export type NavigationRailProps = {
  /** 3–7 navigation destinations */
  destinations: RailDestination[];
  /** Index of the active destination. Default: 0 */
  activeIndex?: number;
  /** Called when a destination is pressed */
  onDestinationPress?: (index: number) => void;
  /** Optional FAB at the top of the rail */
  fab?: RailFab;
  testID?: string;
};
