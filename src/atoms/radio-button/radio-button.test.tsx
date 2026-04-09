import { render, screen, fireEvent } from "@/test-utils";
import { RadioButton } from "./radio-button";

describe("RadioButton", () => {
  it("renders unselected by default", () => {
    render(<RadioButton testID="radio" />);
    expect(screen.getByTestId("radio")).toBeTruthy();
  });

  it("renders selected state", () => {
    const { toJSON } = render(<RadioButton selected testID="radio" />);
    expect(screen.getByTestId("radio")).toBeTruthy();
    expect(toJSON()).toBeTruthy();
  });

  it("renders disabled without crash", () => {
    const { toJSON } = render(<RadioButton disabled testID="radio" />);
    expect(toJSON()).toBeTruthy();
  });

  it("fires onPress callback", () => {
    const onPress = jest.fn();
    render(<RadioButton onPress={onPress} testID="radio" />);
    fireEvent.press(screen.getByTestId("radio"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders with error prop", () => {
    const { toJSON } = render(<RadioButton error testID="radio" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<RadioButton testID="custom-radio" />);
    expect(screen.getByTestId("custom-radio")).toBeTruthy();
  });

  it("has correct accessibility role", () => {
    render(<RadioButton testID="a11y-radio" />);
    const element = screen.getByTestId("a11y-radio");
    expect(element.props.accessibilityRole).toBe("radio");
  });

  it("forwards accessibilityHint", () => {
    render(
      <RadioButton
        accessibilityHint="Selects this option"
        testID="hint-test"
      />,
    );
    expect(screen.getByTestId("hint-test").props.accessibilityHint).toBe(
      "Selects this option",
    );
  });

  it("has correct accessibility state when selected", () => {
    render(<RadioButton selected testID="a11y-radio" />);
    const element = screen.getByTestId("a11y-radio");
    expect(element.props.accessibilityState).toEqual(
      expect.objectContaining({ checked: true }),
    );
  });

  it("has correct accessibility state when disabled", () => {
    render(<RadioButton disabled testID="a11y-radio" />);
    const element = screen.getByTestId("a11y-radio");
    expect(element.props.accessibilityState).toEqual(
      expect.objectContaining({ disabled: true }),
    );
  });
});
