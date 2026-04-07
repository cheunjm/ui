import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "tamagui";
import { Carousel } from "../../carousel";
import type { CarouselProps } from "../../carousel.type";

const sampleItems = [
  {
    key: "1",
    content: (
      <View backgroundColor="#E8DEF8" height={200} borderRadius={12} />
    ),
  },
  {
    key: "2",
    content: (
      <View backgroundColor="#D0BCFF" height={200} borderRadius={12} />
    ),
  },
  {
    key: "3",
    content: (
      <View backgroundColor="#CCC2DC" height={200} borderRadius={12} />
    ),
  },
];

const meta: Meta<CarouselProps> = {
  title: "organisms/carousel/variants",
  component: Carousel,
  args: {
    items: sampleItems,
  },
};

export default meta;
type Story = StoryObj<CarouselProps>;

export const MultiBrowse: Story = {
  args: { variant: "multi-browse" },
};

export const Uncontained: Story = {
  args: { variant: "uncontained" },
};

export const FullScreen: Story = {
  args: { variant: "full-screen" },
};
