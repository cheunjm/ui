import { useState } from "react";
import { View as RNView } from "react-native";
import { styled, View, XStack, YStack } from "tamagui";
import { Text } from "../text";
import { Button } from "../button";
import type { TooltipProps, TooltipPlacement } from "./tooltip.type";

const PlainContainer = styled(View, {
  name: "TooltipPlain",
  backgroundColor: "$inverseSurface",
  borderRadius: 4,
  paddingHorizontal: 8,
  paddingVertical: 4,
  maxWidth: 200,
});

const RichContainer = styled(View, {
  name: "TooltipRich",
  backgroundColor: "$surfaceContainer",
  borderRadius: 12,
  padding: 16,
  maxWidth: 280,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
});

function getTooltipOffset(placement: TooltipPlacement): object {
  switch (placement) {
    case "top":
      return { bottom: "100%", left: "50%", marginBottom: 4, transform: [{ translateX: -50 }] };
    case "bottom":
      return { top: "100%", left: "50%", marginTop: 4, transform: [{ translateX: -50 }] };
    case "left":
      return { right: "100%", top: "50%", marginRight: 4, transform: [{ translateY: -50 }] };
    case "right":
      return { left: "100%", top: "50%", marginLeft: 4, transform: [{ translateY: -50 }] };
  }
}

export function Tooltip({
  label,
  description,
  variant = "plain",
  placement = "top",
  children,
  actionLabel,
  onAction,
  testID,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const tooltipStyle = {
    position: "absolute" as const,
    zIndex: 999,
    ...getTooltipOffset(placement),
  };

  return (
    <RNView style={{ position: "relative" }} testID={testID}>
      <RNView onTouchStart={() => setVisible(true)} onTouchEnd={() => setVisible(false)}>
        {children}
      </RNView>
      {visible && (
        <RNView style={tooltipStyle}>
          {variant === "plain" ? (
            <PlainContainer>
              <Text role="body" size="small" color="$inverseOnSurface">
                {label}
              </Text>
            </PlainContainer>
          ) : (
            <RichContainer>
              <YStack gap={4}>
                <Text role="title" size="small" color="$onSurface">
                  {label}
                </Text>
                {description && (
                  <Text role="body" size="medium" color="$onSurfaceVariant">
                    {description}
                  </Text>
                )}
                {actionLabel && onAction && (
                  <XStack justifyContent="flex-end" marginTop={8}>
                    <Button variant="text" onPress={onAction}>
                      {actionLabel}
                    </Button>
                  </XStack>
                )}
              </YStack>
            </RichContainer>
          )}
        </RNView>
      )}
    </RNView>
  );
}
