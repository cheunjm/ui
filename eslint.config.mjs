// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, {
  files: ["**/*.{ts,tsx}"],
  plugins: {
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
  },
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-object-type": "off",
  },
}, {
  ignores: [
    "node_modules/",
    "storybook-static/",
    ".lostpixel/",
    ".ondevice/storybook.requires.ts",
    "coverage/",
    "dist/",
  ],
}, storybook.configs["flat/recommended"], {
  rules: {
    // @storybook/react is the standard import for Meta/StoryObj types in Vite-based Storybook
    "storybook/no-renderer-packages": "off",
  },
});
