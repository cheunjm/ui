import { useUnistyles } from "react-native-unistyles";
import type { AppTheme } from "./unistyles.theme";

/**
 * Typed wrapper around react-native-unistyles' useUnistyles(), so this
 * package's own components typecheck against AppTheme without requiring
 * the consuming app to have declared the `UnistylesThemes` module
 * augmentation (that augmentation is still recommended for the app's own
 * styles, but isn't a prerequisite for this library to build).
 */
export function useAppTheme(): { theme: AppTheme } {
  const { theme } = useUnistyles();
  return { theme: theme as unknown as AppTheme };
}
