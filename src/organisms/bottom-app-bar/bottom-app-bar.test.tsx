import { render, screen, fireEvent } from "@/test-utils";
import { BottomAppBar } from "./bottom-app-bar";

const actions = [
  { icon: "search", onPress: jest.fn(), accessibilityLabel: "Search" },
  { icon: "delete", onPress: jest.fn(), accessibilityLabel: "Delete" },
  { icon: "more-vert", onPress: jest.fn(), accessibilityLabel: "More", testID: "action-more" },
];

const fab = {
  icon: "add",
  onPress: jest.fn(),
  accessibilityLabel: "Add",
};

describe("BottomAppBar", () => {
  it("renders with testID", () => {
    render(<BottomAppBar testID="bar" />);
    expect(screen.getByTestId("bar")).toBeTruthy();
  });

  it("renders actions", () => {
    render(<BottomAppBar actions={actions} testID="bar" />);
    expect(screen.getByTestId("action-more")).toBeTruthy();
  });

  it("fires action onPress", () => {
    const onPress = jest.fn();
    render(
      <BottomAppBar
        actions={[{ icon: "search", onPress, accessibilityLabel: "Search", testID: "search-btn" }]}
      />
    );
    fireEvent.press(screen.getByTestId("search-btn"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders FAB when provided", () => {
    const { toJSON } = render(<BottomAppBar fab={fab} testID="bar" />);
    expect(toJSON()).toBeTruthy();
  });

  it("does not render FAB when not provided", () => {
    const { toJSON } = render(<BottomAppBar actions={actions} testID="bar" />);
    expect(toJSON()).toBeTruthy();
  });

  it("limits actions to 4", () => {
    const manyActions = Array.from({ length: 6 }, (_, i) => ({
      icon: "star",
      onPress: jest.fn(),
      accessibilityLabel: `Action ${i}`,
      testID: `action-${i}`,
    }));
    render(<BottomAppBar actions={manyActions} testID="bar" />);
    expect(screen.queryByTestId("action-4")).toBeNull();
  });
});
