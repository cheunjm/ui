import { render, screen, fireEvent } from "@/test-utils";
import { SegmentedButton } from "./segmented-button";

const segments = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];

describe("SegmentedButton", () => {
  it("renders with segments", () => {
    render(
      <SegmentedButton
        segments={segments}
        selected="day"
        testID="seg"
      />,
    );
    expect(screen.getByText("Day")).toBeTruthy();
    expect(screen.getByText("Week")).toBeTruthy();
    expect(screen.getByText("Month")).toBeTruthy();
  });

  it("renders selected segment", () => {
    render(
      <SegmentedButton
        segments={segments}
        selected="day"
        testID="seg"
      />,
    );
    const segment = screen.getByTestId("seg-segment-day");
    expect(segment.props.accessibilityState.selected).toBe(true);
  });

  it("renders multi-select mode", () => {
    render(
      <SegmentedButton
        segments={segments}
        selected={["day", "week"]}
        multiSelect
        testID="seg"
      />,
    );
    expect(
      screen.getByTestId("seg-segment-day").props.accessibilityState.selected,
    ).toBe(true);
    expect(
      screen.getByTestId("seg-segment-week").props.accessibilityState.selected,
    ).toBe(true);
    expect(
      screen.getByTestId("seg-segment-month").props.accessibilityState
        .selected,
    ).toBe(false);
  });

  it("fires onSelectionChange callback", () => {
    const onSelectionChange = jest.fn();
    render(
      <SegmentedButton
        segments={segments}
        selected="day"
        onSelectionChange={onSelectionChange}
        testID="seg"
      />,
    );
    fireEvent.press(screen.getByTestId("seg-segment-week"));
    expect(onSelectionChange).toHaveBeenCalledWith("week");
  });

  it("renders with icons", () => {
    const segmentsWithIcons = [
      { value: "list", label: "List", icon: "list" },
      { value: "grid", label: "Grid", icon: "grid-view" },
    ];
    render(
      <SegmentedButton
        segments={segmentsWithIcons}
        selected="list"
        testID="seg"
      />,
    );
    expect(screen.getByText("List")).toBeTruthy();
    expect(screen.getByText("Grid")).toBeTruthy();
  });

  it("renders disabled without crash", () => {
    render(
      <SegmentedButton
        segments={segments}
        selected="day"
        disabled
        testID="seg"
      />,
    );
    expect(screen.getByTestId("seg")).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(
      <SegmentedButton
        segments={segments}
        selected="day"
        testID="custom-seg"
      />,
    );
    expect(screen.getByTestId("custom-seg")).toBeTruthy();
  });
});
