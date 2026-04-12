import type { ReactElement, ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";

export type DashboardTemplateProps = {
  /** Slot for TopAppBar at the top */
  topBar?: ReactNode;
  /** Cards rendered in a responsive grid */
  summaryCards?: ReactNode[];
  /** Main content below cards */
  children?: ReactNode;
  /** Floating action button(s) positioned bottom-right */
  fab?: ReactNode;
  /** RefreshControl element forwarded to the internal ScrollView */
  refreshControl?: ReactElement;
  /** Additional styles merged into the ScrollView's contentContainerStyle */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** Whether to show the vertical scroll indicator. Default: false */
  showsVerticalScrollIndicator?: boolean;
  /** Test ID for the outer container */
  testID?: string;
};
