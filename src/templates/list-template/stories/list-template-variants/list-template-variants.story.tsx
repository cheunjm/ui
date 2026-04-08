import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text } from "tamagui";
import { ListTemplate } from "../../list-template";
import type { ListTemplateProps } from "../../list-template.type";

const FIGMA_BASE =
  "https://www.figma.com/design/HaGgCBIkDbJ2jVZp0dUFR0/templates?node-id=";

const meta: Meta<ListTemplateProps> = {
  title: "templates/list-template/variants",
  component: ListTemplate,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}4-11` },
  },
};

export default meta;
type Story = StoryObj<ListTemplateProps>;

export const FullLayout: Story = {
  args: {
    topBar: (
      <View bg="#E8DEF8" h={64} w="100%" ai="center" jc="center">
        <Text>Top Bar</Text>
      </View>
    ),
    headerContent: (
      <View bg="#F3EDF7" h={48} w="100%" ai="center" jc="center">
        <Text>Search / Filters</Text>
      </View>
    ),
    children: (
      <View p={16} gap={8}>
        <Text>List item 1</Text>
        <Text>List item 2</Text>
        <Text>List item 3</Text>
      </View>
    ),
    bottomBar: (
      <View bg="#E8DEF8" h={64} w="100%" ai="center" jc="center">
        <Text>Bottom Navigation</Text>
      </View>
    ),
  },
};

export const WithoutBottomBar: Story = {
  args: {
    topBar: (
      <View bg="#E8DEF8" h={64} w="100%" ai="center" jc="center">
        <Text>Top Bar</Text>
      </View>
    ),
    headerContent: (
      <View bg="#F3EDF7" h={48} w="100%" ai="center" jc="center">
        <Text>Search / Filters</Text>
      </View>
    ),
    children: (
      <View p={16} gap={8}>
        <Text>List item 1</Text>
        <Text>List item 2</Text>
      </View>
    ),
  },
};

export const MinimalList: Story = {
  args: {
    children: (
      <View p={16} gap={8}>
        <Text>List item 1</Text>
        <Text>List item 2</Text>
        <Text>List item 3</Text>
      </View>
    ),
  },
};
