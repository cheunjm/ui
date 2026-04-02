import { Modal, Pressable, ScrollView } from "react-native";
import { styled, View } from "tamagui";

import type { BottomSheetProps } from "./bottom-sheet.type";

const SheetContainer = styled(View, {
  name: "BottomSheetContainer",
  backgroundColor: "$surfaceContainerLow",
  borderTopLeftRadius: "$2xl",
  borderTopRightRadius: "$2xl",
  paddingHorizontal: "$lg",
  paddingBottom: "$lg",
  maxHeight: "80%",
} as const);

const DragHandle = styled(View, {
  name: "BottomSheetDragHandle",
  width: 32,
  height: 4,
  backgroundColor: "$onSurfaceVariant",
  opacity: 0.4,
  borderRadius: "$full",
  alignSelf: "center",
  marginTop: 22,
  marginBottom: "$lg",
} as const);

const Scrim = styled(View, {
  name: "BottomSheetScrim",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "$scrim",
  opacity: 0.32,
} as const);

export function BottomSheet({
  visible,
  variant = "modal",
  onDismiss,
  showDragHandle = true,
  children,
  testID,
}: BottomSheetProps) {
  const sheetContent = (
    <SheetContainer testID={testID}>
      {showDragHandle && <DragHandle testID={testID ? `${testID}-handle` : undefined} />}
      <ScrollView>{children}</ScrollView>
    </SheetContainer>
  );

  if (variant === "standard") {
    return sheetContent;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onDismiss}
      testID={testID ? `${testID}-modal` : undefined}
    >
      <View flex={1} justifyContent="flex-end">
        <Pressable
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          onPress={onDismiss}
          testID={testID ? `${testID}-scrim` : undefined}
        >
          <Scrim />
        </Pressable>
        {sheetContent}
      </View>
    </Modal>
  );
}
