import { render, screen, fireEvent } from "@/test-utils";
import { TextField } from "./text-field";

describe("TextField", () => {
  it("renders filled variant by default", () => {
    render(<TextField testID="tf" />);
    expect(screen.getByTestId("tf")).toBeTruthy();
  });

  it("renders outlined variant", () => {
    render(<TextField variant="outlined" testID="tf" />);
    expect(screen.getByTestId("tf")).toBeTruthy();
  });

  it("renders with label", () => {
    render(<TextField label="Email" testID="tf" />);
    expect(screen.getByText("Email")).toBeTruthy();
  });

  it("renders with helper text", () => {
    render(<TextField helperText="Enter your email" testID="tf" />);
    expect(screen.getByText("Enter your email")).toBeTruthy();
  });

  it("renders with error text", () => {
    render(<TextField errorText="Invalid email" testID="tf" />);
    expect(screen.getByText("Invalid email")).toBeTruthy();
  });

  it("renders disabled without crash", () => {
    render(<TextField disabled testID="tf" />);
    expect(screen.getByTestId("tf")).toBeTruthy();
  });

  it("renders with leading icon", () => {
    const { toJSON } = render(<TextField leadingIcon="search" testID="tf" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with trailing icon", () => {
    const { toJSON } = render(<TextField trailingIcon="close" testID="tf" />);
    expect(toJSON()).toBeTruthy();
  });

  it("fires onChangeText callback", () => {
    const onChangeText = jest.fn();
    render(<TextField onChangeText={onChangeText} testID="tf" />);
    fireEvent.changeText(screen.getByTestId("tf-input"), "hello");
    expect(onChangeText).toHaveBeenCalledWith("hello");
  });

  it("renders with custom testID", () => {
    render(<TextField testID="custom-tf" />);
    expect(screen.getByTestId("custom-tf")).toBeTruthy();
  });

  it("forwards accessibilityLabel to input", () => {
    render(<TextField accessibilityLabel="Email address" testID="a11y-tf" />);
    const input = screen.getByTestId("a11y-tf-input");
    expect(input.props.accessibilityLabel).toBe("Email address");
  });

  it("defaults accessibilityLabel to label prop", () => {
    render(<TextField label="Email" testID="a11y-tf" />);
    const input = screen.getByTestId("a11y-tf-input");
    expect(input.props.accessibilityLabel).toBe("Email");
  });

  it("has correct accessibility state when disabled", () => {
    render(<TextField disabled testID="a11y-tf" />);
    const input = screen.getByTestId("a11y-tf-input");
    expect(input.props.accessibilityState).toEqual(
      expect.objectContaining({ disabled: true }),
    );
  });
});
