import { ScrollView, StyleSheet } from "react-native";
import { View } from "tamagui";
import { spacing } from "../../tokens/generated/spacing";
import type { ListTemplateProps } from "./list-template.type";

export function ListTemplate({
  topBar,
  headerContent,
  children,
  bottomBar,
  fab,
  fabBottomOffset = spacing.lg,
  refreshControl,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
  testID,
}: ListTemplateProps) {
  return (
    <View flex={1} flexDirection="column" testID={testID}>
      {topBar}
      {headerContent}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={contentContainerStyle}
        refreshControl={refreshControl}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        testID={testID ? `${testID}-scroll` : undefined}
      >
        {children}
      </ScrollView>
      {bottomBar}
      {fab ? (
        <View style={[styles.fabContainer, { bottom: fabBottomOffset }]}>
          {fab}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: "absolute",
    bottom: spacing.lg,
    right: spacing.lg,
    alignItems: "center",
  },
});
