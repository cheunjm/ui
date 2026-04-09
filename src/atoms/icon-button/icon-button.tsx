import { styled, Button as TamaguiButton, useTheme } from "tamagui";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { IconButtonProps } from "./icon-button.type";

const StyledIconButton = styled(TamaguiButton, {
  name: "IconButton",
  width: 48,
  height: 48,
  borderRadius: "$full",
  padding: 0,
  justifyContent: "center",
  alignItems: "center",

  variants: {
    variant: {
      standard: {
        backgroundColor: "transparent",
      },
      filled: {
        backgroundColor: "$primary",
      },
      filledTonal: {
        backgroundColor: "$secondaryContainer",
      },
      outlined: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$outline",
      },
    },
  } as const,

  defaultVariants: {
    variant: "standard",
  },
} as const);

const variantIconColor: Record<string, string> = {
  standard: "onSurfaceVariant",
  filled: "onPrimary",
  filledTonal: "onSecondaryContainer",
  outlined: "onSurfaceVariant",
};

export function IconButton({
  icon,
  variant = "standard",
  iconSize = 24,
  iconColor,
  ...props
}: IconButtonProps) {
  const theme = useTheme();

  let resolvedColor: string;
  if (iconColor?.startsWith("$")) {
    resolvedColor =
      (theme[iconColor.slice(1)]?.val as string) ?? iconColor;
  } else if (iconColor) {
    resolvedColor = iconColor;
  } else {
    const tokenKey = variantIconColor[variant] ?? "onSurfaceVariant";
    resolvedColor = (theme[tokenKey]?.val as string);
  }

  return (
    <StyledIconButton variant={variant as any} {...props}>
      <MaterialIcons name={icon as any} size={iconSize} color={resolvedColor} />
    </StyledIconButton>
  );
}
