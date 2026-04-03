import type { ReactNode } from "react";

export type ListTemplateProps = {
  /** Typically a TopAppBar */
  topBar?: ReactNode;
  /** SearchBar, filter row, or other header content below the top bar */
  headerContent?: ReactNode;
  /** Scrollable list content */
  children?: ReactNode;
  /** Typically a NavigationBar */
  bottomBar?: ReactNode;
  testID?: string;
};
