import { render, screen, fireEvent } from "@/test-utils";
import { Switch } from "./switch";

describe("Switch", () => {
  it("renders off by default", () => {
    render(<Switch testID="switch" />);
    expect(screen.getByTestId("switch")).toBeTruthy();
  });

  it("renders on state", () => {
    const { toJSON } = render(<Switch selected testID="switch" />);
    expect(screen.getByTestId("switch")).toBeTruthy();
    expect(toJSON()).toBeTruthy();
  });

  it("renders with icon", () => {
    const { toJSON } = render(<Switch showIcon testID="switch" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with icon in on state", () => {
    const { toJSON } = render(<Switch selected showIcon testID="switch" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders disabled without crash", () => {
    const { toJSON } = render(<Switch disabled testID="switch" />);
    expect(toJSON()).toBeTruthy();
  });

  it("fires onPress callback", () => {
    const onPress = jest.fn();
    render(<Switch onPress={onPress} testID="switch" />);
    fireEvent.press(screen.getByTestId("switch"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("does not fire onPress when disabled", () => {
    const onPress = jest.fn();
    render(<Switch disabled onPress={onPress} testID="switch" />);
    fireEvent.press(screen.getByTestId("switch"));
    expect(onPress).not.toHaveBeenCalled();
  });

  it("renders with custom testID", () => {
    render(<Switch testID="custom-switch" />);
    expect(screen.getByTestId("custom-switch")).toBeTruthy();
  });

  it("has correct accessibility role", () => {
    render(<Switch testID="a11y-switch" />);
    const element = screen.getByTestId("a11y-switch");
    expect(element.props.accessibilityRole).toBe("switch");
  });

  it("has correct accessibility state when selected", () => {
    render(<Switch selected testID="a11y-switch" />);
    const element = screen.getByTestId("a11y-switch");
    expect(element.props.accessibilityState).toEqual(
      expect.objectContaining({ checked: true }),
    );
  });

  it("has correct accessibility state when disabled", () => {
    render(<Switch disabled testID="a11y-switch" />);
    const element = screen.getByTestId("a11y-switch");
    expect(element.props.accessibilityState).toEqual(
      expect.objectContaining({ disabled: true }),
    );
  });

  describe("dark mode", () => {
    it("renders in dark theme without crashing", () => {
      render(<Switch testID="dark-test" />, { theme: "dark" });
      expect(screen.getByTestId("dark-test")).toBeTruthy();
    });
  });
});
