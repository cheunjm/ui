// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import deeperSortSetup from "storybook-deeper-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SUB_ORDER = ["overview", "variants", "anatomy", "specs"];

deeperSortSetup([
  "atoms",
  [
    "avatar",
    SUB_ORDER,
    "badge",
    SUB_ORDER,
    "button",
    SUB_ORDER,
    "card",
    SUB_ORDER,
    "checkbox",
    SUB_ORDER,
    "chip",
    SUB_ORDER,
    "divider",
    SUB_ORDER,
    "fab",
    SUB_ORDER,
    "icon",
    SUB_ORDER,
    "icon-button",
    SUB_ORDER,
    "progress-indicator",
    SUB_ORDER,
    "radio-button",
    SUB_ORDER,
    "segmented-button",
    SUB_ORDER,
    "skeleton",
    SUB_ORDER,
    "slider",
    SUB_ORDER,
    "spacer",
    SUB_ORDER,
    "switch",
    SUB_ORDER,
    "text",
    SUB_ORDER,
    "text-field",
    SUB_ORDER,
    "tooltip",
    SUB_ORDER,
  ],
  "molecules",
  [
    "accordion",
    SUB_ORDER,
    "banner",
    SUB_ORDER,
    "date-filter-chips",
    SUB_ORDER,
    "form-field",
    SUB_ORDER,
    "list-item",
    SUB_ORDER,
    "menu",
    SUB_ORDER,
    "search-bar",
    SUB_ORDER,
  ],
  "organisms",
  [
    "bottom-sheet",
    SUB_ORDER,
    "carousel",
    SUB_ORDER,
    "date-picker",
    SUB_ORDER,
    "dialog",
    SUB_ORDER,
    "navigation-bar",
    SUB_ORDER,
    "navigation-drawer",
    SUB_ORDER,
    "navigation-rail",
    SUB_ORDER,
    "search",
    SUB_ORDER,
    "snackbar",
    SUB_ORDER,
    "tab-bar",
    SUB_ORDER,
    "time-picker",
    SUB_ORDER,
    "top-app-bar",
    SUB_ORDER,
  ],
  "templates",
  [
    "dashboard-template",
    SUB_ORDER,
    "detail-template",
    SUB_ORDER,
    "empty-state-template",
    SUB_ORDER,
    "form-template",
    SUB_ORDER,
    "list-template",
    SUB_ORDER,
    "settings-template",
    SUB_ORDER,
  ],
]);

const config: StorybookConfig = {
  stories: ["../src/**/*.story.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-designs",
    "@storybook/addon-docs",
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
    viteConfig.define = {
      ...(viteConfig.define || {}),
      __DEV__: JSON.stringify(false),
    };
    return viteConfig;
  },
};

export default config;
