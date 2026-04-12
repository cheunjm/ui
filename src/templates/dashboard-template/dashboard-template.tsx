import { ScrollView, StyleSheet } from "react-native";
import { View, XStack } from "tamagui";
import type { DashboardTemplateProps } from "./dashboard-template.type";

export function DashboardTemplate({
  topBar,
  summaryCards,
  children,
  fab,
  refreshControl,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
  testID,
}: DashboardTemplateProps) {
  return (
    <View flex={1} testID={testID}>
      {topBar}

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={contentContainerStyle}
        refreshControl={refreshControl}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      >
        {summaryCards && summaryCards.length > 0 ? (
          <XStack
            flexWrap="wrap"
            testID={testID ? `${testID}-grid` : undefined}
          >
            {summaryCards.map((card, index) => (
              <View
                key={index}
                padding="$sm"
                width="100%"
                $md={{ width: "50%" }}
                $lg={{ width: "33.33%" }}
              >
                {card}
              </View>
            ))}
          </XStack>
        ) : null}

        {children ? <View padding="$lg">{children}</View> : null}
      </ScrollView>

      {fab ? <View style={styles.fabContainer}>{fab}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
    alignItems: "center",
  },
});
