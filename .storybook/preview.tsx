import type { Preview } from "@storybook/react";
import React from "react";
import { TamaguiProvider } from "tamagui";
import config from "../src/tokens/tamagui.config";

const env = (import.meta as any).env?.STORYBOOK_ENV as string | undefined;

function EnvBanner() {
  if (!env || env === "main") return null;

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
  decorators: [
    (Story) => (
      <TamaguiProvider config={config}>
        <EnvBanner />
        <div style={{ paddingTop: env && env !== "main" ? 24 : 0 }}>
          <Story />
        </div>
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
    options: {
      storySort: {
        order: [
          'Atoms',
          [
            'Button',
            ['Overview', 'Anatomy', 'Specs', 'Variants'],
          ],
        ],
      },
    },
  },
};

export default preview;
