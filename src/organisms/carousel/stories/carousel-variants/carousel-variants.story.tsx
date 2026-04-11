import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "tamagui";
import { Carousel } from "../../carousel";
import type { CarouselProps } from "../../carousel.type";

const sampleItems = [
  {
    key: "1",
    content: <View backgroundColor="#E8DEF8" height={200} borderRadius={12} />,
  },
  {
    key: "2",
    content: <View backgroundColor="#D0BCFF" height={200} borderRadius={12} />,
  },
  {
    key: "3",
    content: <View backgroundColor="#CCC2DC" height={200} borderRadius={12} />,
  },
];

const FIGMA_BASE =
  "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=";

const meta: Meta<CarouselProps> = {
  title: "organisms/carousel/variants",
  component: Carousel,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}3-11` },
  },
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

export const Hero: Story = {
  args: {
    variant: "hero",
    items: [
      {
        key: "1",
        content: <View style={{ flex: 1, backgroundColor: "#E8DEF8" }} />,
      },
      {
        key: "2",
        content: <View style={{ flex: 1, backgroundColor: "#D0BCFF" }} />,
      },
      {
        key: "3",
        content: <View style={{ flex: 1, backgroundColor: "#EADDFF" }} />,
      },
    ],
  },
};
