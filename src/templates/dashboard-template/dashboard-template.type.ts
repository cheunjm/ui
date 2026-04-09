import type { ReactNode } from "react";

export type DashboardTemplateProps = {
  /** Slot for TopAppBar at the top */
  topBar?: ReactNode;
  /** Cards rendered in a responsive grid */
  summaryCards?: ReactNode[];
  /** Main content below cards */
  children?: ReactNode;
  /** Test ID for the outer container */
  testID?: string;
};
