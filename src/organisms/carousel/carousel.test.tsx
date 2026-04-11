import { render, screen, fireEvent } from "@/test-utils";
import { Text, View } from "tamagui";
import { Carousel } from "./carousel";

const items = [
  { key: "a", content: <Text>Item A</Text> },
  { key: "b", content: <Text>Item B</Text> },
  { key: "c", content: <Text>Item C</Text> },
];

describe("Carousel", () => {
  it("renders with default multi-browse variant", () => {
    render(<Carousel items={items} testID="carousel" />);
    expect(screen.getByTestId("carousel")).toBeTruthy();
  });

  it("renders uncontained variant", () => {
    render(<Carousel items={items} variant="uncontained" testID="carousel" />);
    expect(screen.getByTestId("carousel")).toBeTruthy();
  });

  it("renders full-screen variant", () => {
    render(<Carousel items={items} variant="full-screen" testID="carousel" />);
    expect(screen.getByTestId("carousel")).toBeTruthy();
  });

  it("renders without dots when showDots is false", () => {
    render(<Carousel items={items} showDots={false} testID="carousel" />);
    expect(screen.getByTestId("carousel")).toBeTruthy();
  });

  it("renders hero variant", () => {
    const heroItems = [
      { key: "1", content: <View testID="hero-item" /> },
    ];
    render(<Carousel variant="hero" items={heroItems} testID="carousel" />);
    expect(screen.getByTestId("carousel")).toBeTruthy();
  });

  it("renders hero variant with multiple items", () => {
    const heroItems = [
      { key: "1", content: <View /> },
      { key: "2", content: <View /> },
      { key: "3", content: <View /> },
    ];
    const { toJSON } = render(
      <Carousel variant="hero" items={heroItems} showDots testID="carousel" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  describe("content and interaction", () => {
    it("renders all children content", () => {
      render(<Carousel items={items} testID="carousel" />);
      expect(screen.getByText("Item A")).toBeTruthy();
      expect(screen.getByText("Item B")).toBeTruthy();
      expect(screen.getByText("Item C")).toBeTruthy();
    });

    it("does not render dot row for single item", () => {
      const singleItem = [{ key: "only", content: <Text>Only</Text> }];
      render(<Carousel items={singleItem} showDots testID="carousel" />);
      expect(screen.getByText("Only")).toBeTruthy();
      const carousel = screen.getByTestId("carousel");
      expect(carousel.children.length).toBe(1);
    });

    it("renders correct number of items", () => {
      const fiveItems = Array.from({ length: 5 }, (_, i) => ({
        key: String(i),
        content: <Text>Slide {i}</Text>,
      }));
      render(<Carousel items={fiveItems} testID="carousel" />);
      fiveItems.forEach((_, i) => {
        expect(screen.getByText(`Slide ${i}`)).toBeTruthy();
      });
    });

    it("handles scroll event without crashing", () => {
      render(<Carousel items={items} testID="carousel" />);
      const scrollView = screen.getByTestId("carousel").children[0];
      fireEvent.scroll(scrollView, {
        nativeEvent: { contentOffset: { x: 240, y: 0 } },
      });
    });

    it("renders dot indicators when showDots is true and multiple items", () => {
      const { toJSON } = render(
        <Carousel items={items} showDots testID="carousel" />,
      );
      const tree = JSON.stringify(toJSON());
      expect(tree).toContain('borderTopLeftRadius":4');
    });
  });
});
