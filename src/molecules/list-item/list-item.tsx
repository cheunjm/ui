import { isValidElement } from "react";
import { Pressable } from "react-native";
import { styled, View } from "tamagui";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import { Divider } from "../../atoms/divider";
import type { ListItemProps } from "./list-item.type";

const Row = styled(View, {
  name: "ListItemRow",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: "$lg",
  paddingVertical: "$sm",
});

const Content = styled(View, {
  name: "ListItemContent",
  flex: 1,
  justifyContent: "center",
});

const LeadingContainer = styled(View, {
  name: "ListItemLeading",
  marginRight: "$lg",
  justifyContent: "center",
  alignItems: "center",
});

const TrailingContainer = styled(View, {
  name: "ListItemTrailing",
  marginLeft: "$lg",
  justifyContent: "center",
  alignItems: "center",
});

export function ListItem({
  headline,
  supportingText,
  overlineText,
  leadingContent,
  trailingContent,
  trailingSupportingText,
  showDivider = false,
  onPress,
  disabled = false,
  accessibilityLabel,
  testID,
}: ListItemProps) {
  const hasLeading = leadingContent != null;
  const hasTrailing =
    trailingContent != null || trailingSupportingText != null;

  const minHeight = supportingText ? 72 : 56;

  const renderLeading = () => {
    if (!hasLeading) return null;
    if (typeof leadingContent === "string") {
      return (
        <LeadingContainer>
          <Icon name={leadingContent} size={24} color="$onSurfaceVariant" />
        </LeadingContainer>
      );
    }
    if (isValidElement(leadingContent)) {
      return <LeadingContainer>{leadingContent}</LeadingContainer>;
    }
    return null;
  };

  const renderTrailing = () => {
    if (!hasTrailing) return null;
    return (
      <TrailingContainer>
        {typeof trailingContent === "string" ? (
          <Text role="label" size="small" color="$onSurfaceVariant">
            {trailingContent}
          </Text>
        ) : trailingContent != null && isValidElement(trailingContent) ? (
          trailingContent
        ) : null}
        {trailingSupportingText ? (
          <Text role="body" size="small" color="$onSurfaceVariant">
            {trailingSupportingText}
          </Text>
        ) : null}
      </TrailingContainer>
    );
  };

  return (
    <View testID={testID}>
      <Pressable
        onPress={disabled ? undefined : onPress}
        disabled={disabled}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={{ opacity: disabled ? 0.38 : 1 }}
      >
        <Row minHeight={minHeight}>
          {renderLeading()}
          <Content>
            {overlineText ? (
              <Text
                role="label"
                size="small"
                color="$onSurfaceVariant"
                textTransform="uppercase"
              >
                {overlineText}
              </Text>
            ) : null}
            <Text role="body" size="large" color="$onSurface">
              {headline}
            </Text>
            {supportingText ? (
              <Text
                role="body"
                size="medium"
                color="$onSurfaceVariant"
                numberOfLines={2}
              >
                {supportingText}
              </Text>
            ) : null}
          </Content>
          {renderTrailing()}
        </Row>
      </Pressable>
      {showDivider ? <Divider /> : null}
    </View>
  );
}
