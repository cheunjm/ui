import { Modal, Pressable, ScrollView } from "react-native";
import { styled, View, XStack, YStack } from "tamagui";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";
import type { DialogProps } from "./dialog.type";

const Scrim = styled(View, {
  name: "DialogScrim",
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.32)",
  justifyContent: "center",
  alignItems: "center",
});

const Container = styled(View, {
  name: "Dialog",
  backgroundColor: "$surfaceContainerHigh",
  borderRadius: 28,
  minWidth: 280,
  maxWidth: 560,
  padding: 24,
});

export function Dialog({
  visible,
  icon,
  title,
  children,
  confirmLabel = "OK",
  dismissLabel = "Cancel",
  onConfirm,
  onDismiss,
  scrollable = false,
  testID,
}: DialogProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onDismiss}
      testID={testID ? `${testID}-modal` : undefined}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={onDismiss}
        testID={testID ? `${testID}-scrim` : undefined}
      >
        <Scrim>
          <Pressable onPress={(e) => e?.stopPropagation()}>
            <Container testID={testID}>
              <YStack gap={16}>
                {icon && (
                  <View alignItems="center">
                    <Icon
                      name={icon}
                      size={24}
                      color="$secondary"
                      testID={testID ? `${testID}-icon` : undefined}
                    />
                  </View>
                )}

                {title && (
                  <Text
                    role="headline"
                    size="small"
                    color="$onSurface"
                    testID={testID ? `${testID}-title` : undefined}
                  >
                    {title}
                  </Text>
                )}

                {children &&
                  (scrollable ? (
                    <ScrollView
                      style={{ maxHeight: 300 }}
                      testID={testID ? `${testID}-body` : undefined}
                    >
                      <Text role="body" size="medium" color="$onSurfaceVariant">
                        {children}
                      </Text>
                    </ScrollView>
                  ) : (
                    <Text
                      role="body"
                      size="medium"
                      color="$onSurfaceVariant"
                      testID={testID ? `${testID}-body` : undefined}
                    >
                      {children}
                    </Text>
                  ))}

                <XStack justifyContent="flex-end" gap={8}>
                  {onDismiss && (
                    <Button
                      variant="text"
                      onPress={onDismiss}
                      testID={testID ? `${testID}-dismiss` : undefined}
                    >
                      {dismissLabel}
                    </Button>
                  )}
                  {onConfirm && (
                    <Button
                      variant="text"
                      onPress={onConfirm}
                      testID={testID ? `${testID}-confirm` : undefined}
                    >
                      {confirmLabel}
                    </Button>
                  )}
                </XStack>
              </YStack>
            </Container>
          </Pressable>
        </Scrim>
      </Pressable>
    </Modal>
  );
}
