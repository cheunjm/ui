import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "tamagui";
import { Card } from "../../card";
import type { CardProps } from "../../card.type";

const meta: Meta<CardProps> = {
  title: "atoms/card/variants",
  component: Card,
  args: {
    children: (
      <>
        <Text fontWeight="600" marginBottom={4}>Card Title</Text>
        <Text color="#49454F">Card supporting text content.</Text>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<CardProps>;

export const Elevated: Story = {
  args: { variant: "elevated" },
};

export const Filled: Story = {
  args: { variant: "filled" },
};

export const Outlined: Story = {
  args: { variant: "outlined" },
};
