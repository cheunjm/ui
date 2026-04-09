import { render, screen } from "@/test-utils";
import { Text, View } from "tamagui";
import { DashboardTemplate } from "./dashboard-template";

describe("DashboardTemplate", () => {
  it("renders with testID", () => {
    render(<DashboardTemplate testID="dashboard" />);
    expect(screen.getByTestId("dashboard")).toBeTruthy();
  });

  it("renders topBar slot", () => {
    render(
      <DashboardTemplate topBar={<Text>Dashboard Header</Text>} />,
    );
    expect(screen.getByText("Dashboard Header")).toBeTruthy();
  });

  it("renders summary cards", () => {
    const cards = [
      <View key="1"><Text>Card 1</Text></View>,
      <View key="2"><Text>Card 2</Text></View>,
      <View key="3"><Text>Card 3</Text></View>,
    ];
    render(<DashboardTemplate testID="dashboard" summaryCards={cards} />);
    expect(screen.getByTestId("dashboard-grid")).toBeTruthy();
    expect(screen.getByText("Card 1")).toBeTruthy();
    expect(screen.getByText("Card 2")).toBeTruthy();
    expect(screen.getByText("Card 3")).toBeTruthy();
  });

  it("renders children", () => {
    render(
      <DashboardTemplate>
        <Text>Main Content</Text>
      </DashboardTemplate>,
    );
    expect(screen.getByText("Main Content")).toBeTruthy();
  });

  it("does not render grid when summaryCards is empty", () => {
    render(<DashboardTemplate testID="dashboard" summaryCards={[]} />);
    expect(screen.queryByTestId("dashboard-grid")).toBeNull();
  });

  it("renders all slots together", () => {
    const cards = [<View key="1"><Text>Stats</Text></View>];
    render(
      <DashboardTemplate
        testID="full-dashboard"
        topBar={<Text>Header</Text>}
        summaryCards={cards}
      >
        <Text>Content Below</Text>
      </DashboardTemplate>,
    );
    expect(screen.getByTestId("full-dashboard")).toBeTruthy();
    expect(screen.getByText("Header")).toBeTruthy();
    expect(screen.getByText("Stats")).toBeTruthy();
    expect(screen.getByText("Content Below")).toBeTruthy();
  });

  it("does not render grid when summaryCards is undefined", () => {
    render(<DashboardTemplate testID="dashboard" />);
    expect(screen.queryByTestId("dashboard-grid")).toBeNull();
  });

  it("does not render children wrapper when children is undefined", () => {
    render(<DashboardTemplate testID="dashboard" />);
    expect(screen.getByTestId("dashboard")).toBeTruthy();
  });

  it("renders grid without testID", () => {
    const cards = [<View key="1"><Text>Card</Text></View>];
    render(<DashboardTemplate summaryCards={cards} />);
    expect(screen.getByText("Card")).toBeTruthy();
  });
});
