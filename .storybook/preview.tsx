import type { Preview } from "@storybook/react";
import { TamaguiProvider } from "tamagui";
import config from "../src/tokens/tamagui.config";

const preview: Preview = {
  decorators: [
    (Story) => (
      <TamaguiProvider config={config}>
        <Story />
      </TamaguiProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
