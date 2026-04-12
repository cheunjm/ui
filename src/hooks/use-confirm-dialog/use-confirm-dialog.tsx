import { useCallback, useRef, useState } from "react";
import { Dialog } from "../../organisms/dialog";
import type {
  ShowConfirmDialogOptions,
  UseConfirmDialogReturn,
} from "./use-confirm-dialog.type";

type DialogState = ShowConfirmDialogOptions & { visible: boolean };

const INITIAL_STATE: DialogState = {
  visible: false,
  title: "",
  message: "",
  onConfirm: () => {},
};

export function useConfirmDialog(): UseConfirmDialogReturn {
  const [state, setState] = useState<DialogState>(INITIAL_STATE);
  const onConfirmRef = useRef<() => void>(() => {});
  const onDismissRef = useRef<(() => void) | undefined>(undefined);

  const showConfirmDialog = useCallback(
    (options: ShowConfirmDialogOptions) => {
      onConfirmRef.current = options.onConfirm;
      onDismissRef.current = options.onDismiss;
      setState({ ...options, visible: true });
    },
    [],
  );

  const handleConfirm = useCallback(() => {
    setState((prev) => ({ ...prev, visible: false }));
    onConfirmRef.current?.();
  }, []);

  const handleDismiss = useCallback(() => {
    setState((prev) => ({ ...prev, visible: false }));
    onDismissRef.current?.();
  }, []);

  const ConfirmDialogPortal = useCallback(
    () =>
      state.visible ? (
        <Dialog
          visible={state.visible}
          title={state.title}
          confirmLabel={state.confirmLabel ?? "확인"}
          dismissLabel={state.dismissLabel ?? "취소"}
          onConfirm={handleConfirm}
          onDismiss={handleDismiss}
        >
          {state.message}
        </Dialog>
      ) : null,
    [state, handleConfirm, handleDismiss],
  );

  return { showConfirmDialog, ConfirmDialogPortal };
}
