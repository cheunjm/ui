import { Pressable } from "react-native";
import { styled, View } from "tamagui";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import { Badge } from "../../atoms/badge";
import type { NavigationBarProps, NavigationDestination } from "./navigation-bar.type";

const Bar = styled(View, {
  name: "NavigationBar",
  flexDirection: "row",
  height: 80,
  backgroundColor: "$surfaceContainer",
  alignItems: "center",
});

const Destination = styled(View, {
  name: "NavigationBarDestination",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
});

const ActiveIndicator = styled(View, {
  name: "NavigationBarIndicator",
  width: 64,
  height: 32,
  borderRadius: 16,
  backgroundColor: "$secondaryContainer",
  justifyContent: "center",
  alignItems: "center",
});

const IconContainer = styled(View, {
  name: "NavigationBarIconContainer",
  width: 64,
  height: 32,
  justifyContent: "center",
  alignItems: "center",
});

const BadgeAnchor = styled(View, {
  name: "NavigationBarBadgeAnchor",
  position: "absolute",
  top: 2,
  right: 14,
  zIndex: 1,
});

export function NavigationBar({
  destinations,
  activeIndex = 0,
  onDestinationPress,
  testID,
}: NavigationBarProps) {
  return (
    <Bar testID={testID}>
      {destinations.map((dest: NavigationDestination, index: number) => {
        const active = index === activeIndex;
        const iconName = active && dest.activeIcon ? dest.activeIcon : dest.icon;
        const iconColor = active ? "$onSecondaryContainer" : "$onSurfaceVariant";
        const labelColor = active ? "$onSurface" : "$onSurfaceVariant";
        const Wrapper = active ? ActiveIndicator : IconContainer;

        return (
          <Pressable
            key={index}
            onPress={() => onDestinationPress?.(index)}
            testID={testID ? `${testID}-dest-${index}` : undefined}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
          >
            <Destination>
              <View position="relative">
                {dest.badge !== undefined && (
                  <BadgeAnchor>
                    <Badge size="large" count={dest.badge} />
                  </BadgeAnchor>
                )}
                <Wrapper>
                  <Icon name={iconName} size={24} color={iconColor} />
                </Wrapper>
              </View>
              <Text
                role="label"
                size="medium"
                color={labelColor}
                fontWeight={active ? "700" : undefined}
              >
                {dest.label}
              </Text>
            </Destination>
          </Pressable>
        );
      })}
    </Bar>
  );
}
