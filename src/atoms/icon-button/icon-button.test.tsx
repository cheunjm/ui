import { render, screen, fireEvent } from "@/test-utils";
import { IconButton } from "./icon-button";

describe("IconButton", () => {
  it("renders with default standard variant", () => {
    const { toJSON } = render(<IconButton icon="close" testID="ib" />);
    expect(screen.getByTestId("ib")).toBeTruthy();
    expect(toJSON()).toBeTruthy();
  });

  it("renders all MD3 variants without crashing", () => {
    const variants = ["standard", "filled", "filledTonal", "outlined"] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <IconButton icon="settings" variant={variant} testID="ib" />,
      );
      expect(screen.getByTestId("ib")).toBeTruthy();
      unmount();
    });
  });

  it("fires onPress callback", () => {
    const onPress = jest.fn();
    render(<IconButton icon="close" onPress={onPress} testID="ib" />);
    fireEvent.press(screen.getByTestId("ib"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders with disabled prop", () => {
    const { toJSON } = render(<IconButton icon="close" disabled testID="ib" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with custom icon color", () => {
    const { toJSON } = render(
      <IconButton icon="favorite" iconColor="#FF0000" testID="ib" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<IconButton icon="home" testID="custom-ib" />);
    expect(screen.getByTestId("custom-ib")).toBeTruthy();
  });

  it("has correct accessibility role", () => {
    render(<IconButton icon="close" testID="a11y-ib" />);
    const element = screen.getByTestId("a11y-ib");
    expect(element.props.accessibilityRole).toBe("button");
  });

  it("forwards accessibilityLabel", () => {
    render(
      <IconButton icon="close" accessibilityLabel="Close" testID="a11y-ib" />,
    );
    const element = screen.getByTestId("a11y-ib");
    expect(element.props.accessibilityLabel).toBe("Close");
  });

  describe("dark mode", () => {
    it("renders in dark theme without crashing", () => {
      render(<IconButton icon="close" testID="dark-test" />, { theme: "dark" });
      expect(screen.getByTestId("dark-test")).toBeTruthy();
    });
  });
});
