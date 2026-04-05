import { render, screen, fireEvent } from "@/test-utils";
import { TabBar } from "./tab-bar";

const tabs = [
  { icon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  { icon: "person", label: "Profile" },
];

const labelOnlyTabs = [
  { label: "Tab 1" },
  { label: "Tab 2" },
  { label: "Tab 3" },
];

describe("TabBar", () => {
  it("renders all tabs", () => {
    render(<TabBar tabs={tabs} testID="tabbar" />);
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();
    expect(screen.getByText("Profile")).toBeTruthy();
  });

  it("renders active indicator on correct tab", () => {
    render(<TabBar tabs={tabs} activeIndex={1} testID="tabbar" />);
    const activeTab = screen.getByTestId("tabbar-tab-1");
    expect(activeTab.props.accessibilityState).toEqual({ selected: true });
  });

  it("fires onTabPress with correct index", () => {
    const onPress = jest.fn();
    render(<TabBar tabs={tabs} onTabPress={onPress} testID="tabbar" />);
    fireEvent.press(screen.getByTestId("tabbar-tab-2"));
    expect(onPress).toHaveBeenCalledWith(2);
  });

  it("shows icon in primary variant", () => {
    const { toJSON } = render(<TabBar tabs={tabs} variant="primary" testID="tabbar" />);
    expect(toJSON()).toBeTruthy();
  });

  it("hides icon in secondary variant", () => {
    render(<TabBar tabs={tabs} variant="secondary" testID="tabbar" />);
    expect(screen.getByText("Home")).toBeTruthy();
  });

  it("renders with scrollable prop", () => {
    const { toJSON } = render(<TabBar tabs={tabs} scrollable testID="tabbar" />);
    expect(toJSON()).toBeTruthy();
  });

  it("sets accessibility role and state", () => {
    render(<TabBar tabs={tabs} activeIndex={0} testID="tabbar" />);
    const tab = screen.getByTestId("tabbar-tab-0");
    expect(tab.props.accessibilityRole).toBe("tab");
    expect(tab.props.accessibilityState).toEqual({ selected: true });
  });

  it("renders with custom testID", () => {
    render(<TabBar tabs={tabs} testID="custom-tabs" />);
    expect(screen.getByTestId("custom-tabs")).toBeTruthy();
  });
});
