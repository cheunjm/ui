import { ScrollView, StyleSheet } from "react-native";
import { View } from "tamagui";
import type { ListTemplateProps } from "./list-template.type";

export function ListTemplate({
  topBar,
  headerContent,
  children,
  bottomBar,
  fab,
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
