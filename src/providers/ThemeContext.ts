import { createContext, useContext } from "react";

export type ThemeMode = "light" | "dark" | "system";

type ThemeContextValue = {
  mode: ThemeMode;
  resolved: "light" | "dark";
  setMode: (mode: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  mode: "light",
  resolved: "light",
  setMode: () => {},
});

export function useThemeMode() {
  return useContext(ThemeContext);
}
