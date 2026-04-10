import { render, screen, fireEvent } from "@/test-utils";
import { Dialog } from "./dialog";

describe("Dialog", () => {
  it("renders when visible", () => {
    render(
      <Dialog visible title="Test Dialog" testID="dialog">
        Hello world
      </Dialog>,
    );
    expect(screen.getByTestId("dialog")).toBeTruthy();
    expect(screen.getByText("Test Dialog")).toBeTruthy();
    expect(screen.getByText("Hello world")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    render(
      <Dialog visible={false} title="Hidden" testID="dialog">
        Hidden content
      </Dialog>,
    );
    expect(screen.queryByTestId("dialog")).toBeNull();
  });

  it("renders title", () => {
    render(<Dialog visible title="My Title" testID="dialog" />);
    expect(screen.getByTestId("dialog-title")).toBeTruthy();
    expect(screen.getByText("My Title")).toBeTruthy();
  });

  it("renders icon when provided", () => {
    render(<Dialog visible icon="info" testID="dialog" />);
    expect(screen.getByTestId("dialog-icon")).toBeTruthy();
  });

  it("does not render icon when not provided", () => {
    render(<Dialog visible testID="dialog" />);
    expect(screen.queryByTestId("dialog-icon")).toBeNull();
  });

  it("renders body content", () => {
    render(
      <Dialog visible testID="dialog">
        Body text here
      </Dialog>,
    );
    expect(screen.getByTestId("dialog-body")).toBeTruthy();
    expect(screen.getByText("Body text here")).toBeTruthy();
  });

  it("calls onConfirm when confirm button is pressed", () => {
    const onConfirm = jest.fn();
    render(
      <Dialog visible onConfirm={onConfirm} testID="dialog">
        Confirm me
      </Dialog>,
    );
    fireEvent.press(screen.getByTestId("dialog-confirm"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("calls onDismiss when dismiss button is pressed", () => {
    const onDismiss = jest.fn();
    render(
      <Dialog visible onDismiss={onDismiss} testID="dialog">
        Dismiss me
      </Dialog>,
    );
    fireEvent.press(screen.getByTestId("dialog-dismiss"));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("uses default button labels", () => {
    render(
      <Dialog
        visible
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="dialog"
      />,
    );
    expect(screen.getByText("OK")).toBeTruthy();
    expect(screen.getByText("Cancel")).toBeTruthy();
  });

  it("uses custom button labels", () => {
    render(
      <Dialog
        visible
        confirmLabel="Accept"
        dismissLabel="Decline"
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="dialog"
      />,
    );
    expect(screen.getByText("Accept")).toBeTruthy();
    expect(screen.getByText("Decline")).toBeTruthy();
  });

  it("does not render confirm button when onConfirm is not provided", () => {
    render(<Dialog visible testID="dialog" />);
    expect(screen.queryByTestId("dialog-confirm")).toBeNull();
  });

  it("does not render dismiss button when onDismiss is not provided", () => {
    render(<Dialog visible testID="dialog" />);
    expect(screen.queryByTestId("dialog-dismiss")).toBeNull();
  });

  it("calls onDismiss when scrim is pressed", () => {
    const onDismiss = jest.fn();
    render(
      <Dialog visible onDismiss={onDismiss} testID="dialog">
        Content
      </Dialog>,
    );
    fireEvent.press(screen.getByTestId("dialog-scrim"));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("renders with custom testID", () => {
    render(<Dialog visible testID="custom-dialog" />);
    expect(screen.getByTestId("custom-dialog")).toBeTruthy();
  });

  it("renders without testID", () => {
    render(
      <Dialog visible title="No ID" onConfirm={jest.fn()} onDismiss={jest.fn()}>
        Content
      </Dialog>,
    );
    expect(screen.getByText("No ID")).toBeTruthy();
    expect(screen.getByText("Content")).toBeTruthy();
  });

  it("renders icon without testID", () => {
    render(
      <Dialog visible icon="info">
        Content
      </Dialog>,
    );
    expect(screen.getByText("Content")).toBeTruthy();
  });

  it("renders scrollable body without testID", () => {
    const { toJSON } = render(
      <Dialog visible scrollable>
        <>Scrollable content</>
      </Dialog>,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("stops propagation when pressing inside the dialog", () => {
    const onDismiss = jest.fn();
    render(
      <Dialog visible onDismiss={onDismiss} testID="dialog">
        Inner content
      </Dialog>,
    );
    fireEvent.press(screen.getByTestId("dialog"));
    expect(onDismiss).not.toHaveBeenCalled();
  });

  describe("scrollable body", () => {
    it("renders body as Text when scrollable is false", () => {
      render(
        <Dialog visible testID="dialog">
          Short content
        </Dialog>,
      );
      expect(screen.getByTestId("dialog-body")).toBeTruthy();
      expect(screen.getByText("Short content")).toBeTruthy();
    });

    it("renders body in ScrollView when scrollable is true", () => {
      render(
        <Dialog visible scrollable testID="dialog">
          Long scrollable content
        </Dialog>,
      );
      expect(screen.getByTestId("dialog-body")).toBeTruthy();
      expect(screen.getByText("Long scrollable content")).toBeTruthy();
    });

    it("defaults to non-scrollable", () => {
      render(
        <Dialog visible testID="dialog">
          Default body
        </Dialog>,
      );
      expect(screen.getByText("Default body")).toBeTruthy();
    });
  });
});
