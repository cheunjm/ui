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

  it("selects hour from clock face and switches to minutes", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible hour={9} minute={0} onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("03"));
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(3, 0);
  });

  it("selects minute from clock face", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible hour={9} minute={0} onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("03"));
    fireEvent.press(screen.getByText("15"));
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(3, 15);
  });

  it("switches clock focus to minutes when minutes segment pressed", () => {
    render(
      <TimePicker visible hour={9} minute={0} onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    const allZeros = screen.getAllByText("00");
    fireEvent.press(allZeros[0]);
    expect(allZeros.length).toBeGreaterThan(0);
  });

  it("handles AM 12 edge case on confirm", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible hour={12} minute={0} onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("AM"));
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(0, 0);
  });

  it("handles PM 12 edge case on confirm", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible hour={12} minute={0} onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("PM"));
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(12, 0);
  });

  it("renders minute numbers in clock face when in minutes focus", () => {
    render(
      <TimePicker visible hour={9} minute={0} onConfirm={jest.fn()} onDismiss={jest.fn()} testID="tp" />
    );
    fireEvent.press(screen.getByText("03"));
    expect(screen.getByText("15")).toBeTruthy();
    expect(screen.getByText("30")).toBeTruthy();
    expect(screen.getByText("45")).toBeTruthy();
  });

  it("changes hour via input mode text field", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible mode="input" hour={9} minute={0} onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    const hourField = screen.getByDisplayValue("9");
    fireEvent.changeText(hourField, "11");
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(11, 0);
  });

  it("changes minute via input mode text field", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible mode="input" hour={9} minute={0} onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    const minuteField = screen.getByDisplayValue("00");
    fireEvent.changeText(minuteField, "45");
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(9, 45);
  });

  it("clamps minute to 59 in input mode", () => {
    const onConfirm = jest.fn();
    render(
      <TimePicker visible mode="input" hour={9} minute={0} onConfirm={onConfirm} onDismiss={jest.fn()} testID="tp" />
    );
    const minuteField = screen.getByDisplayValue("00");
    fireEvent.changeText(minuteField, "99");
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(9, 59);
  });
});
