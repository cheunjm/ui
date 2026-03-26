import { render, type RenderOptions } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";
import type { ReactElement } from "react";
import config from "./tokens/tamagui.config";

function AllProviders({ children }: { children: React.ReactNode }) {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
}

function renderWithProvider(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

export { renderWithProvider as render };
export { screen, fireEvent, waitFor } from "@testing-library/react-native";
