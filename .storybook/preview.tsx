import "../src/tokens/unistyles.config";
import type { Preview } from "@storybook/react-vite";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UiProvider } from "../src/providers";

const env = (import.meta as any).env?.STORYBOOK_ENV as string | undefined;

function EnvBanner() {
  if (!env || env === "master") return null;

  const colors: Record<string, { bg: string; text: string }> = {
    develop: { bg: "#FEF3C7", text: "#92400E" },
    stage: { bg: "#DBEAFE", text: "#1E40AF" },
  };
  const { bg, text } = colors[env] ?? { bg: "#F3F4F6", text: "#374151" };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: bg,
        color: text,
        textAlign: "center",
        padding: "4px 0",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: "uppercase",
      }}
    >
      {env}
    </div>
  );
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Theme mode",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      return (
        <SafeAreaProvider
          initialMetrics={{
            insets: { top: 0, left: 0, right: 0, bottom: 0 },
            frame: { x: 0, y: 0, width: 0, height: 0 },
          }}
        >
          <UiProvider defaultTheme={theme}>
            <EnvBanner />
            <div style={{ paddingTop: env && env !== "master" ? 24 : 0 }}>
              <Story />
            </div>
          </UiProvider>
        </SafeAreaProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // @ts-expect-error -- Storybook eval()s this at index time; TS annotations break eval
      storySort: (a, b) => globalThis.deeperSort(a, b),
    },
  },
};

export default preview;
