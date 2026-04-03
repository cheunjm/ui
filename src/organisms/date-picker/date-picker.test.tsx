import { render, screen, fireEvent } from "@/test-utils";
import { DatePicker } from "./date-picker";

describe("DatePicker", () => {
  it("renders when visible", () => {
    render(
      <DatePicker visible onConfirm={jest.fn()} onDismiss={jest.fn()} testID="date-picker" />
    );
    expect(screen.getByTestId("date-picker")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    render(
      <DatePicker visible={false} onConfirm={jest.fn()} onDismiss={jest.fn()} testID="date-picker" />
    );
    expect(screen.queryByTestId("date-picker")).toBeNull();
  });

  it("calls onDismiss when cancel pressed", () => {
    const onDismiss = jest.fn();
    render(<DatePicker visible onConfirm={jest.fn()} onDismiss={onDismiss} testID="dp" />);
    fireEvent.press(screen.getByText("Cancel"));
    expect(onDismiss).toHaveBeenCalled();
  });

  it("calls onConfirm when OK pressed", () => {
    const onConfirm = jest.fn();
    render(<DatePicker visible onConfirm={onConfirm} onDismiss={jest.fn()} testID="dp" />);
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalled();
  });
});
