import { render, screen } from "@/test-utils";
import { Text } from "tamagui";
import { renderHook } from "@testing-library/react-native";
import { UiProvider } from "./UiProvider";
import { useThemeMode } from "./ThemeContext";

describe("UiProvider", () => {
  it("renders children", () => {
    render(
      <UiProvider>
        <Text testID="child">hello</Text>
      </UiProvider>
    );
    expect(screen.getByTestId("child")).toBeTruthy();
  });

  it("defaults to light theme", () => {
    const { result } = renderHook(() => useThemeMode(), {
      wrapper: ({ children }) => <UiProvider>{children}</UiProvider>,
    });
    expect(result.current.mode).toBe("light");
    expect(result.current.resolved).toBe("light");
  });

  it("accepts defaultTheme='dark'", () => {
    const { result } = renderHook(() => useThemeMode(), {
      wrapper: ({ children }) => (
        <UiProvider defaultTheme="dark">{children}</UiProvider>
      ),
    });
    expect(result.current.mode).toBe("dark");
    expect(result.current.resolved).toBe("dark");
  });

  it("useThemeMode returns setMode function", () => {
    const { result } = renderHook(() => useThemeMode(), {
      wrapper: ({ children }) => <UiProvider>{children}</UiProvider>,
    });
    expect(typeof result.current.setMode).toBe("function");
  });
});
