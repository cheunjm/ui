import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  external: [
    "react",
    "react-native",
    "react-native-unistyles",
    "tamagui",
    "expo",
    "expo-updates",
    "@expo/vector-icons",
    "@gorhom/bottom-sheet",
    "@react-native-community/datetimepicker",
    "@react-native-community/slider",
    "react-native-gesture-handler",
    "react-native-reanimated",
    "react-native-safe-area-context",
    "react-native-svg",
    "react-native-worklets",
    /^@tamagui\//,
  ],
});
