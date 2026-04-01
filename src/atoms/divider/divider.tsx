import { styled, View } from "tamagui";
import type { DividerProps } from "./divider.type";

const StyledDivider = styled(View, {
  name: "Divider",
  backgroundColor: "$outlineVariant",

  variants: {
    orientation: {
      horizontal: {
        height: 1,
        width: "100%",
      },
      vertical: {
        width: 1,
        height: "100%",
      },
    },
    insetMode: {
      none: {},
      insetLeft: {
        marginLeft: "$lg",
      },
      insetRight: {
        marginRight: "$lg",
      },
      insetBoth: {
        marginLeft: "$lg",
        marginRight: "$lg",
      },
    },
  } as const,

  defaultVariants: {
    orientation: "horizontal",
    insetMode: "none",
  },
} as const);

export function Divider({
  orientation = "horizontal",
  inset = "none",
  ...props
}: DividerProps) {
  return (
    <StyledDivider
      orientation={orientation as any}
      insetMode={inset as any}
      role="separator"
      {...props}
    />
  );
}
