import { render, screen, fireEvent } from "@/test-utils";
import { FAB } from "./fab";

describe("FAB", () => {
  it("renders with default props", () => {
    render(<FAB icon="add" testID="fab" />);
    expect(screen.getByTestId("fab")).toBeTruthy();
  });

  it("renders all sizes without crash", () => {
    const sizes = ["small", "regular", "large"] as const;
    sizes.forEach((size) => {
      const { unmount } = render(<FAB icon="add" size={size} testID="fab" />);
      expect(screen.getByTestId("fab")).toBeTruthy();
      unmount();
    });
  });

  it("renders all color variants", () => {
    const colors = ["primary", "surface", "secondary", "tertiary"] as const;
    colors.forEach((color) => {
      const { unmount } = render(<FAB icon="add" color={color} testID="fab" />);
      expect(screen.getByTestId("fab")).toBeTruthy();
      unmount();
    });
  });

  it("renders extended FAB with label", () => {
    render(<FAB icon="edit" label="New task" testID="fab" />);
    expect(screen.getByTestId("fab")).toBeTruthy();
    expect(screen.getByText("New task")).toBeTruthy();
  });

  it("fires onPress callback", () => {
    const onPress = jest.fn();
    render(<FAB icon="add" onPress={onPress} testID="fab" />);
    fireEvent.press(screen.getByTestId("fab"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders with custom testID", () => {
    render(<FAB icon="add" testID="custom-fab" />);
    expect(screen.getByTestId("custom-fab")).toBeTruthy();
  });

  it("has correct accessibility role", () => {
    render(<FAB icon="add" testID="a11y-fab" />);
    const element = screen.getByTestId("a11y-fab");
    expect(element.props.accessibilityRole).toBe("button");
  });

  it("forwards accessibilityLabel", () => {
    render(<FAB icon="add" accessibilityLabel="Add item" testID="a11y-fab" />);
    const element = screen.getByTestId("a11y-fab");
    expect(element.props.accessibilityLabel).toBe("Add item");
  });

  describe("dark mode", () => {
    it("renders in dark theme without crashing", () => {
      render(<FAB icon="add" testID="dark-test" />, { theme: "dark" });
      expect(screen.getByTestId("dark-test")).toBeTruthy();
    });
  });
});
