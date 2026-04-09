import { render, screen, fireEvent } from "@/test-utils";
import { Chip } from "./chip";

describe("Chip", () => {
  it("renders with label", () => {
    render(<Chip label="Assist" testID="chip" />);
    expect(screen.getByText("Assist")).toBeTruthy();
  });

  it("renders all chip types without crashing", () => {
    const types = ["assist", "filter", "input", "suggestion"] as const;
    types.forEach((type) => {
      const { unmount } = render(
        <Chip label="Test" type={type} testID="chip" />,
      );
      expect(screen.getByTestId("chip")).toBeTruthy();
      unmount();
    });
  });

  it("renders selected filter chip", () => {
    render(<Chip label="Selected" type="filter" selected testID="chip" />);
    expect(screen.getByText("Selected")).toBeTruthy();
  });

  it("renders with leading icon", () => {
    const { toJSON } = render(
      <Chip label="Event" leadingIcon="event" testID="chip" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders with trailing icon for input type", () => {
    render(
      <Chip label="Tag" type="input" trailingIcon="close" testID="chip" />,
    );
    expect(screen.getByTestId("chip-trailing")).toBeTruthy();
  });

  it("fires onPress callback", () => {
    const onPress = jest.fn();
    render(<Chip label="Press me" onPress={onPress} testID="chip" />);
    fireEvent.press(screen.getByTestId("chip"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("fires onTrailingIconPress callback", () => {
    const onTrailingIconPress = jest.fn();
    render(
      <Chip
        label="Remove"
        type="input"
        trailingIcon="close"
        onTrailingIconPress={onTrailingIconPress}
        testID="chip"
      />,
    );
    fireEvent.press(screen.getByTestId("chip-trailing"));
    expect(onTrailingIconPress).toHaveBeenCalledTimes(1);
  });

  it("renders disabled without crash", () => {
    const { toJSON } = render(<Chip label="Disabled" disabled testID="chip" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<Chip label="Custom" testID="custom-chip" />);
    expect(screen.getByTestId("custom-chip")).toBeTruthy();
  });

  it("has correct accessibility role", () => {
    render(<Chip label="Test" testID="a11y-chip" />);
    const element = screen.getByTestId("a11y-chip");
    expect(element.props.accessibilityRole).toBe("button");
  });

  it("forwards accessibilityHint", () => {
    render(
      <Chip
        label="Filter"
        accessibilityHint="Toggles the filter"
        testID="hint-test"
      />,
    );
    expect(screen.getByTestId("hint-test").props.accessibilityHint).toBe(
      "Toggles the filter",
    );
  });

  it("has correct accessibility state for selected filter chip", () => {
    render(<Chip label="Filter" type="filter" selected testID="a11y-chip" />);
    const element = screen.getByTestId("a11y-chip");
    expect(element.props.accessibilityState).toEqual(
      expect.objectContaining({ selected: true }),
    );
  });

  it("has correct accessibility state when disabled", () => {
    render(<Chip label="Disabled" disabled testID="a11y-chip" />);
    const element = screen.getByTestId("a11y-chip");
    expect(element.props.accessibilityState).toEqual(
      expect.objectContaining({ disabled: true }),
    );
  });

  describe("dark mode", () => {
    it("renders in dark theme without crashing", () => {
      render(<Chip label="Test" testID="dark-test" />, { theme: "dark" });
      expect(screen.getByTestId("dark-test")).toBeTruthy();
    });
  });
});
