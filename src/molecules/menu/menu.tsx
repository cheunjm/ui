import { useState } from "react";
import { Modal, Pressable, View as RNView } from "react-native";
import { styled, View, YStack } from "tamagui";
import { Divider } from "../../atoms/divider";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import type { MenuDivider, MenuEntry, MenuProps } from "./menu.type";

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

function isDivider(entry: MenuEntry): entry is MenuDivider {
  return (entry as MenuDivider).type === "divider";
}

export function Menu({
  visible,
  onDismiss,
  items,
  accessibilityHint,
  testID,
}: MenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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
          <RNView
            testID={testID}
            accessible
            accessibilityRole="menu"
            accessibilityHint={accessibilityHint}
          >
            <Container>
              <YStack>
                {items.map((item) => {
                  if (isDivider(item)) {
                    return <Divider key={item.key} />;
                  }

                  const hasSubmenu = Boolean(item.submenu?.length);

                  return (
                    <View key={item.key}>
                      <Pressable
                        onPress={() => {
                          if (!item.disabled) {
                            if (hasSubmenu) {
                              setOpenSubmenu(
                                openSubmenu === item.key ? null : item.key,
                              );
                            } else {
                              item.onPress();
                              onDismiss();
                            }
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
                        accessibilityState={
                          item.disabled ? { disabled: true } : undefined
                        }
                        testID={`${testID}-item-${item.key}`}
                      >
                        {item.leadingIcon && (
                          <View marginRight={12}>
                            <Icon
                              name={item.leadingIcon}
                              size={24}
                              color="$onSurface"
                            />
                          </View>
                        )}
                        <Text
                          role="label"
                          size="large"
                          color="$onSurface"
                          flex={1}
                        >
                          {item.label}
                        </Text>
                        {hasSubmenu ? (
                          <View marginLeft={12}>
                            <Icon
                              name="chevron_right"
                              size={24}
                              color="$onSurfaceVariant"
                            />
                          </View>
                        ) : (
                          item.trailingText && (
                            <Text
                              role="label"
                              size="small"
                              color="$onSurfaceVariant"
                              marginLeft={12}
                            >
                              {item.trailingText}
                            </Text>
                          )
                        )}
                      </Pressable>
                      {item.submenu && openSubmenu === item.key && (
                        <View position="absolute" left="100%" top={0} zIndex={1}>
                          <Container>
                            <YStack>
                              {item.submenu.map((subItem) => (
                                <Pressable
                                  key={subItem.key}
                                  onPress={() => {
                                    subItem.onPress();
                                    onDismiss();
                                  }}
                                  style={({ pressed }) => ({
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingHorizontal: 12,
                                    paddingVertical: 12,
                                    opacity: pressed ? 0.7 : 1,
                                  })}
                                  accessibilityRole="menuitem"
                                  testID={`${testID}-item-${item.key}-${subItem.key}`}
                                >
                                  <Text
                                    role="label"
                                    size="large"
                                    color="$onSurface"
                                  >
                                    {subItem.label}
                                  </Text>
                                </Pressable>
                              ))}
                            </YStack>
                          </Container>
                        </View>
                      )}
                    </View>
                  );
                })}
              </YStack>
            </Container>
          </RNView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
