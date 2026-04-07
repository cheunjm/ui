import type { Preview } from "@storybook/react-vite";
import React from "react";
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
  decorators: [
    (Story) => (
      <UiProvider>
        <EnvBanner />
        <div style={{ paddingTop: env && env !== "master" ? 24 : 0 }}>
          <Story />
        </div>
      </UiProvider>
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
          'atoms',
          [
            'badge', ['overview', 'anatomy', 'specs', 'variants'],
            'button', ['overview', 'anatomy', 'specs', 'variants'],
            'card', ['overview', 'anatomy', 'specs', 'variants'],
            'checkbox', ['overview', 'anatomy', 'specs', 'variants'],
            'chip', ['overview', 'anatomy', 'specs', 'variants'],
            'divider', ['overview', 'anatomy', 'specs', 'variants'],
            'fab', ['overview', 'anatomy', 'specs', 'variants'],
            'icon', ['overview', 'anatomy', 'specs', 'variants'],
            'icon-button', ['overview', 'anatomy', 'specs', 'variants'],
            'progress-indicator', ['overview', 'anatomy', 'specs', 'variants'],
            'radio-button', ['overview', 'anatomy', 'specs', 'variants'],
            'segmented-button', ['overview', 'anatomy', 'specs', 'variants'],
            'slider', ['overview', 'anatomy', 'specs', 'variants'],
            'spacer', ['overview', 'anatomy', 'specs', 'variants'],
            'switch', ['overview', 'anatomy', 'specs', 'variants'],
            'text', ['overview', 'anatomy', 'specs', 'variants'],
            'text-field', ['overview', 'anatomy', 'specs', 'variants'],
            'tooltip', ['overview', 'anatomy', 'specs', 'variants'],
          ],
          'molecules',
          [
            'date-filter-chips', ['overview', 'anatomy', 'specs', 'variants'],
            'form-field', ['overview', 'anatomy', 'specs', 'variants'],
            'list-item', ['overview', 'anatomy', 'specs', 'variants'],
            'menu', ['overview', 'anatomy', 'specs', 'variants'],
            'search-bar', ['overview', 'anatomy', 'specs', 'variants'],
          ],
          'organisms',
          [
            'bottom-sheet', ['overview', 'anatomy', 'specs', 'variants'],
            'carousel', ['overview', 'anatomy', 'specs', 'variants'],
            'date-picker', ['overview', 'anatomy', 'specs', 'variants'],
            'dialog', ['overview', 'anatomy', 'specs', 'variants'],
            'navigation-bar', ['overview', 'anatomy', 'specs', 'variants'],
            'navigation-drawer', ['overview', 'anatomy', 'specs', 'variants'],
            'snackbar', ['overview', 'anatomy', 'specs', 'variants'],
            'time-picker', ['overview', 'anatomy', 'specs', 'variants'],
            'top-app-bar', ['overview', 'anatomy', 'specs', 'variants'],
          ],
          'templates',
          [
            'detail-template', ['overview', 'anatomy', 'specs', 'variants'],
            'empty-state-template', ['overview', 'anatomy', 'specs', 'variants'],
            'form-template', ['overview', 'anatomy', 'specs', 'variants'],
            'list-template', ['overview', 'anatomy', 'specs', 'variants'],
          ],
        ],
      },
    },
  },
};

export default preview;
