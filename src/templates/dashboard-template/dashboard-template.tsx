import { ScrollView } from "react-native";
import { View, XStack } from "tamagui";
import type { DashboardTemplateProps } from "./dashboard-template.type";

export function DashboardTemplate({
  topBar,
  summaryCards,
  children,
  testID,
}: DashboardTemplateProps) {
  return (
    <View flex={1} testID={testID}>
      {topBar}

      <ScrollView style={{ flex: 1 }}>
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

        {children ? (
          <View padding="$lg">
            {children}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}
