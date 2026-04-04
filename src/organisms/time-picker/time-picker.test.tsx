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

  it("calls onConfirm with hour and minute when OK pressed", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible hour={9} minute={30} onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(9, 30);
  });

  it("shows AM/PM toggles in 12-hour mode", () => {
    render(
      <TimePicker visible hour={9} onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    expect(screen.getByText("AM")).toBeTruthy();
    expect(screen.getByText("PM")).toBeTruthy();
  });

  it("hides AM/PM in 24-hour mode", () => {
    render(
      <TimePicker visible hour={14} use24Hour onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    expect(screen.queryByText("AM")).toBeNull();
    expect(screen.queryByText("PM")).toBeNull();
  });

  it("confirms with correct 24-hour value", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible hour={14} minute={30} use24Hour onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(14, 30);
  });

  it("starts in input mode when mode prop is input", () => {
    render(
      <TimePicker visible mode="input" onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    expect(screen.getByText("Hour")).toBeTruthy();
    expect(screen.getByText("Minute")).toBeTruthy();
  });

  it("toggles AM/PM period", () => {
    render(
      <TimePicker visible hour={9} onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("PM"));
    fireEvent.press(screen.getByText("AM"));
    expect(screen.getByText("AM")).toBeTruthy();
  });

  it("shows enter time label", () => {
    render(
      <TimePicker visible onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    expect(screen.getByText("Enter time")).toBeTruthy();
  });

  it("renders clock face numbers", () => {
    render(
      <TimePicker visible hour={9} onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    expect(screen.getByText("12")).toBeTruthy();
  });

  it("defaults to hour 9 and minute 0", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(9, 0);
  });

  it("converts PM correctly on confirm in 12-hour mode", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible hour={3} minute={0} onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("PM"));
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(15, 0);
  });

  it("renders colon separator", () => {
    render(
      <TimePicker visible onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    expect(screen.getByText(":")).toBeTruthy();
  });

  it("renders 24-hour mode clock face", () => {
    render(
      <TimePicker visible hour={14} use24Hour onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    expect(screen.getByTestId("tp")).toBeTruthy();
  });
});
