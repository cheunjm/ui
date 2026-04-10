import { render, screen, fireEvent } from "@/test-utils";
import { Text } from "tamagui";
import { FullScreenDialog } from "./full-screen-dialog";

describe("FullScreenDialog", () => {
  const defaultProps = {
    visible: true,
    title: "Edit Profile",
    actionLabel: "Save",
    onAction: jest.fn(),
    onClose: jest.fn(),
    testID: "fsd",
  };

  it("renders when visible", () => {
    render(<FullScreenDialog {...defaultProps} />);
    expect(screen.getByTestId("fsd")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    render(<FullScreenDialog {...defaultProps} visible={false} />);
    expect(screen.queryByTestId("fsd")).toBeNull();
  });

  it("displays title in header", () => {
    render(<FullScreenDialog {...defaultProps} />);
    expect(screen.getByTestId("fsd-title")).toBeTruthy();
  });

  it("calls onClose when close button is pressed", () => {
    const onClose = jest.fn();
    render(<FullScreenDialog {...defaultProps} onClose={onClose} />);
    fireEvent.press(screen.getByTestId("fsd-close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onAction when action button is pressed", () => {
    const onAction = jest.fn();
    render(<FullScreenDialog {...defaultProps} onAction={onAction} />);
    fireEvent.press(screen.getByTestId("fsd-action"));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("renders children in scrollable body", () => {
    render(
      <FullScreenDialog {...defaultProps}>
        <Text testID="child-content">Form content here</Text>
      </FullScreenDialog>,
    );
    expect(screen.getByTestId("child-content")).toBeTruthy();
    expect(screen.getByTestId("fsd-body")).toBeTruthy();
  });

  it("renders header with border", () => {
    render(<FullScreenDialog {...defaultProps} />);
    expect(screen.getByTestId("fsd-header")).toBeTruthy();
  });

  it("does not call onAction when actionDisabled is true", () => {
    const onAction = jest.fn();
    render(
      <FullScreenDialog {...defaultProps} onAction={onAction} actionDisabled />,
    );
    fireEvent.press(screen.getByTestId("fsd-action"));
    expect(onAction).not.toHaveBeenCalled();
  });

  it("renders without testID", () => {
    const { title, actionLabel, onAction, onClose } = defaultProps;
    render(
      <FullScreenDialog
        visible
        title={title}
        actionLabel={actionLabel}
        onAction={onAction}
        onClose={onClose}
      />,
    );
    expect(screen.getByText("Edit Profile")).toBeTruthy();
  });
});
