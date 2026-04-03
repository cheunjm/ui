import type { TextFieldProps } from "../../atoms";

export type FormFieldProps = {
  /** Label text above the field */
  label?: string;
  /** Whether label is required (shows asterisk) */
  required?: boolean;
  /** Helper text below the field */
  helperText?: string;
  /** Error text (replaces helper text, enables error styling) */
  errorText?: string;
  /** Character count (shown bottom-right) */
  characterCount?: { current: number; max: number };
  testID?: string;
} & Omit<TextFieldProps, "helperText" | "errorText">;
