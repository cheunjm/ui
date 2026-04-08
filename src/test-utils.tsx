import { render, type RenderOptions } from "@testing-library/react-native";
import { TamaguiProvider, Theme } from "tamagui";
import type { ReactElement } from "react";
import config from "./tokens/tamagui.config";

type CustomRenderOptions = RenderOptions & {
  theme?: "light" | "dark";
};

function createWrapper(theme?: "light" | "dark") {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <TamaguiProvider config={config}>
        {theme ? <Theme name={theme}>{children}</Theme> : children}
      </TamaguiProvider>
    );
  };
}

function renderWithProvider(
  ui: ReactElement,
  options?: Omit<CustomRenderOptions, "wrapper">,
) {
  const { theme, ...renderOptions } = options ?? {};
  return render(ui, { wrapper: createWrapper(theme), ...renderOptions });
}

export { renderWithProvider as render };
export { screen, fireEvent, waitFor } from "@testing-library/react-native";
