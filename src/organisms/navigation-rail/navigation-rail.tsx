import { Pressable } from "react-native";
import { styled, View, YStack } from "tamagui";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import { Badge } from "../../atoms/badge";
import { FAB } from "../../atoms/fab";
import type { NavigationRailProps, RailDestination } from "./navigation-rail.type";

const Rail = styled(YStack, {
  name: "NavigationRail",
  width: 80,
  backgroundColor: "$surfaceContainer",
  paddingVertical: 12,
  alignItems: "center",
  gap: 0,
});

const Destination = styled(View, {
  name: "NavigationRailDestination",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
});

const ActiveIndicator = styled(View, {
  name: "NavigationRailIndicator",
  width: 56,
  height: 32,
  borderRadius: 16,
  backgroundColor: "$secondaryContainer",
  justifyContent: "center",
  alignItems: "center",
});

const IconContainer = styled(View, {
  name: "NavigationRailIconContainer",
  width: 56,
  height: 32,
  justifyContent: "center",
  alignItems: "center",
});

const BadgeAnchor = styled(View, {
  name: "NavigationRailBadgeAnchor",
  position: "absolute",
  top: 2,
  right: 10,
  zIndex: 1,
});

export function NavigationRail({
  destinations,
  activeIndex = 0,
  onDestinationPress,
  fab,
  testID,
}: NavigationRailProps) {
  return (
    <Rail testID={testID}>
      {fab && (
        <View paddingBottom={8}>
          <FAB
            icon={fab.icon}
            size="small"
            onPress={fab.onPress}
            accessibilityLabel={fab.accessibilityLabel}
            testID={testID ? `${testID}-fab` : undefined}
          />
        </View>
      )}
      {destinations.map((dest: RailDestination, index: number) => {
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
                size="small"
                color={labelColor}
                fontWeight={active ? "700" : undefined}
              >
                {dest.label}
              </Text>
            </Destination>
          </Pressable>
        );
      })}
    </Rail>
  );
}
