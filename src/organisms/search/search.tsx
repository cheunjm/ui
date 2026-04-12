import { Pressable } from "react-native";
import { styled, View, YStack, XStack, ScrollView } from "tamagui";
import { SearchBar } from "../../molecules/search-bar";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import { Divider } from "../../atoms/divider";
import type { SearchProps, SearchSuggestion } from "./search.type";

const Container = styled(View, {
  name: "SearchContainer",
  backgroundColor: "$surface",
  flex: 1,
});

const FullScreenContainer = styled(View, {
  name: "SearchFullScreen",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  backgroundColor: "$surface",
});

const SuggestionItem = styled(XStack, {
  name: "SearchSuggestionItem",
  height: 56,
  alignItems: "center",
  paddingHorizontal: 16,
  gap: 16,
});

const SectionHeader = styled(XStack, {
  name: "SearchSectionHeader",
  height: 48,
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 16,
});

export function Search({
  value,
  onChangeText,
  onSubmit,
  onBack,
  placeholder,
  suggestions,
  recentSearches,
  onRecentSearchPress,
  onClearRecent,
  active = false,
  onActiveChange,
  variant = "bar",
  testID,
}: SearchProps) {
  const isActive = variant === "fullScreen" ? true : active;
  const hasRecent = recentSearches && recentSearches.length > 0;
  const hasSuggestions = suggestions && suggestions.length > 0;
  const Wrapper = variant === "fullScreen" ? FullScreenContainer : Container;

  return (
    <Wrapper testID={testID}>
      <View paddingHorizontal={16} paddingVertical={8}>
        <SearchBar
          value={value}
          placeholder={placeholder}
          onChangeText={(text) => {
            onChangeText?.(text);
            if (!isActive) onActiveChange?.(true);
          }}
          onSubmit={onSubmit}
          leadingIcon={isActive ? "arrow-back" : "search"}
          onTrailingIconPress={isActive ? onBack : undefined}
          trailingIcon={undefined}
          testID={testID ? `${testID}-bar` : undefined}
        />
        {isActive && (
          <Pressable
            onPress={onBack}
            testID={testID ? `${testID}-back` : undefined}
            style={{
              position: "absolute",
              left: 16,
              top: 8,
              width: 56,
              height: 56,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          />
        )}
      </View>

      {isActive && (
        <ScrollView testID={testID ? `${testID}-suggestions` : undefined}>
          {hasRecent && (
            <YStack>
              <SectionHeader>
                <Text role="title" size="small" color="$onSurfaceVariant">
                  Recent searches
                </Text>
                {onClearRecent && (
                  <Pressable
                    onPress={onClearRecent}
                    testID={testID ? `${testID}-clear-recent` : undefined}
                  >
                    <Text role="label" size="medium" color="$primary">
                      Clear all
                    </Text>
                  </Pressable>
                )}
              </SectionHeader>
              {recentSearches.map((query: string, index: number) => (
                <Pressable
                  key={`recent-${index}`}
                  onPress={() => onRecentSearchPress?.(query)}
                  testID={testID ? `${testID}-recent-${index}` : undefined}
                >
                  <SuggestionItem>
                    <Icon name="history" size={24} color="$onSurfaceVariant" />
                    <Text role="body" size="large" color="$onSurface">
                      {query}
                    </Text>
                  </SuggestionItem>
                </Pressable>
              ))}
            </YStack>
          )}

          {hasRecent && hasSuggestions && <Divider />}

          {hasSuggestions && (
            <YStack>
              {suggestions.map(
                (suggestion: SearchSuggestion, index: number) => (
                  <Pressable
                    key={`suggestion-${index}`}
                    onPress={suggestion.onPress}
                    testID={
                      testID ? `${testID}-suggestion-${index}` : undefined
                    }
                  >
                    <SuggestionItem>
                      {suggestion.icon && (
                        <Icon
                          name={suggestion.icon}
                          size={24}
                          color="$onSurfaceVariant"
                        />
                      )}
                      <Text role="body" size="large" color="$onSurface">
                        {suggestion.label}
                      </Text>
                    </SuggestionItem>
                  </Pressable>
                ),
              )}
            </YStack>
          )}
        </ScrollView>
      )}
    </Wrapper>
  );
}
