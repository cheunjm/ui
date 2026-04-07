import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text, XStack } from "tamagui";
import { FormTemplate } from "../../form-template";
import type { FormTemplateProps } from "../../form-template.type";

const meta: Meta<FormTemplateProps> = {
  title: "templates/form-template/variants",
  component: FormTemplate,
};

export default meta;
type Story = StoryObj<FormTemplateProps>;

export const WithActions: Story = {
  args: {
    topBar: (
      <View backgroundColor="#E8DEF8" height={64} width="100%" alignItems="center" justifyContent="center">
        <Text>Top Bar</Text>
      </View>
    ),
    children: (
      <View padding={16} gap={16}>
        <Text>Form field 1</Text>
        <Text>Form field 2</Text>
        <Text>Form field 3</Text>
      </View>
    ),
    actions: (
      <XStack gap={12} justifyContent="flex-end" padding={16}>
        <View backgroundColor="#E8DEF8" borderRadius={20} paddingHorizontal={24} paddingVertical={10}>
          <Text>Cancel</Text>
        </View>
        <View backgroundColor="#6750A4" borderRadius={20} paddingHorizontal={24} paddingVertical={10}>
          <Text color="#FFF">Submit</Text>
        </View>
      </XStack>
    ),
  },
};

export const ContentOnly: Story = {
  args: {
    children: (
      <View padding={16} gap={16}>
        <Text>Form field 1</Text>
        <Text>Form field 2</Text>
      </View>
    ),
  },
};
