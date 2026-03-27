/** Direction the spacer expands */
export type SpacerDirection = "horizontal" | "vertical";

export type SpacerProps = {
  /** Expansion direction. Default: "vertical" */
  direction?: SpacerDirection;
  /** Size in pixels. Default: 16 */
  size?: number;
};
