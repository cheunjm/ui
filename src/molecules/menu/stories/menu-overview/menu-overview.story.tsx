import React, { useState } from "react";
import { View } from "tamagui";
import { Menu } from "../../menu";
import { Button } from "../../../atoms/button";

export const MenuOverview = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View padding={32} alignItems="center">
      <Button variant="filled" onPress={() => setVisible(true)}>
        Open Menu
      </Button>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        testID="menu"
        items={[
          { key: "refresh", label: "Refresh", leadingIcon: "refresh", onPress: () => {} },
          { key: "settings", label: "Settings", leadingIcon: "settings", onPress: () => {} },
          { key: "share", label: "Share", leadingIcon: "share", trailingText: "⌘S", onPress: () => {} },
          { key: "delete", label: "Delete", leadingIcon: "delete", onPress: () => {}, disabled: true },
        ]}
      />
    </View>
  );
};

MenuOverview.storyName = "Menu/Overview";
