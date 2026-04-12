import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // @ts-expect-error -- deeperSort is set by storybook-deeper-sort at import time
      storySort: (a: any, b: any) => globalThis.deeperSort(a, b),
    },
  },
};

export default preview;
