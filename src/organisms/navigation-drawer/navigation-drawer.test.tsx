import { render, screen, fireEvent } from "@/test-utils";
import { NavigationDrawer } from "./navigation-drawer";

const sections = [
  {
    header: "Main",
    destinations: [
      { key: "home", icon: "home", label: "Home" },
      { key: "search", icon: "search", label: "Search", badgeCount: 3 },
    ],
  },
  {
    destinations: [{ key: "settings", icon: "settings", label: "Settings" }],
  },
];

describe("NavigationDrawer", () => {
  it("renders when open", () => {
    render(
      <NavigationDrawer
        open
        onClose={jest.fn()}
        sections={sections}
        testID="drawer"
      />,
    );
    expect(screen.getByTestId("drawer")).toBeTruthy();
  });

  it("calls onDestinationPress when destination pressed", () => {
    const onPress = jest.fn();
    render(
      <NavigationDrawer
        open
        onClose={jest.fn()}
        sections={sections}
        onDestinationPress={onPress}
        testID="drawer"
      />,
    );
    fireEvent.press(screen.getByTestId("drawer-dest-home"));
    expect(onPress).toHaveBeenCalledWith("home");
  });

  it("highlights active destination", () => {
    render(
      <NavigationDrawer
        open
        onClose={jest.fn()}
        sections={sections}
        activeKey="home"
        testID="drawer"
      />,
    );
    expect(screen.getByTestId("drawer-dest-home")).toBeTruthy();
  });
});
