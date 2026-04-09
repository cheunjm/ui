import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text } from "tamagui";
import { SettingsTemplate } from "../../settings-template";
import type { SettingsTemplateProps } from "../../settings-template.type";

const FIGMA_BASE = "https://www.figma.com/design/placeholder?node-id=";

const meta: Meta<SettingsTemplateProps> = {
  title: "templates/settings-template/variants",
  component: SettingsTemplate,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}0-1` },
  },
};

export default meta;
type Story = StoryObj<SettingsTemplateProps>;

export const FlatSections: Story = {
  args: {
    topBar: (
      <View backgroundColor="#E8DEF8" height={64} width="100%" alignItems="center" justifyContent="center">
        <Text>Top Bar</Text>
      </View>
    ),
    sections: [
      {
        title: "Account",
        items: [<Text key="1">Profile</Text>, <Text key="2">Security</Text>],
      },
      {
        title: "Notifications",
        items: [<Text key="1">Push</Text>, <Text key="2">Email</Text>],
      },
    ],
  },
};

export const CollapsibleSections: Story = {
  args: {
    sections: [
      {
        title: "General",
        items: [<Text key="1">Language</Text>, <Text key="2">Theme</Text>],
      },
      {
        title: "Advanced",
        items: [<Text key="1">Debug</Text>, <Text key="2">Logs</Text>],
        collapsible: true,
        defaultExpanded: true,
      },
    ],
  },
};

export const WithChildren: Story = {
  args: {
    sections: [
      {
        title: "Preferences",
        items: [<Text key="1">Dark Mode</Text>],
      },
    ],
    children: (
      <View padding={16}>
        <Text>App version 1.0.0</Text>
      </View>
    ),
  },
};
