import { styled, Text as TamaguiText } from "tamagui";
import type { TextProps, TextRole, TextSize } from "./text.type";
import {
  fontSize,
  lineHeight,
  letterSpacing,
  type TypographyToken,
} from "../../tokens/generated/typography";

/** Map role + size → typography token key */
function toToken(role: TextRole, size: TextSize): TypographyToken {
  const key = `${role}${size.charAt(0).toUpperCase()}${size.slice(1)}`;
  return key as TypographyToken;
}

const StyledText = styled(TamaguiText, {
  name: "Text",
  fontFamily: "$body",
  color: "$onSurface",
});

export function Text({
  role = "body",
  size = "medium",
  ...props
}: TextProps) {
  const token = toToken(role, size);

  return (
    <StyledText
      fontSize={fontSize[token]}
      lineHeight={lineHeight[token]}
      letterSpacing={letterSpacing[token]}
      fontFamily={role === "label" ? "$label" : "$body"}
      {...props}
    />
  );
}
