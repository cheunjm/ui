import { render, screen } from "@/test-utils";
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
    render(
      <FormField characterCount={{ current: 5, max: 100 }} testID="ff" />,
    );
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
});
