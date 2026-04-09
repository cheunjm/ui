import { render, screen } from "@/test-utils";
import { Slider } from "./slider";

describe("Slider", () => {
  it("renders with default props", () => {
    render(<Slider testID="slider" />);
    expect(screen.getByTestId("slider")).toBeTruthy();
  });

  it("renders continuous type", () => {
    const { toJSON } = render(
      <Slider type="continuous" value={50} testID="slider" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders discrete type", () => {
    const { toJSON } = render(
      <Slider type="discrete" step={10} value={30} testID="slider" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders with custom min/max", () => {
    const { toJSON } = render(
      <Slider min={10} max={200} value={100} testID="slider" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders disabled without crash", () => {
    const { toJSON } = render(<Slider disabled testID="slider" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with value label", () => {
    render(<Slider value={42} showLabel testID="slider" />);
    expect(screen.getByText("42")).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<Slider testID="custom-slider" />);
    expect(screen.getByTestId("custom-slider")).toBeTruthy();
  });

  it("has correct accessibility role", () => {
    render(<Slider testID="a11y-slider" />);
    const element = screen.getByTestId("a11y-slider");
    expect(element.props.accessibilityRole).toBe("adjustable");
  });

  it("has correct accessibility value", () => {
    render(<Slider value={50} min={0} max={100} testID="a11y-slider" />);
    const element = screen.getByTestId("a11y-slider");
    expect(element.props.accessibilityValue).toEqual(
      expect.objectContaining({ min: 0, max: 100, now: 50 }),
    );
  });

  describe("dark mode", () => {
    it("renders in dark theme without crashing", () => {
      render(<Slider testID="dark-test" />, { theme: "dark" });
      expect(screen.getByTestId("dark-test")).toBeTruthy();
    });
  });
});
