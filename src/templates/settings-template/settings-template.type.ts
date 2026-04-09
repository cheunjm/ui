import type { ReactNode } from "react";

export type SettingsSection = {
  /** Section header text */
  title?: string;
  /** Setting row items (typically ListItem components) */
  items: ReactNode[];
  /** If true, wraps section in Accordion.Item */
  collapsible?: boolean;
  /** Default expanded state for collapsible sections */
  defaultExpanded?: boolean;
};

export type SettingsTemplateProps = {
  /** Slot for TopAppBar at the top */
  topBar?: ReactNode;
  /** Grouped settings sections */
  sections: SettingsSection[];
  /** Additional content below sections */
  children?: ReactNode;
  /** Test ID for the outer container */
  testID?: string;
};
