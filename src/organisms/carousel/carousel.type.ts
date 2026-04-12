import type { ReactNode } from "react";

export type CarouselVariant =
  | "multi-browse"
  | "uncontained"
  | "full-screen"
  | "hero";

export type CarouselItem = {
  /** Unique key */
  key: string;
  /** Content to render in the carousel item */
  content: ReactNode;
};

export type CarouselProps = {
  /** Carousel layout variant. Default: "multi-browse" */
  variant?: CarouselVariant;
  /** Items to display */
  items: CarouselItem[];
  /** Whether to show pagination dots. Default: true */
  showDots?: boolean;
  /** Test ID */
  testID?: string;
};
