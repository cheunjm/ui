import { useState, useMemo, type ReactNode } from "react";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";
import config from "../tokens/tamagui.config";
import { ThemeContext, type ThemeMode } from "./ThemeContext";

type UiProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeMode;
};

export function UiProvider({ children, defaultTheme = "light" }: UiProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultTheme);
  const systemScheme = useColorScheme();

  const resolved: "light" | "dark" =
    mode === "system" ? (systemScheme === "dark" ? "dark" : "light") : mode;

  const themeContextValue = useMemo(
    () => ({ mode, resolved, setMode }),
    [mode, resolved],
  );

  return (
    <TamaguiProvider config={config}>
      <ThemeContext.Provider value={themeContextValue}>
        <Theme name={resolved}>{children}</Theme>
      </ThemeContext.Provider>
    </TamaguiProvider>
  );
}
