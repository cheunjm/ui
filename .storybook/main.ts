import type { StorybookConfig } from "@storybook/react-vite";
import { join } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.story.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-designs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  viteFinal: async (viteConfig) => {
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      "react-native": "react-native-web",
      "@expo/vector-icons/MaterialIcons": join(
        __dirname,
        "../src/mocks/expo-vector-icons.tsx",
      ),
      "@": join(__dirname, "../src"),
    };
    return viteConfig;
  },
};

export default config;
