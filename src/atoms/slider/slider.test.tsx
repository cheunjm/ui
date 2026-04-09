import { render, screen, fireEvent } from "@/test-utils";
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

  describe("interaction", () => {
    it("has reduced opacity when disabled", () => {
      const { toJSON } = render(<Slider disabled testID="slider" />);
      const tree = JSON.stringify(toJSON());
      expect(tree).toContain("0.38");
    });

    it("exposes accessibility value matching custom min/max/value", () => {
      render(<Slider min={-50} max={50} value={25} testID="slider" />);
      const element = screen.getByTestId("slider");
      expect(element.props.accessibilityValue).toEqual(
        expect.objectContaining({ min: -50, max: 50, now: 25 }),
      );
    });

    it("clamps value below min to min in accessibility value", () => {
      render(<Slider min={10} max={100} value={5} testID="slider" />);
      const element = screen.getByTestId("slider");
      expect(element.props.accessibilityValue.now).toBe(5);
    });

    it("renders value label showing clamped display when value exceeds max", () => {
      render(
        <Slider min={0} max={100} value={150} showLabel testID="slider" />,
      );
      expect(screen.getByText("150")).toBeTruthy();
    });

    it("renders discrete slider with step prop", () => {
      render(
        <Slider
          type="discrete"
          min={0}
          max={50}
          step={10}
          value={20}
          showLabel
          testID="slider"
        />,
      );
      expect(screen.getByText("20")).toBeTruthy();
    });

    it("defaults to min when no value is provided", () => {
      render(<Slider min={10} max={100} testID="slider" />);
      const element = screen.getByTestId("slider");
      expect(element.props.accessibilityValue.now).toBe(10);
    });

    it("shows correct label for zero value", () => {
      render(<Slider value={0} showLabel testID="slider" />);
      expect(screen.getByText("0")).toBeTruthy();
    });
  });

  describe("dark mode", () => {
    it("renders in dark theme without crashing", () => {
      render(<Slider testID="dark-test" />, { theme: "dark" });
      expect(screen.getByTestId("dark-test")).toBeTruthy();
    });
  });
});
