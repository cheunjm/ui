// Registers this package's own Unistyles theme for its Jest/Storybook
// environment. Consuming apps do this themselves (see README) — this file
// exists only so this repo's own tests and Storybook have a configured
// theme to render against.
import { StyleSheet } from "react-native-unistyles";
import { lightTheme, darkTheme } from "./src/tokens/unistyles.theme";

StyleSheet.configure({
  themes: { light: lightTheme, dark: darkTheme },
  settings: { initialTheme: "light" },
});
