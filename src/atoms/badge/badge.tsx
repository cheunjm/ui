import { styled, View, Text } from "tamagui";
import type { BadgeProps } from "./badge.type";

const StyledBadge = styled(View, {
  name: "Badge",
  backgroundColor: "$error",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    size: {
      small: {
        width: 6,
        height: 6,
        borderRadius: 3,
      },
      large: {
        minWidth: 16,
        height: 16,
        borderRadius: 8,
        paddingHorizontal: 4,
      },
    },
  } as const,

  defaultVariants: {
    size: "small",
  },
} as const);

const BadgeText = styled(Text, {
  name: "BadgeText",
  color: "$onError",
  fontSize: 11,
  fontWeight: "500",
  lineHeight: 16,
  textAlign: "center",
});

function formatCount(count: number): string {
  if (count > 999) return "999+";
  return String(count);
}

export function Badge({ size = "small", count, accessibilityLabel, ...props }: BadgeProps) {
  const defaultLabel =
    size === "large" && count !== undefined
      ? `${formatCount(count)} notifications`
      : undefined;

  return (
    <StyledBadge
      size={size as any}
      accessibilityRole={size === "large" ? "text" : undefined}
      accessibilityLabel={accessibilityLabel ?? defaultLabel}
      {...props}
    >
      {size === "large" && count !== undefined && (
        <BadgeText>{formatCount(count)}</BadgeText>
      )}
    </StyledBadge>
  );
}
