import { render, screen, fireEvent } from "@/test-utils";
import { FormField } from "./form-field";

describe("FormField", () => {
  it("renders with label", () => {
    render(<FormField label="Email" testID="ff" />);
    expect(screen.getByText("Email")).toBeTruthy();
  });

  it("renders with helper text", () => {
    render(<FormField helperText="Enter your email" testID="ff" />);
    expect(screen.getByText("Enter your email")).toBeTruthy();
  });

  it("renders with error text", () => {
    render(<FormField errorText="Invalid email" testID="ff" />);
    expect(screen.getByText("Invalid email")).toBeTruthy();
  });

  it("renders required asterisk", () => {
    render(<FormField label="Email" required testID="ff" />);
    expect(screen.getByText(/\*/)).toBeTruthy();
  });

  it("renders character counter", () => {
    render(<FormField characterCount={{ current: 5, max: 100 }} testID="ff" />);
    expect(screen.getByText("5/100")).toBeTruthy();
  });

  it("passes value through to TextField", () => {
    render(<FormField value="hello" testID="ff" />);
    expect(screen.getByTestId("ff")).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<FormField testID="custom-ff" />);
    expect(screen.getByTestId("custom-ff")).toBeTruthy();
  });

  it("forwards label as accessibilityLabel to TextField", () => {
    render(<FormField label="Email" testID="a11y-ff" />);
    const input = screen.getByTestId("a11y-ff");
    expect(input).toBeTruthy();
  });

  it("renders error text with alert role", () => {
    render(<FormField errorText="Required" testID="a11y-ff" />);
    const support = screen.getByTestId("a11y-ff-support");
    expect(support.props.accessibilityRole).toBe("alert");
  });

  describe("interaction", () => {
    it("fires onChangeText callback on text input", () => {
      const onChangeText = jest.fn();
      render(
        <FormField onChangeText={onChangeText} label="Email" testID="ff" />,
      );
      const input = screen.getByLabelText("Email");
      fireEvent.changeText(input, "hello@test.com");
      expect(onChangeText).toHaveBeenCalledWith("hello@test.com");
    });

    it("fires onFocus and onBlur callbacks", () => {
      const onFocus = jest.fn();
      const onBlur = jest.fn();
      render(
        <FormField
          onFocus={onFocus}
          onBlur={onBlur}
          label="Name"
          testID="ff"
        />,
      );
      const input = screen.getByLabelText("Name");
      fireEvent(input, "focus");
      expect(onFocus).toHaveBeenCalledTimes(1);
      fireEvent(input, "blur");
      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("shows error text instead of helper text when both provided", () => {
      render(
        <FormField
          helperText="Enter your email"
          errorText="Invalid email"
          testID="ff"
        />,
      );
      expect(screen.getByText("Invalid email")).toBeTruthy();
      expect(screen.queryByText("Enter your email")).toBeNull();
    });

    it("does not show required asterisk when required is false", () => {
      render(<FormField label="Email" required={false} testID="ff" />);
      expect(screen.queryByText(/\*/)).toBeNull();
    });

    it("renders label with testID suffix", () => {
      render(<FormField label="Name" testID="ff" />);
      expect(screen.getByTestId("ff-label")).toBeTruthy();
    });

    it("renders support text with testID suffix", () => {
      render(<FormField helperText="Help" testID="ff" />);
      expect(screen.getByTestId("ff-support")).toBeTruthy();
    });

    it("renders counter with testID suffix", () => {
      render(
        <FormField characterCount={{ current: 10, max: 50 }} testID="ff" />,
      );
      expect(screen.getByTestId("ff-counter")).toBeTruthy();
      expect(screen.getByText("10/50")).toBeTruthy();
    });

    it("helper text does not have alert role", () => {
      render(<FormField helperText="Just a hint" testID="ff" />);
      const support = screen.getByTestId("ff-support");
      expect(support.props.accessibilityRole).not.toBe("alert");
    });
  });
});
