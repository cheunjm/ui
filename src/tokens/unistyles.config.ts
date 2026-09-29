// Registers this package's Unistyles theme. Used by both this repo's own
// Storybook (.storybook/preview.tsx) and its Jest setup
// (jest.setup.unistyles.ts) — any environment that renders a component
// using StyleSheet.create from this package needs this to run first.
// Consuming apps do the equivalent themselves (see README).
import { StyleSheet } from "react-native-unistyles";
import { lightTheme, darkTheme } from "./unistyles.theme";

StyleSheet.configure({
  themes: { light: lightTheme, dark: darkTheme },
  settings: { initialTheme: "light" },
});
