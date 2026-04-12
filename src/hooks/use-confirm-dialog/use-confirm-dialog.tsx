import { useCallback, useState } from "react";
import { Text } from "react-native";
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

  const showConfirmDialog = useCallback(
    (options: ShowConfirmDialogOptions) => {
      setState({ ...options, visible: true });
    },
    [],
  );

  const handleConfirm = useCallback(() => {
    setState((prev) => ({ ...prev, visible: false }));
    state.onConfirm();
  }, [state]);

  const handleDismiss = useCallback(() => {
    setState((prev) => ({ ...prev, visible: false }));
    state.onDismiss?.();
  }, [state]);

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
          <Text>{state.message}</Text>
        </Dialog>
      ) : null,
    [state, handleConfirm, handleDismiss],
  );

  return { showConfirmDialog, ConfirmDialogPortal };
}
