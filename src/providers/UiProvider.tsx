import type { ReactNode } from "react";
import { TamaguiProvider } from "tamagui";
import config from "../tokens/tamagui.config";

type UiProviderProps = {
  children: ReactNode;
};

export function UiProvider({ children }: UiProviderProps) {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
}
