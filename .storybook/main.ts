// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.story.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-designs",
    "@storybook/addon-docs"
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
