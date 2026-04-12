import type { StorybookConfig } from "@storybook/react-native";
import "../src/storybook-sort";

const main: StorybookConfig = {
  stories: ["../src/**/*.story.tsx"],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
};

export default main;
