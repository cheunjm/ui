import { styled, XStack, YStack } from "tamagui";
import { IconButton } from "../../atoms/icon-button";
import { Text } from "../../atoms/text";
import type { TopAppBarProps } from "./top-app-bar.type";

const heightMap = {
  "center-aligned": 64,
  small: 64,
  medium: 112,
  large: 152,
} as const;

const StyledContainer = styled(YStack, {
  name: "TopAppBar",
  width: "100%",
  justifyContent: "flex-end",
  paddingHorizontal: 4,

  variants: {
    elevated: {
      true: {
        backgroundColor: "$surfaceContainer",
      },
      false: {
        backgroundColor: "$surface",
      },
    },
  } as const,

  defaultVariants: {
    elevated: false,
  },
} as const);

const TopRow = styled(XStack, {
  name: "TopAppBarRow",
  height: 64,
  alignItems: "center",
  paddingHorizontal: 4,
  gap: 4,
});

export function TopAppBar({
  type = "small",
  title,
  navigationIcon,
  onNavigationPress,
  actions = [],
  elevated = false,
  ...props
}: TopAppBarProps) {
  const isCenterAligned = type === "center-aligned";
  const isMedium = type === "medium";
  const isLarge = type === "large";
  const displayedActions = actions.slice(0, 3);

  return (
    <StyledContainer
      height={heightMap[type]}
      elevated={elevated as any}
      {...props}
    >
      <TopRow>
        {navigationIcon ? (
          <IconButton
            icon={navigationIcon}
            onPress={onNavigationPress}
            testID="top-app-bar-nav"
          />
        ) : null}

        {!isMedium && !isLarge ? (
          <Text
            role="title"
            size="large"
            flex={1}
            numberOfLines={1}
            textAlign={isCenterAligned ? "center" : "left"}
            paddingHorizontal={isCenterAligned ? 0 : 12}
            testID="top-app-bar-title"
          >
            {title}
          </Text>
        ) : (
          <XStack flex={1} />
        )}

        {displayedActions.map((action, index) => (
          <IconButton
            key={index}
            icon={action.icon}
            onPress={action.onPress}
            accessibilityLabel={action.accessibilityLabel}
            testID={`top-app-bar-action-${index}`}
          />
        ))}
      </TopRow>

      {isMedium ? (
        <YStack paddingHorizontal={16} paddingBottom={20}>
          <Text
            role="headline"
            size="small"
            numberOfLines={1}
            testID="top-app-bar-title"
          >
            {title}
          </Text>
        </YStack>
      ) : null}

      {isLarge ? (
        <YStack paddingHorizontal={16} paddingBottom={28}>
          <Text
            role="headline"
            size="medium"
            numberOfLines={1}
            testID="top-app-bar-title"
          >
            {title}
          </Text>
        </YStack>
      ) : null}
    </StyledContainer>
  );
}
