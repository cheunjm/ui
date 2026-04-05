import { view } from "./storybook.requires";

const storage: { [key: string]: string } = {};

const StorybookUI = view.getStorybookUI({
  storage: {
    getItem: async (key: string) => storage[key] ?? null,
    setItem: async (key: string, value: string) => {
      storage[key] = value;
    },
  },
});

export default StorybookUI;
