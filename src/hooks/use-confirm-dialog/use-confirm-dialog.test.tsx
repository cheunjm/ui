import { act, renderHook } from "@testing-library/react-native";
import { useConfirmDialog } from "./use-confirm-dialog";

describe("useConfirmDialog", () => {
  it("returns showConfirmDialog and ConfirmDialogPortal", () => {
    const { result } = renderHook(() => useConfirmDialog());
    expect(typeof result.current.showConfirmDialog).toBe("function");
    expect(typeof result.current.ConfirmDialogPortal).toBe("function");
  });

  it("ConfirmDialogPortal returns null when not triggered", () => {
    const { result } = renderHook(() => useConfirmDialog());
    const portal = result.current.ConfirmDialogPortal();
    expect(portal).toBeNull();
  });

  it("ConfirmDialogPortal renders Dialog after showConfirmDialog is called", () => {
    const { result } = renderHook(() => useConfirmDialog());
    act(() => {
      result.current.showConfirmDialog({
        title: "Delete item?",
        message: "This cannot be undone.",
        onConfirm: jest.fn(),
      });
    });
    expect(result.current.ConfirmDialogPortal()).not.toBeNull();
  });

  it("calls onConfirm callback when confirmed", () => {
    const onConfirm = jest.fn();
    const { result } = renderHook(() => useConfirmDialog());
    act(() => {
      result.current.showConfirmDialog({
        title: "Confirm",
        message: "Are you sure?",
        onConfirm,
      });
    });
    // Simulate confirm press by extracting props
    const portal = result.current.ConfirmDialogPortal() as React.ReactElement;
    act(() => {
      portal.props.onConfirm();
    });
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("calls onDismiss callback when dismissed", () => {
    const onDismiss = jest.fn();
    const { result } = renderHook(() => useConfirmDialog());
    act(() => {
      result.current.showConfirmDialog({
        title: "Confirm",
        message: "Are you sure?",
        onConfirm: jest.fn(),
        onDismiss,
      });
    });
    const portal = result.current.ConfirmDialogPortal() as React.ReactElement;
    act(() => {
      portal.props.onDismiss();
    });
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("uses default labels when none provided", () => {
    const { result } = renderHook(() => useConfirmDialog());
    act(() => {
      result.current.showConfirmDialog({
        title: "Confirm",
        message: "Are you sure?",
        onConfirm: jest.fn(),
      });
    });
    const portal = result.current.ConfirmDialogPortal() as React.ReactElement;
    expect(portal.props.confirmLabel).toBe("확인");
    expect(portal.props.dismissLabel).toBe("취소");
  });
});
