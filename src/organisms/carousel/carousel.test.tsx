import { render, screen } from "@/test-utils";
import { Text } from "tamagui";
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
});
