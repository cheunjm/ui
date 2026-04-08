import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text } from "tamagui";
import { DetailTemplate } from "../../detail-template";
import type { DetailTemplateProps } from "../../detail-template.type";

const FIGMA_BASE =
  "https://www.figma.com/design/HaGgCBIkDbJ2jVZp0dUFR0/templates?node-id=";

const meta: Meta<DetailTemplateProps> = {
  title: "templates/detail-template/variants",
  component: DetailTemplate,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}1-11` },
  },
};

export default meta;
type Story = StoryObj<DetailTemplateProps>;

export const WithTopBar: Story = {
  args: {
    topBar: (
      <View bg="#E8DEF8" h={64} w="100%" ai="center" jc="center">
        <Text>Top Bar</Text>
      </View>
    ),
    children: (
      <View p={16}>
        <Text>Detail content here</Text>
      </View>
    ),
  },
};

export const ContentOnly: Story = {
  args: {
    children: (
      <View p={16}>
        <Text>Detail content without a top bar</Text>
      </View>
    ),
  },
};
