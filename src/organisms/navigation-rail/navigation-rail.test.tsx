import { render, screen, fireEvent } from "@/test-utils";
import { NavigationRail } from "./navigation-rail";

const destinations = [
  { icon: "home-outlined", activeIcon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  { icon: "notifications-outlined", activeIcon: "notifications", label: "Alerts", badge: 3 },
];

describe("NavigationRail", () => {
  it("renders all destinations", () => {
    render(<NavigationRail destinations={destinations} testID="rail" />);
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();
    expect(screen.getByText("Alerts")).toBeTruthy();
  });

  it("renders with default activeIndex of 0", () => {
    render(<NavigationRail destinations={destinations} testID="rail" />);
    expect(screen.getByTestId("rail-dest-0")).toBeTruthy();
  });

  it("fires onDestinationPress with correct index", () => {
    const onPress = jest.fn();
    render(
      <NavigationRail
        destinations={destinations}
        onDestinationPress={onPress}
        testID="rail"
      />,
    );
    fireEvent.press(screen.getByTestId("rail-dest-1"));
    expect(onPress).toHaveBeenCalledWith(1);
  });

  it("renders FAB when provided", () => {
    const onFabPress = jest.fn();
    render(
      <NavigationRail
        destinations={destinations}
        fab={{ icon: "edit", onPress: onFabPress, accessibilityLabel: "Compose" }}
        testID="rail"
      />,
    );
    expect(screen.getByTestId("rail-fab")).toBeTruthy();
  });

  it("renders badge count", () => {
    render(<NavigationRail destinations={destinations} testID="rail" />);
    expect(screen.getByText("3")).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<NavigationRail destinations={destinations} testID="custom-rail" />);
    expect(screen.getByTestId("custom-rail")).toBeTruthy();
  });

  it("sets accessibility role and state on destinations", () => {
    render(
      <NavigationRail destinations={destinations} activeIndex={1} testID="rail" />,
    );
    const activeDest = screen.getByTestId("rail-dest-1");
    expect(activeDest.props.accessibilityRole).toBe("tab");
    expect(activeDest.props.accessibilityState).toEqual({ selected: true });
  });
});
