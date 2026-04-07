export type TabBarVariant = "primary" | "secondary";

export type TabItem = {
  label: string;
  icon?: string;
  badge?: number;
  testID?: string;
};

export type TabBarProps = {
  tabs: TabItem[];
  activeIndex?: number;
  onTabPress?: (index: number) => void;
  variant?: TabBarVariant;
  scrollable?: boolean;
  testID?: string;
};
