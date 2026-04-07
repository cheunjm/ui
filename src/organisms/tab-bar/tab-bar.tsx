import { Pressable, ScrollView } from "react-native";
import { styled, View, XStack } from "tamagui";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import type { TabBarProps, TabItem } from "./tab-bar.type";

const PrimaryBar = styled(View, {
  name: "TabBarPrimary",
  flexDirection: "row",
  height: 64,
  backgroundColor: "$surface",
});

const PrimaryLabelOnlyBar = styled(View, {
  name: "TabBarPrimaryLabelOnly",
  flexDirection: "row",
  height: 48,
  backgroundColor: "$surface",
});

const SecondaryBar = styled(View, {
  name: "TabBarSecondary",
  flexDirection: "row",
  height: 48,
  backgroundColor: "$surfaceContainer",
});

const Indicator = styled(View, {
  name: "TabBarIndicator",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 3,
  backgroundColor: "$primary",
});

const PillIndicator = styled(View, {
  name: "TabBarPillIndicator",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "$secondaryContainer",
  borderRadius: 9999,
});

const TabContainer = styled(View, {
  name: "TabBarTab",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

function PrimaryTab({
  tab,
  active,
  index,
  scrollable,
  onPress,
  testID,
}: {
  tab: TabItem;
  active: boolean;
  index: number;
  scrollable?: boolean;
  onPress?: (index: number) => void;
  testID?: string;
}) {
  const iconColor = active ? "$primary" : "$onSurfaceVariant";
  const labelColor = active ? "$primary" : "$onSurfaceVariant";

  return (
    <Pressable
      onPress={() => onPress?.(index)}
      testID={tab.testID ?? (testID ? `${testID}-tab-${index}` : undefined)}
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
    >
      <TabContainer
        flex={scrollable ? undefined : 1}
        minWidth={scrollable ? 90 : undefined}
        paddingHorizontal={16}
        height="100%"
      >
        {tab.icon && <Icon name={tab.icon} size={24} color={iconColor} />}
        <Text role="label" size="medium" color={labelColor} fontWeight={active ? "700" : undefined}>
          {tab.label}
        </Text>
        {active && <Indicator />}
      </TabContainer>
    </Pressable>
  );
}

function SecondaryTab({
  tab,
  active,
  index,
  scrollable,
  onPress,
  testID,
}: {
  tab: TabItem;
  active: boolean;
  index: number;
  scrollable?: boolean;
  onPress?: (index: number) => void;
  testID?: string;
}) {
  const labelColor = active ? "$onSurface" : "$onSurfaceVariant";

  return (
    <Pressable
      onPress={() => onPress?.(index)}
      testID={tab.testID ?? (testID ? `${testID}-tab-${index}` : undefined)}
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
    >
      <TabContainer
        flex={scrollable ? undefined : 1}
        minWidth={scrollable ? 90 : undefined}
        paddingHorizontal={16}
        height="100%"
      >
        {active && <PillIndicator />}
        <Text role="label" size="medium" color={labelColor} fontWeight={active ? "700" : undefined}>
          {tab.label}
        </Text>
      </TabContainer>
    </Pressable>
  );
}

export function TabBar({
  tabs,
  activeIndex = 0,
  onTabPress,
  variant = "primary",
  scrollable = false,
  testID,
}: TabBarProps) {
  const hasIcons = variant === "primary" && tabs.some((t) => t.icon);
  const Bar =
    variant === "secondary"
      ? SecondaryBar
      : hasIcons
        ? PrimaryBar
        : PrimaryLabelOnlyBar;

  const content = tabs.map((tab: TabItem, index: number) => {
    const active = index === activeIndex;

    if (variant === "secondary") {
      return (
        <SecondaryTab
          key={index}
          tab={tab}
          active={active}
          index={index}
          scrollable={scrollable}
          onPress={onTabPress}
          testID={testID}
        />
      );
    }

    return (
      <PrimaryTab
        key={index}
        tab={tab}
        active={active}
        index={index}
        scrollable={scrollable}
        onPress={onTabPress}
        testID={testID}
      />
    );
  });

  if (scrollable) {
    return (
      <Bar testID={testID}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <XStack height="100%">{content}</XStack>
        </ScrollView>
      </Bar>
    );
  }

  return <Bar testID={testID}>{content}</Bar>;
}
