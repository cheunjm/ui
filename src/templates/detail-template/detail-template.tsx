import { ScrollView } from "react-native";
import { View } from "tamagui";
import type { DetailTemplateProps } from "./detail-template.type";

export function DetailTemplate({
  topBar,
  children,
  testID,
}: DetailTemplateProps) {
  return (
    <View flex={1} testID={testID}>
      {topBar}
      <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
    </View>
  );
}
