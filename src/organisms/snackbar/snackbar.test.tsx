import { act } from "react";
import { render, screen, fireEvent } from "@/test-utils";
import { Snackbar } from "./snackbar";

describe("Snackbar", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders when visible", () => {
    render(<Snackbar visible message="Hello" testID="snackbar" />);
    expect(screen.getByTestId("snackbar")).toBeTruthy();
    expect(screen.getByText("Hello")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    render(<Snackbar visible={false} message="Hello" testID="snackbar" />);
    expect(screen.queryByTestId("snackbar")).toBeNull();
  });

  it("renders action button when actionLabel is provided", () => {
    const onAction = jest.fn();
    render(
      <Snackbar
        visible
        message="Deleted"
        actionLabel="Undo"
        onAction={onAction}
        testID="snackbar"
      />,
    );
    const action = screen.getByTestId("snackbar-action");
    expect(screen.getByText("Undo")).toBeTruthy();
    fireEvent.press(action);
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("renders close icon when showCloseIcon is true", () => {
    const onDismiss = jest.fn();
    render(
      <Snackbar
        visible
        message="Info"
        showCloseIcon
        onDismiss={onDismiss}
        testID="snackbar"
      />,
    );
    const close = screen.getByTestId("snackbar-close");
    fireEvent.press(close);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("does not render close icon by default", () => {
    render(<Snackbar visible message="Info" testID="snackbar" />);
    expect(screen.queryByTestId("snackbar-close")).toBeNull();
  });

  it("auto-dismisses after duration", () => {
    const onDismiss = jest.fn();
    render(
      <Snackbar visible message="Temp" duration={4000} onDismiss={onDismiss} />,
    );
    act(() => {
      jest.advanceTimersByTime(4000);
    });
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("does not auto-dismiss when duration is 0", () => {
    const onDismiss = jest.fn();
    render(
      <Snackbar
        visible
        message="Permanent"
        duration={0}
        onDismiss={onDismiss}
      />,
    );
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("clears timer when unmounted", () => {
    const onDismiss = jest.fn();
    const { unmount } = render(
      <Snackbar visible message="Temp" duration={4000} onDismiss={onDismiss} />,
    );
    unmount();
    act(() => {
      jest.advanceTimersByTime(4000);
    });
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("renders with custom testID", () => {
    render(<Snackbar visible message="Test" testID="custom-snack" />);
    expect(screen.getByTestId("custom-snack")).toBeTruthy();
  });

  it("renders action and close icon together", () => {
    render(
      <Snackbar
        visible
        message="Error occurred"
        actionLabel="Retry"
        showCloseIcon
        testID="snackbar"
      />,
    );
    expect(screen.getByTestId("snackbar-action")).toBeTruthy();
    expect(screen.getByTestId("snackbar-close")).toBeTruthy();
  });

  it("renders two-line variant with taller container", () => {
    render(
      <Snackbar
        visible
        message="A longer message that spans two lines"
        lines="two"
        testID="snackbar"
      />,
    );
    expect(screen.getByTestId("snackbar")).toBeTruthy();
    expect(screen.getByTestId("snackbar-message")).toBeTruthy();
  });

  it("renders two-line variant with action below message", () => {
    render(
      <Snackbar
        visible
        message="Error occurred"
        lines="two"
        actionLabel="Retry"
        onAction={() => {}}
        testID="snackbar"
      />,
    );
    expect(screen.getByTestId("snackbar-action")).toBeTruthy();
  });

  it("defaults to single line when lines prop is omitted", () => {
    render(<Snackbar visible message="Short message" testID="snackbar" />);
    expect(screen.getByTestId("snackbar")).toBeTruthy();
  });

  describe("dark mode", () => {
    it("renders in dark theme without crashing", () => {
      render(<Snackbar visible message="Test" testID="dark-test" />, {
        theme: "dark",
      });
      expect(screen.getByTestId("dark-test")).toBeTruthy();
    });
  });
});
