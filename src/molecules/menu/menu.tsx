import { Modal, Pressable } from "react-native";
import { styled, View, YStack } from "tamagui";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import type { MenuProps } from "./menu.type";

const Container = styled(View, {
  name: "Menu",
  backgroundColor: "$surfaceContainer",
  borderRadius: 4,
  minWidth: 112,
  maxWidth: 280,
  paddingVertical: 8,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 6,
} as const);

export function Menu({ visible, onDismiss, items, testID }: MenuProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onDismiss}
    >
      <Pressable
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onPress={onDismiss}
      >
        <Pressable onPress={(e) => e.stopPropagation()}>
          <Container testID={testID} accessibilityRole="menu">
            <YStack>
              {items.map((item) => (
                <Pressable
                  key={item.key}
                  onPress={() => {
                    if (!item.disabled) {
                      item.onPress();
                      onDismiss();
                    }
                  }}
                  style={({ pressed }) => ({
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    opacity: item.disabled ? 0.38 : pressed ? 0.7 : 1,
                  })}
                  accessibilityRole="menuitem"
                  accessibilityState={item.disabled ? { disabled: true } : undefined}
                  testID={`${testID}-item-${item.key}`}
                >
                  {item.leadingIcon && (
                    <View marginRight={12}>
                      <Icon name={item.leadingIcon} size={24} color="$onSurface" />
                    </View>
                  )}
                  <Text role="label" size="large" color="$onSurface" flex={1}>
                    {item.label}
                  </Text>
                  {item.trailingText && (
                    <Text role="label" size="small" color="$onSurfaceVariant" marginLeft={12}>
                      {item.trailingText}
                    </Text>
                  )}
                </Pressable>
              ))}
            </YStack>
          </Container>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
