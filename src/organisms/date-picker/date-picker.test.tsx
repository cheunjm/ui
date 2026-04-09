import { render, screen, fireEvent } from "@/test-utils";
import { DatePicker } from "./date-picker";

describe("DatePicker", () => {
  it("renders when visible", () => {
    render(
      <DatePicker
        visible
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="date-picker"
      />,
    );
    expect(screen.getByTestId("date-picker")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    render(
      <DatePicker
        visible={false}
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="date-picker"
      />,
    );
    expect(screen.queryByTestId("date-picker")).toBeNull();
  });

  it("calls onDismiss when cancel pressed", () => {
    const onDismiss = jest.fn();
    render(
      <DatePicker
        visible
        onConfirm={jest.fn()}
        onDismiss={onDismiss}
        testID="dp"
      />,
    );
    fireEvent.press(screen.getByText("Cancel"));
    expect(onDismiss).toHaveBeenCalled();
  });

  it("calls onConfirm when OK pressed in calendar mode", () => {
    const onConfirm = jest.fn();
    render(
      <DatePicker
        visible
        onConfirm={onConfirm}
        onDismiss={jest.fn()}
        testID="dp"
      />,
    );
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(expect.any(Date));
  });

  it("renders with provided value", () => {
    const date = new Date(2026, 3, 15);
    render(
      <DatePicker
        visible
        value={date}
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="dp"
      />,
    );
    expect(screen.getByText("April 2026")).toBeTruthy();
  });

  it("shows days of week headers", () => {
    render(
      <DatePicker
        visible
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="dp"
      />,
    );
    expect(screen.getByText("Su")).toBeTruthy();
    expect(screen.getByText("Mo")).toBeTruthy();
    expect(screen.getByText("Sa")).toBeTruthy();
  });

  it("renders select date label", () => {
    render(
      <DatePicker
        visible
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="dp"
      />,
    );
    expect(screen.getByText("Select date")).toBeTruthy();
  });

  it("starts in input mode when mode prop is input", () => {
    render(
      <DatePicker
        visible
        mode="input"
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="dp"
      />,
    );
    expect(screen.getByText("Date")).toBeTruthy();
  });

  it("confirms from input mode with valid date", () => {
    const onConfirm = jest.fn();
    render(
      <DatePicker
        visible
        mode="input"
        onConfirm={onConfirm}
        onDismiss={jest.fn()}
        testID="dp"
      />,
    );
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledWith(expect.any(Date));
  });

  it("renders calendar grid with day numbers", () => {
    const date = new Date(2026, 3, 15);
    render(
      <DatePicker
        visible
        value={date}
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="dp"
      />,
    );
    expect(screen.getByText("15")).toBeTruthy();
    expect(screen.getAllByText("1").length).toBeGreaterThan(0);
  });

  it("renders with minDate and maxDate", () => {
    const value = new Date(2026, 3, 15);
    const minDate = new Date(2026, 3, 10);
    const maxDate = new Date(2026, 3, 20);
    render(
      <DatePicker
        visible
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="dp"
      />,
    );
    expect(screen.getByTestId("dp")).toBeTruthy();
  });

  it("defaults to today when no value provided", () => {
    const onConfirm = jest.fn();
    render(
      <DatePicker
        visible
        onConfirm={onConfirm}
        onDismiss={jest.fn()}
        testID="dp"
      />,
    );
    fireEvent.press(screen.getByText("OK"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
    const result = onConfirm.mock.calls[0][0];
    expect(result).toBeInstanceOf(Date);
  });

  describe("range selection", () => {
    it("renders with range header label", () => {
      render(
        <DatePicker
          visible
          selectionMode="range"
          onConfirm={jest.fn()}
          onDismiss={jest.fn()}
          testID="dp"
        />,
      );
      expect(screen.getByText("Select date range")).toBeTruthy();
    });

    it("renders two input fields in range input mode", () => {
      render(
        <DatePicker
          visible
          selectionMode="range"
          mode="input"
          onConfirm={jest.fn()}
          onDismiss={jest.fn()}
          testID="dp"
        />,
      );
      expect(screen.getByText("Start date")).toBeTruthy();
      expect(screen.getByText("End date")).toBeTruthy();
    });

    it("calls onConfirmRange from range input mode", () => {
      const onConfirmRange = jest.fn();
      render(
        <DatePicker
          visible
          selectionMode="range"
          mode="input"
          startDate={new Date(2026, 3, 10)}
          endDate={new Date(2026, 3, 20)}
          onConfirm={jest.fn()}
          onConfirmRange={onConfirmRange}
          onDismiss={jest.fn()}
          testID="dp"
        />,
      );
      fireEvent.press(screen.getByText("OK"));
      expect(onConfirmRange).toHaveBeenCalledWith(
        expect.any(Date),
        expect.any(Date),
      );
    });

    it("single mode still shows Select date label", () => {
      render(
        <DatePicker
          visible
          selectionMode="single"
          onConfirm={jest.fn()}
          onDismiss={jest.fn()}
          testID="dp"
        />,
      );
      expect(screen.getByText("Select date")).toBeTruthy();
    });

    it("single mode still calls onConfirm", () => {
      const onConfirm = jest.fn();
      render(
        <DatePicker
          visible
          selectionMode="single"
          onConfirm={onConfirm}
          onDismiss={jest.fn()}
          testID="dp"
        />,
      );
      fireEvent.press(screen.getByText("OK"));
      expect(onConfirm).toHaveBeenCalledWith(expect.any(Date));
    });
  });

  describe("year selector", () => {
    it("opens year grid when header is tapped", () => {
      const date = new Date(2026, 3, 15);
      render(
        <DatePicker
          visible
          value={date}
          onConfirm={jest.fn()}
          onDismiss={jest.fn()}
          testID="dp"
        />,
      );
      fireEvent.press(screen.getByTestId("dp-year-toggle"));
      expect(screen.getByTestId("dp-year-grid")).toBeTruthy();
    });

    it("shows current year in year grid", () => {
      const date = new Date(2026, 3, 15);
      render(
        <DatePicker
          visible
          value={date}
          onConfirm={jest.fn()}
          onDismiss={jest.fn()}
          testID="dp"
        />,
      );
      fireEvent.press(screen.getByTestId("dp-year-toggle"));
      expect(screen.getByText("2026")).toBeTruthy();
    });

    it("navigates back to calendar when year is selected", () => {
      const date = new Date(2026, 3, 15);
      render(
        <DatePicker
          visible
          value={date}
          onConfirm={jest.fn()}
          onDismiss={jest.fn()}
          testID="dp"
        />,
      );
      fireEvent.press(screen.getByTestId("dp-year-toggle"));
      fireEvent.press(screen.getByText("2025"));
      expect(screen.getByText("April 2025")).toBeTruthy();
      expect(screen.queryByTestId("dp-year-grid")).toBeNull();
    });
  });
});
