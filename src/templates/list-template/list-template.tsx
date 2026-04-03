import { ScrollView } from "react-native";
import { View } from "tamagui";
import type { ListTemplateProps } from "./list-template.type";

export function ListTemplate({
  topBar,
  headerContent,
  children,
  bottomBar,
  testID,
}: ListTemplateProps) {
  return (
    <View flex={1} flexDirection="column" testID={testID}>
      {topBar}
      {headerContent}
      <ScrollView
        style={{ flex: 1 }}
        testID={testID ? `${testID}-scroll` : undefined}
      >
        {children}
      </ScrollView>
      {bottomBar}
    </View>
  );
}
