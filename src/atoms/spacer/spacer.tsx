import { View } from "tamagui";
import type { SpacerProps } from "./spacer.type";

export function Spacer({ direction = "vertical", size = 16 }: SpacerProps) {
  return (
    <View
      width={direction === "horizontal" ? size : undefined}
      height={direction === "vertical" ? size : undefined}
    />
  );
}
