import { KeyboardAvoidingView, Modal, Platform, ScrollView } from "react-native";
import { styled, View, XStack } from "tamagui";
import { IconButton } from "../../atoms/icon-button";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";
import type { FullScreenDialogProps } from "./full-screen-dialog.type";

const Container = styled(View, {
  name: "FullScreenDialog",
  flex: 1,
  backgroundColor: "$surface",
});

const Header = styled(XStack, {
  name: "FullScreenDialogHeader",
  height: 56,
  alignItems: "center",
  paddingHorizontal: 4,
  backgroundColor: "$surface",
  borderBottomWidth: 1,
  borderBottomColor: "$outlineVariant",
});

export function FullScreenDialog({
  visible,
  title,
  actionLabel,
  onAction,
  onClose,
  actionDisabled = false,
  children,
  keyboardAvoiding = false,
  testID,
}: FullScreenDialogProps) {
  const body = (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 24 }}
      keyboardShouldPersistTaps="handled"
      testID={testID ? `${testID}-body` : undefined}
    >
      {children}
    </ScrollView>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      testID={testID ? `${testID}-modal` : undefined}
    >
      <Container testID={testID}>
        <Header testID={testID ? `${testID}-header` : undefined}>
          <IconButton
            variant="standard"
            icon="close"
            onPress={onClose}
            accessibilityHint="Close dialog"
            testID={testID ? `${testID}-close` : undefined}
          />
          <View flex={1} paddingHorizontal={12}>
            <Text
              role="title"
              size="large"
              color="$onSurface"
              numberOfLines={1}
              testID={testID ? `${testID}-title` : undefined}
            >
              {title}
            </Text>
          </View>
          <Button
            variant="text"
            onPress={actionDisabled ? undefined : onAction}
            disabled={actionDisabled}
            testID={testID ? `${testID}-action` : undefined}
          >
            {actionLabel}
          </Button>
        </Header>
        {keyboardAvoiding ? (
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            {body}
          </KeyboardAvoidingView>
        ) : (
          body
        )}
      </Container>
    </Modal>
  );
}
