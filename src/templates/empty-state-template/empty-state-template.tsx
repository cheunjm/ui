import { View } from "react-native";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import type { EmptyStateTemplateProps } from "./empty-state-template.type";

export function EmptyStateTemplate({
  topBar,
  icon,
  title,
  body,
  action,
  testID,
}: EmptyStateTemplateProps) {
  return (
    <View testID={testID} style={{ flex: 1, backgroundColor: "transparent" }}>
      {topBar}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 32,
          gap: 16,
        }}
      >
        {icon && <Icon name={icon} size={48} color="$onSurfaceVariant" />}
        {title && (
          <Text role="title" size="large" color="$onSurface">
            {title}
          </Text>
        )}
        {body && (
          <Text
            role="body"
            size="medium"
            color="$onSurfaceVariant"
            textAlign="center"
          >
            {body}
          </Text>
        )}
        {action}
      </View>
    </View>
  );
}
