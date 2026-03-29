import { styled, Button as TamaguiButton } from "tamagui";
import type { ButtonProps } from "./button.type";

const StyledButton = styled(TamaguiButton, {
  name: "Button",
  borderRadius: "$full",
  paddingHorizontal: "$2xl",
  paddingVertical: "$sm",
  fontFamily: "$label",
  fontWeight: "500",
  fontSize: 14,
  letterSpacing: 0.1,
  minHeight: 40,
  minWidth: 64,

  variants: {
    variant: {
      filled: {
        backgroundColor: "$primary",
        color: "$onPrimary",
      },
      outlined: {
        backgroundColor: "transparent",
        color: "$primary",
        borderWidth: 1,
        borderColor: "$outline",
      },
      text: {
        backgroundColor: "transparent",
        color: "$primary",
        borderWidth: 0,
      },
      elevated: {
        backgroundColor: "$surfaceContainerLow",
        color: "$primary",
        elevation: 1,
      },
      tonal: {
        backgroundColor: "$secondaryContainer",
        color: "$onSecondaryContainer",
      },
    },
  } as const,

  defaultVariants: {
    variant: "filled",
  },
} as const);

export function Button({ variant = "filled", ...props }: ButtonProps) {
  return <StyledButton variant={variant as any} {...props} />;
}
