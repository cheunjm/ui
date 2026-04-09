import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text } from "tamagui";
import { DashboardTemplate } from "../../dashboard-template";
import type { DashboardTemplateProps } from "../../dashboard-template.type";

const FIGMA_BASE = "https://www.figma.com/design/placeholder?node-id=";

function Card({ label }: { label: string }) {
  return (
    <View backgroundColor="#F7F2FA" borderRadius={12} padding={16} minHeight={80}>
      <Text fontSize={14} color="#49454F">
        {label}
      </Text>
    </View>
  );
}

const meta: Meta<DashboardTemplateProps> = {
  title: "templates/dashboard-template/variants",
  component: DashboardTemplate,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}0-1` },
  },
};

export default meta;
type Story = StoryObj<DashboardTemplateProps>;

export const WithCards: Story = {
  args: {
    topBar: (
      <View backgroundColor="#E8DEF8" height={64} width="100%" alignItems="center" justifyContent="center">
        <Text>Top Bar</Text>
      </View>
    ),
    summaryCards: [
      <Card key="1" label="Metric A" />,
      <Card key="2" label="Metric B" />,
      <Card key="3" label="Metric C" />,
      <Card key="4" label="Metric D" />,
    ],
    children: <Text>Content area</Text>,
  },
};

export const ContentOnly: Story = {
  args: {
    children: (
      <View>
        <Text>Dashboard with no cards</Text>
      </View>
    ),
  },
};
