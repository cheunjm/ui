import { render, screen, fireEvent } from "@/test-utils";
import { NavigationBar } from "./navigation-bar";

const destinations = [
  { icon: "home-outlined", activeIcon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  {
    icon: "notifications-outlined",
    activeIcon: "notifications",
    label: "Alerts",
    badge: 3,
  },
];

describe("NavigationBar", () => {
  it("renders all destinations", () => {
    render(<NavigationBar destinations={destinations} testID="nav" />);
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();
    expect(screen.getByText("Alerts")).toBeTruthy();
  });

  it("renders with default activeIndex of 0", () => {
    render(<NavigationBar destinations={destinations} testID="nav" />);
    expect(screen.getByTestId("nav-dest-0")).toBeTruthy();
  });

  it("fires onDestinationPress with correct index", () => {
    const onPress = jest.fn();
    render(
      <NavigationBar
        destinations={destinations}
        onDestinationPress={onPress}
        testID="nav"
      />,
    );
    fireEvent.press(screen.getByTestId("nav-dest-1"));
    expect(onPress).toHaveBeenCalledWith(1);
  });

  it("renders badge count", () => {
    render(<NavigationBar destinations={destinations} testID="nav" />);
    expect(screen.getByText("3")).toBeTruthy();
  });

  it("renders without badge when not provided", () => {
    const noBadge = [
      { icon: "home", label: "Home" },
      { icon: "search", label: "Search" },
    ];
    const { toJSON } = render(
      <NavigationBar destinations={noBadge} testID="nav" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<NavigationBar destinations={destinations} testID="custom-nav" />);
    expect(screen.getByTestId("custom-nav")).toBeTruthy();
  });

  it("hides labels when showLabels is false", () => {
    const dests = [
      { icon: "home", label: "Home" },
      { icon: "search", label: "Search" },
      { icon: "settings", label: "Settings" },
    ];
    render(
      <NavigationBar destinations={dests} showLabels={false} testID="navbar" />,
    );
    expect(screen.queryByText("Home")).toBeNull();
    expect(screen.queryByText("Search")).toBeNull();
  });

  it("shows labels by default", () => {
    const dests = [
      { icon: "home", label: "Home" },
      { icon: "search", label: "Search" },
      { icon: "settings", label: "Settings" },
    ];
    render(<NavigationBar destinations={dests} testID="navbar" />);
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();
  });

  it("renders label-less variant with reduced height", () => {
    const dests = [
      { icon: "home", label: "Home" },
      { icon: "search", label: "Search" },
      { icon: "settings", label: "Settings" },
    ];
    const { toJSON } = render(
      <NavigationBar destinations={dests} showLabels={false} testID="navbar" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("sets accessibility role and state on destinations", () => {
    render(
      <NavigationBar
        destinations={destinations}
        activeIndex={1}
        testID="nav"
      />,
    );
    const activeDest = screen.getByTestId("nav-dest-1");
    expect(activeDest.props.accessibilityRole).toBe("tab");
    expect(activeDest.props.accessibilityState).toEqual({ selected: true });
  });
});
