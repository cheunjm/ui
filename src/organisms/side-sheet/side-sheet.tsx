import { Modal, Pressable } from "react-native";
import { styled, View, XStack } from "tamagui";
import { Text } from "../../atoms/text";
import { IconButton } from "../../atoms/icon-button";
import type { SideSheetProps } from "./side-sheet.type";

const Sheet = styled(View, {
  name: "SideSheet",
  position: "absolute",
  top: 0,
  bottom: 0,
  backgroundColor: "$surface",
});

const Header = styled(XStack, {
  name: "SideSheetHeader",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingVertical: 8,
  height: 56,
});

export function SideSheet({
  open,
  onClose,
  children,
  variant = "modal",
  header,
  side = "right",
  width = 256,
  testID,
}: SideSheetProps) {
  const sheetContent = (
    <Sheet
      width={width}
      {...(side === "right" ? { right: 0 } : { left: 0 })}
      testID={testID}
    >
      {header !== undefined && (
        <Header>
          <Text role="title" size="large" flex={1}>
            {header}
          </Text>
          <IconButton
            icon={"close" as any}
            onPress={onClose}
            accessibilityLabel="Close"
            testID={testID ? `${testID}-close` : undefined}
          />
        </Header>
      )}
      <View flex={1} padding={16}>
        {children}
      </View>
    </Sheet>
  );

  if (variant === "standard") {
    return sheetContent;
  }

  return (
    <Modal
      visible={open}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      testID={testID ? `${testID}-modal` : undefined}
    >
      <View flex={1}>
        <Pressable
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          onPress={onClose}
          testID={testID ? `${testID}-scrim` : undefined}
        >
          <View
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="$scrim"
            opacity={0.32}
          />
        </Pressable>
        {sheetContent}
      </View>
    </Modal>
  );
}
