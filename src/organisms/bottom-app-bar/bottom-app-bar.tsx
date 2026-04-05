import { styled, View, XStack } from "tamagui";
import { IconButton } from "../../atoms/icon-button";
import { FAB } from "../../atoms/fab";
import type { BottomAppBarProps } from "./bottom-app-bar.type";

const Bar = styled(View, {
  name: "BottomAppBar",
  height: 80,
  backgroundColor: "$surfaceContainer",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,
});

export function BottomAppBar({ actions, fab, testID }: BottomAppBarProps) {
  return (
    <Bar testID={testID}>
      {fab && (
        <FAB
          icon={fab.icon as any}
          onPress={fab.onPress}
          accessibilityLabel={fab.accessibilityLabel}
          size="regular"
        />
      )}
      <View flex={1} />
      {actions && (
        <XStack gap={8}>
          {actions.slice(0, 4).map((action, index) => (
            <IconButton
              key={index}
              icon={action.icon as any}
              onPress={action.onPress}
              accessibilityLabel={action.accessibilityLabel}
              testID={action.testID}
            />
          ))}
        </XStack>
      )}
    </Bar>
  );
}
