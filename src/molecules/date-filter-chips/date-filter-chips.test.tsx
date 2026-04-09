import { render, screen, fireEvent } from "@/test-utils";
import { DateFilterChips } from "./date-filter-chips";
import type { DateFilterOption } from "./date-filter-chips.type";

const options: DateFilterOption[] = [
  { value: "today", label: "Today" },
  { value: "this-week", label: "This Week" },
  { value: "this-month", label: "This Month" },
  { value: "this-year", label: "This Year" },
];

describe("DateFilterChips", () => {
  it("renders all options", () => {
    render(<DateFilterChips options={options} testID="date-filter" />);
    expect(screen.getByText("Today")).toBeTruthy();
    expect(screen.getByText("This Week")).toBeTruthy();
    expect(screen.getByText("This Month")).toBeTruthy();
    expect(screen.getByText("This Year")).toBeTruthy();
  });

  it("renders selected chip", () => {
    render(
      <DateFilterChips
        options={options}
        selectedValue="this-week"
        testID="date-filter"
      />,
    );
    expect(screen.getByTestId("date-filter-chip-this-week")).toBeTruthy();
  });

  it("fires onSelectionChange when chip is pressed", () => {
    const onSelectionChange = jest.fn();
    render(
      <DateFilterChips
        options={options}
        onSelectionChange={onSelectionChange}
        testID="date-filter"
      />,
    );
    fireEvent.press(screen.getByTestId("date-filter-chip-this-month"));
    expect(onSelectionChange).toHaveBeenCalledWith("this-month");
  });

  it("renders disabled without crash", () => {
    const { toJSON } = render(
      <DateFilterChips options={options} disabled testID="date-filter" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<DateFilterChips options={options} testID="custom-filter" />);
    expect(screen.getByTestId("custom-filter")).toBeTruthy();
  });

  it("has radiogroup accessibility role on container", () => {
    render(<DateFilterChips options={options} testID="a11y-filter" />);
    const element = screen.getByTestId("a11y-filter");
    expect(element.props.accessibilityRole).toBe("radiogroup");
  });
});
