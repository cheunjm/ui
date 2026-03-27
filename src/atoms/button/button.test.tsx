import { render, screen, fireEvent } from "@/test-utils";
import { Button } from "./button";

describe("Button", () => {
  it("renders with default filled variant", () => {
    render(<Button>Press me</Button>);
    expect(screen.getByText("Press me")).toBeTruthy();
  });

  it("renders all MD3 variants without crashing", () => {
    const variants = ["filled", "outlined", "text", "elevated", "tonal"] as const;

    variants.forEach((variant) => {
      const { unmount } = render(<Button variant={variant}>Click</Button>);
      expect(screen.getByText("Click")).toBeTruthy();
      unmount();
    });
  });

  it("renders with disabled prop without crashing", () => {
    const { toJSON } = render(<Button disabled>Disabled</Button>);
    expect(toJSON()).toBeTruthy();
    expect(screen.getByText("Disabled")).toBeTruthy();
  });

  it("fires onPress callback", () => {
    const onPress = jest.fn();
    render(<Button onPress={onPress}>Tap me</Button>);
    fireEvent.press(screen.getByText("Tap me"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders children as text content", () => {
    render(<Button>Submit</Button>);
    expect(screen.getByText("Submit")).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<Button testID="custom-button">Test</Button>);
    expect(screen.getByTestId("custom-button")).toBeTruthy();
  });
});
