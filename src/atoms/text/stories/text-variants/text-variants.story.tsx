import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../text";
import type { TextProps } from "../../text.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<TextProps> = {
  title: "atoms/text/variants",
  component: Text,
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}52-4`,
    },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Display: Story = {
  args: { role: "display", size: "medium" },
};

export const Headline: Story = {
  args: { role: "headline", size: "medium" },
};

export const Title: Story = {
  args: { role: "title", size: "medium" },
};

export const Body: Story = {
  args: { role: "body", size: "medium" },
};

export const Label: Story = {
  args: { role: "label", size: "medium" },
};
