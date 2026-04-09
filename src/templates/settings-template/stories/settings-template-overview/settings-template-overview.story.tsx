import type { Meta, StoryObj } from "@storybook/react-vite";
import { SettingsTemplate } from "../../settings-template";
import { TopAppBar } from "../../../../organisms/top-app-bar";
import { Text } from "../../../../atoms/text";
import type { SettingsSection } from "../../settings-template.type";

function BasicSettings() {
  const sections: SettingsSection[] = [
    {
      title: "Account",
      items: [
        <Text key="1">Profile</Text>,
        <Text key="2">Email</Text>,
        <Text key="3">Password</Text>,
      ],
    },
    {
      title: "Preferences",
      items: [
        <Text key="1">Language</Text>,
        <Text key="2">Theme</Text>,
      ],
    },
  ];

  return (
    <SettingsTemplate
      testID="settings-basic"
      topBar={<TopAppBar title="Settings" type="small" />}
      sections={sections}
    />
  );
}

function CollapsibleSettings() {
  const sections: SettingsSection[] = [
    {
      title: "General",
      items: [
        <Text key="1">Notifications</Text>,
        <Text key="2">Privacy</Text>,
      ],
    },
    {
      title: "Advanced",
      items: [
        <Text key="1">Debug Mode</Text>,
        <Text key="2">Developer Options</Text>,
      ],
      collapsible: true,
      defaultExpanded: false,
    },
  ];

  return (
    <SettingsTemplate
      testID="settings-collapsible"
      topBar={<TopAppBar title="Settings" type="small" />}
      sections={sections}
    />
  );
}

const meta: Meta = {
  title: "templates/settings-template/overview",
  component: BasicSettings,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/placeholder",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => <BasicSettings />,
};

export const WithCollapsibleSections: Story = {
  render: () => <CollapsibleSettings />,
};
