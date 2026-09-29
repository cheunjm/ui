import { isValidElement } from "react";
import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Avatar } from "../../atoms/avatar";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import { Divider } from "../../atoms/divider";
import { DISABLED_OPACITY } from "../../tokens/custom/interaction";
import type { ListItemProps } from "./list-item.type";

const stylesheet = StyleSheet.create((theme) => ({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  leading: {
    marginRight: theme.spacing.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  trailing: {
    marginLeft: theme.spacing.lg,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export function ListItem({
  headline,
  supportingText,
  overlineText,
  leadingContent,
  leadingAvatar,
  trailingContent,
  trailingSupportingText,
  trailingElement,
  showDivider = false,
  onPress,
  disabled = false,
  accessibilityLabel,
  testID,
}: ListItemProps) {
  const hasLeading = leadingContent != null || leadingAvatar != null;
  const hasTrailing =
    trailingContent != null ||
    trailingSupportingText != null ||
    trailingElement != null;

  const minHeight = supportingText ? 72 : 56;

  const renderLeading = () => {
    if (!hasLeading) return null;
    if (leadingAvatar != null) {
      const avatarProps =
        "uri" in leadingAvatar
          ? { source: { uri: leadingAvatar.uri } }
          : { name: leadingAvatar.name };
      return (
        <View style={stylesheet.leading}>
          <Avatar size="medium" {...avatarProps} />
        </View>
      );
    }
    if (typeof leadingContent === "string") {
      return (
        <View style={stylesheet.leading}>
          <Icon name={leadingContent} size={24} color="$onSurfaceVariant" />
        </View>
      );
    }
    if (isValidElement(leadingContent)) {
      return <View style={stylesheet.leading}>{leadingContent}</View>;
    }
    return null;
  };

  const renderTrailing = () => {
    if (!hasTrailing) return null;
    return (
      <View style={stylesheet.trailing}>
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
        {trailingElement != null ? (
          <Pressable onPress={(e) => e.stopPropagation()}>
            {trailingElement}
          </Pressable>
        ) : null}
      </View>
    );
  };

  return (
    <View testID={testID}>
      <Pressable
        onPress={disabled ? undefined : onPress}
        disabled={disabled}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={onPress ? "button" : undefined}
        accessibilityState={disabled ? { disabled: true } : undefined}
        style={{ opacity: disabled ? DISABLED_OPACITY : 1 }}
      >
        <View style={[stylesheet.row, { minHeight }]}>
          {renderLeading()}
          <View style={stylesheet.content}>
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
          </View>
          {renderTrailing()}
        </View>
      </Pressable>
      {showDivider ? <Divider /> : null}
    </View>
  );
}
