import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text, YStack } from "tamagui";
import { DashboardTemplate } from "../../dashboard-template";
import { TopAppBar } from "../../../../organisms/top-app-bar";

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <View
      backgroundColor="#F7F2FA"
      borderRadius={12}
      padding={16}
      minHeight={100}
      justifyContent="center"
    >
      <Text fontSize={14} color="#49454F">
        {title}
      </Text>
      <Text fontSize={24} fontWeight="700" color="#1C1B1F">
        {value}
      </Text>
    </View>
  );
}

function BasicDashboard() {
  const cards = [
    <StatCard key="1" title="Total Users" value="1,234" />,
    <StatCard key="2" title="Revenue" value="$56,789" />,
    <StatCard key="3" title="Orders" value="342" />,
  ];

  return (
    <DashboardTemplate
      testID="dashboard-basic"
      topBar={<TopAppBar title="Dashboard" type="small" />}
      summaryCards={cards}
    >
      <YStack gap={16}>
        <Text>Recent Activity</Text>
        <Text>Activity item 1</Text>
        <Text>Activity item 2</Text>
      </YStack>
    </DashboardTemplate>
  );
}

function CardsOnly() {
  const cards = [
    <StatCard key="1" title="Active" value="89" />,
    <StatCard key="2" title="Pending" value="12" />,
  ];

  return (
    <DashboardTemplate
      testID="dashboard-cards-only"
      topBar={<TopAppBar title="Overview" type="small" />}
      summaryCards={cards}
    />
  );
}

const meta: Meta = {
  title: "templates/dashboard-template/overview",
  component: BasicDashboard,
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
  render: () => <BasicDashboard />,
};

export const CardsOnlyStory: Story = {
  name: "Cards Only",
  render: () => <CardsOnly />,
};
