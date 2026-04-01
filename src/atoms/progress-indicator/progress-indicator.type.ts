/** MD3 Progress Indicator type: linear bar or circular spinner */
export type ProgressIndicatorType = "linear" | "circular";

/** MD3 Progress Indicator mode: determinate (shows %) or indeterminate (animated) */
export type ProgressIndicatorMode = "determinate" | "indeterminate";

export type ProgressIndicatorProps = {
  /** Indicator type. Default: "linear" */
  type?: ProgressIndicatorType;
  /** Indicator mode. Default: "indeterminate" */
  mode?: ProgressIndicatorMode;
  /** Progress value 0-1 (determinate only). Default: 0 */
  progress?: number;
  /** Size for circular type. Default: 48 */
  size?: number;
  /** Accessibility label */
  accessibilityLabel?: string;
  testID?: string;
};
