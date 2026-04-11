/** A single navigation destination */
export type NavigationDestination = {
  /** Icon name for inactive state (outlined) */
  icon: string;
  /** Icon name for active state (filled). Falls back to `icon` if omitted. */
  activeIcon?: string;
  /** Text label shown below the icon */
  label: string;
  /** Optional badge count. Shows a large badge with count when provided. */
  badge?: number;
};

export type NavigationBarProps = {
  /** 3–5 navigation destinations */
  destinations: NavigationDestination[];
  /** Index of the active destination. Default: 0 */
  activeIndex?: number;
  /** Called when a destination is pressed */
  onDestinationPress?: (index: number) => void;
  /** Whether to show text labels below icons. Default: true */
  showLabels?: boolean;
  testID?: string;
};
