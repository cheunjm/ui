import type { ReactNode } from "react";

export type EmptyStateTemplateProps = {
  /** Slot for TopAppBar or custom header */
  topBar?: ReactNode;
  /** MaterialIcons icon name */
  icon?: string;
  /** Title text */
  title?: string;
  /** Body text */
  body?: string;
  /** Action slot, typically a Button */
  action?: ReactNode;
  testID?: string;
};
