import { useEffect } from "react";
import { styled, View, XStack, YStack } from "tamagui";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Button } from "../../atoms/button";
import { Divider } from "../../atoms/divider";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import type { BannerProps } from "./banner.type";

const Container = styled(View, {
  name: "BannerContainer",
  backgroundColor: "$surfaceContainerLow",
  overflow: "hidden",
});

const ContentRow = styled(XStack, {
  name: "BannerContentRow",
  paddingHorizontal: "$lg",
  paddingVertical: "$lg",
  gap: "$lg",
  alignItems: "flex-start",
});

const Actions = styled(XStack, {
  name: "BannerActions",
  justifyContent: "flex-end",
  paddingHorizontal: "$sm",
  paddingBottom: "$sm",
  gap: "$sm",
});

export function Banner({
  message,
  supportingText,
  icon,
  actions,
  visible = true,
  onDismiss,
  testID,
}: BannerProps) {
  const progress = useSharedValue(visible ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(visible ? 1 : 0, { duration: 250 });
  }, [visible, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    maxHeight: progress.value * 200,
    opacity: progress.value,
  }));

  return (
    <Animated.View style={animatedStyle} testID={testID}>
      <Container accessibilityRole="alert" accessibilityLiveRegion="polite">
        <ContentRow>
          {icon ? (
            <Icon name={icon} size={24} color="$onSurface" testID={testID ? `${testID}-icon` : undefined} />
          ) : null}
          <YStack flex={1}>
            <Text role="body" size="medium" color="$onSurface">
              {message}
            </Text>
            {supportingText ? (
              <Text role="body" size="small" color="$onSurfaceVariant">
                {supportingText}
              </Text>
            ) : null}
          </YStack>
        </ContentRow>
        {actions && actions.length > 0 ? (
          <Actions>
            {actions.slice(0, 2).map((action) => (
              <Button
                key={action.label}
                variant="text"
                onPress={action.onPress}
              >
                {action.label}
              </Button>
            ))}
          </Actions>
        ) : null}
        <Divider />
      </Container>
    </Animated.View>
  );
}
