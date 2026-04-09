import { useEffect } from "react";
import { Modal, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { styled, View, YStack } from "tamagui";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import { Badge } from "../../atoms/badge";
import type { NavigationDrawerProps } from "./navigation-drawer.type";

const DRAWER_WIDTH = 360;

const DrawerContainer = styled(View, {
  name: "NavigationDrawer",
  width: DRAWER_WIDTH,
  height: "100%",
  backgroundColor: "$surfaceContainerLow",
  paddingVertical: 12,
});

const ActiveIndicator = styled(View, {
  name: "DrawerActiveIndicator",
  borderRadius: 28,
  height: 56,
  paddingHorizontal: 16,
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  marginHorizontal: 12,
});

export function NavigationDrawer({
  open,
  onClose,
  sections,
  activeKey,
  onDestinationPress,
  header,
  testID,
}: NavigationDrawerProps) {
  const translateX = useSharedValue(-DRAWER_WIDTH);

  useEffect(() => {
    translateX.value = withTiming(open ? 0 : -DRAWER_WIDTH, {
      duration: 250,
    });
  }, [open, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Modal
      visible={open}
      transparent
      animationType="none"
      onRequestClose={onClose}
      testID={testID}
    >
      <View flex={1} flexDirection="row">
        <Animated.View style={animatedStyle}>
          <DrawerContainer>
            {header && (
              <View paddingHorizontal={16} paddingBottom={8}>
                {header}
              </View>
            )}
            <YStack>
              {sections.map((section, sIdx) => (
                <YStack key={sIdx}>
                  {section.header && (
                    <Text
                      role="title"
                      size="small"
                      color="$onSurfaceVariant"
                      paddingLeft={16}
                      paddingTop={16}
                      paddingBottom={4}
                    >
                      {section.header}
                    </Text>
                  )}
                  {section.destinations.map((dest) => {
                    const isActive = dest.key === activeKey;
                    return (
                      <Pressable
                        key={dest.key}
                        onPress={() => onDestinationPress?.(dest.key)}
                        testID={`${testID}-dest-${dest.key}`}
                      >
                        <ActiveIndicator
                          backgroundColor={
                            isActive ? "$secondaryContainer" : "transparent"
                          }
                        >
                          <Icon
                            name={
                              isActive && dest.activeIcon
                                ? dest.activeIcon
                                : dest.icon
                            }
                            size={24}
                            color={
                              isActive
                                ? "$onSecondaryContainer"
                                : "$onSurfaceVariant"
                            }
                          />
                          <Text
                            role="label"
                            size="large"
                            color={
                              isActive
                                ? "$onSecondaryContainer"
                                : "$onSurfaceVariant"
                            }
                            flex={1}
                          >
                            {dest.label}
                          </Text>
                          {dest.badgeCount !== undefined &&
                            dest.badgeCount > 0 && (
                              <Badge size="large" count={dest.badgeCount} />
                            )}
                        </ActiveIndicator>
                      </Pressable>
                    );
                  })}
                </YStack>
              ))}
            </YStack>
          </DrawerContainer>
        </Animated.View>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
      </View>
    </Modal>
  );
}
