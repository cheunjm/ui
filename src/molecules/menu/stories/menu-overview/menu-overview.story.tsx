import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "tamagui";
import { Menu } from "../../menu";
import { Button } from "../../../../atoms/button";

function Overview() {
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
}

const meta: Meta = {
  title: "molecules/menu/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/C0eafJVCn9JsDxhxw0NjFw/molecules?node-id=4-7",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
