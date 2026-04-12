import type { ReactNode } from "react";

export type ListItemVariant = "one-line" | "two-line" | "three-line";

export type ListItemProps = {
  /** Headline text (required) */
  headline: string;
  /** Supporting text (second line) */
  supportingText?: string;
  /** Overline text (above headline, small caps) */
  overlineText?: string;
  /** Leading element — Icon name (string) or custom ReactNode */
  leadingContent?: string | ReactNode;
  /** Leading avatar — uri for image or full name (e.g. "John Doe") for text avatar */
  leadingAvatar?: { uri: string } | { name: string };
  /** Trailing element — text (string) or custom ReactNode */
  trailingContent?: string | ReactNode;
  /** Trailing supporting text (e.g., timestamp) */
  trailingSupportingText?: string;
  /** Trailing interactive element (checkbox, switch, icon-button). Touch events isolated from row press. */
  trailingElement?: ReactNode;
  /** Show bottom divider. Default: false */
  showDivider?: boolean;
  /** Callback when pressed */
  onPress?: () => void;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
