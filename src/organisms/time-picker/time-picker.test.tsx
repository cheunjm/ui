import { render, screen, fireEvent } from "@/test-utils";
import { TimePicker } from "./time-picker";

describe("TimePicker", () => {
  it("renders when visible", () => {
    render(
      <TimePicker visible onConfirm={jest.fn()} onDismiss={jest.fn()} testID="time-picker" />
    );
    expect(screen.getByTestId("time-picker")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    render(
      <TimePicker visible={false} onConfirm={jest.fn()} onDismiss={jest.fn()} testID="time-picker" />
    );
    expect(screen.queryByTestId("time-picker")).toBeNull();
  });

  it("calls onDismiss when cancel pressed", () => {
    const onDismiss = jest.fn();
    render(<TimePicker visible onConfirm={jest.fn()} onDismiss={onDismiss} testID="tp" />);
    fireEvent.press(screen.getByText("Cancel"));
    expect(onDismiss).toHaveBeenCalled();
  });

  it("calls onConfirm when OK pressed", () => {
    const onConfirm = jest.fn();
    render(<TimePicker visible onConfirm={onConfirm} onDismiss={jest.fn()} hour={9} minute={30} testID="tp" />);
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalled();
  });

  it("renders 24-hour format", () => {
    render(
      <TimePicker visible onConfirm={jest.fn()} onDismiss={jest.fn()} use24Hour testID="tp" />
    );
    expect(screen.getByTestId("tp")).toBeTruthy();
  });
});
