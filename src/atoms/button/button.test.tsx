import { StyleSheet, Text } from "react-native";
import { render, screen, fireEvent } from "@/test-utils";
import { Button } from "./button";

describe("Button", () => {
  it("renders with default filled variant", () => {
    render(<Button>Press me</Button>);
    expect(screen.getByText("Press me")).toBeTruthy();
  });

  it("renders all MD3 variants without crashing", () => {
    const variants = [
      "filled",
      "outlined",
      "text",
      "elevated",
      "tonal",
    ] as const;

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

  it("has correct accessibility role", () => {
    render(<Button testID="a11y-btn">OK</Button>);
    const element = screen.getByTestId("a11y-btn");
    expect(element.props.accessibilityRole).toBe("button");
  });

  it("forwards accessibilityHint", () => {
    render(
      <Button accessibilityHint="Submits the form" testID="hint-test">
        OK
      </Button>,
    );
    expect(screen.getByTestId("hint-test").props.accessibilityHint).toBe(
      "Submits the form",
    );
  });

  it("applies flex to the container style", () => {
    render(
      <Button flex={1} testID="flex-btn">
        Flex
      </Button>,
    );
    expect(
      StyleSheet.flatten(screen.getByTestId("flex-btn").props.style),
    ).toEqual(
      expect.objectContaining({ flex: 1 }),
    );
  });

  it("renders an icon before the label", () => {
    render(<Button icon={<Text>icon</Text>}>With icon</Button>);
    expect(screen.getByText("icon")).toBeTruthy();
    expect(screen.getByText("With icon")).toBeTruthy();
  });

  it("renders non-string children as-is", () => {
    render(
      <Button>
        <Text>custom child</Text>
      </Button>,
    );
    expect(screen.getByText("custom child")).toBeTruthy();
  });

  it("has correct accessibility state when disabled", () => {
    render(
      <Button disabled testID="a11y-btn">
        Disabled
      </Button>,
    );
    const element = screen.getByTestId("a11y-btn");
    expect(element.props.accessibilityState).toEqual(
      expect.objectContaining({ disabled: true }),
    );
  });
});
