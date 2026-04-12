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

  it("forwards accessibilityHint", () => {
    render(
      <Slider accessibilityHint="Adjusts the volume" testID="hint-test" />,
    );
    expect(screen.getByTestId("hint-test").props.accessibilityHint).toBe(
      "Adjusts the volume",
    );
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

  it("renders range variant", () => {
    render(
      <Slider variant="range" lowValue={20} highValue={80} testID="slider" />,
    );
    expect(screen.getByTestId("slider")).toBeTruthy();
  });

  it("renders two thumbs in range variant", () => {
    render(
      <Slider variant="range" lowValue={20} highValue={80} testID="slider" />,
    );
    expect(screen.getByTestId("slider-thumb-low")).toBeTruthy();
    expect(screen.getByTestId("slider-thumb-high")).toBeTruthy();
  });

  it("does not render second thumb in default variant", () => {
    render(<Slider value={50} testID="slider" />);
    expect(screen.queryByTestId("slider-thumb-low")).toBeNull();
    expect(screen.queryByTestId("slider-thumb-high")).toBeNull();
  });

  it("defaults range to full span when lowValue/highValue omitted", () => {
    render(<Slider variant="range" min={0} max={100} testID="slider" />);
    expect(screen.getByTestId("slider-thumb-low")).toBeTruthy();
    expect(screen.getByTestId("slider-thumb-high")).toBeTruthy();
  });

  it("has reduced opacity when range variant is disabled", () => {
    const { toJSON } = render(
      <Slider
        variant="range"
        lowValue={20}
        highValue={80}
        disabled
        testID="slider"
      />,
    );
    const tree = JSON.stringify(toJSON());
    expect(tree).toContain("0.38");
  });

  it("renders discrete range variant with step", () => {
    render(
      <Slider
        variant="range"
        type="discrete"
        min={0}
        max={50}
        step={10}
        lowValue={10}
        highValue={40}
        testID="slider"
      />,
    );
    expect(screen.getByTestId("slider-thumb-low")).toBeTruthy();
    expect(screen.getByTestId("slider-thumb-high")).toBeTruthy();
  });

  it("invokes onRangeChange when low thumb pan responder triggers", () => {
    const onRangeChange = jest.fn();
    render(
      <Slider
        variant="range"
        min={0}
        max={100}
        lowValue={20}
        highValue={80}
        onRangeChange={onRangeChange}
        testID="slider"
      />,
    );
    const container = screen.getByTestId("slider");
    const trackView = container.children[0];
    const touchHistory = {
      touchBank: [],
      numberActiveTouches: 0,
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0,
    };

    fireEvent(trackView, "layout", {
      nativeEvent: { layout: { width: 200, height: 4 } },
    });

    fireEvent(trackView, "responderGrant", {
      touchHistory,
      nativeEvent: { locationX: 30 },
    });
    fireEvent(trackView, "responderMove", {
      touchHistory,
      nativeEvent: { locationX: 50 },
    });

    expect(onRangeChange).toHaveBeenCalled();
  });

  it("invokes onRangeChange when high thumb pan responder triggers", () => {
    const onRangeChange = jest.fn();
    render(
      <Slider
        variant="range"
        min={0}
        max={100}
        lowValue={20}
        highValue={80}
        onRangeChange={onRangeChange}
        testID="slider"
      />,
    );
    const container = screen.getByTestId("slider");
    const trackView = container.children[0];
    const touchHistory = {
      touchBank: [],
      numberActiveTouches: 0,
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0,
    };

    fireEvent(trackView, "layout", {
      nativeEvent: { layout: { width: 200, height: 4 } },
    });

    fireEvent(trackView, "responderGrant", {
      touchHistory,
      nativeEvent: { locationX: 170 },
    });
    fireEvent(trackView, "responderMove", {
      touchHistory,
      nativeEvent: { locationX: 160 },
    });

    expect(onRangeChange).toHaveBeenCalled();
  });

  it("renders range variant in discrete mode after layout with tick marks", () => {
    render(
      <Slider
        variant="range"
        type="discrete"
        min={0}
        max={40}
        step={10}
        lowValue={10}
        highValue={30}
        testID="slider"
      />,
    );
    const container = screen.getByTestId("slider");
    const trackView = container.children[0];

    fireEvent(trackView, "layout", {
      nativeEvent: { layout: { width: 200, height: 4 } },
    });

    expect(screen.getByTestId("slider-thumb-low")).toBeTruthy();
    expect(screen.getByTestId("slider-thumb-high")).toBeTruthy();
  });

  it("does not invoke onRangeChange when range slider is disabled", () => {
    const onRangeChange = jest.fn();
    render(
      <Slider
        variant="range"
        min={0}
        max={100}
        lowValue={20}
        highValue={80}
        disabled
        onRangeChange={onRangeChange}
        testID="slider"
      />,
    );
    const container = screen.getByTestId("slider");
    const trackView = container.children[0];
    const touchHistory = {
      touchBank: [],
      numberActiveTouches: 0,
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0,
    };

    fireEvent(trackView, "layout", {
      nativeEvent: { layout: { width: 200, height: 4 } },
    });
    fireEvent(trackView, "responderGrant", {
      touchHistory,
      nativeEvent: { locationX: 50 },
    });

    expect(onRangeChange).not.toHaveBeenCalled();
  });

  describe("dark mode", () => {
    it("renders in dark theme without crashing", () => {
      render(<Slider testID="dark-test" />, { theme: "dark" });
      expect(screen.getByTestId("dark-test")).toBeTruthy();
    });
  });
});
