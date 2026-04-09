import { render, screen, fireEvent } from "@/test-utils";
import { ListItem } from "./list-item";

describe("ListItem", () => {
  it("renders with headline only (one-line)", () => {
    render(<ListItem headline="Primary text" testID="list-item" />);
    expect(screen.getByTestId("list-item")).toBeTruthy();
    expect(screen.getByText("Primary text")).toBeTruthy();
  });

  it("renders with supporting text (two-line)", () => {
    render(
      <ListItem
        headline="Primary text"
        supportingText="Secondary text"
        testID="list-item"
      />,
    );
    expect(screen.getByText("Primary text")).toBeTruthy();
    expect(screen.getByText("Secondary text")).toBeTruthy();
  });

  it("renders with leading icon", () => {
    const { toJSON } = render(
      <ListItem headline="With icon" leadingContent="home" testID="list-item" />,
    );
    expect(screen.getByTestId("list-item")).toBeTruthy();
    expect(toJSON()).toBeTruthy();
  });

  it("renders with trailing text", () => {
    render(
      <ListItem
        headline="Primary text"
        trailingContent="100+"
        testID="list-item"
      />,
    );
    expect(screen.getByText("100+")).toBeTruthy();
  });

  it("renders with divider", () => {
    const { toJSON } = render(
      <ListItem headline="With divider" showDivider testID="list-item" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("fires onPress callback", () => {
    const onPress = jest.fn();
    render(
      <ListItem headline="Pressable" onPress={onPress} testID="list-item" />,
    );
    fireEvent.press(screen.getByText("Pressable"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("does not fire onPress when disabled", () => {
    const onPress = jest.fn();
    render(
      <ListItem
        headline="Disabled"
        disabled
        onPress={onPress}
        testID="list-item"
      />,
    );
    fireEvent.press(screen.getByText("Disabled"));
    expect(onPress).not.toHaveBeenCalled();
  });

  it("renders with custom testID", () => {
    render(<ListItem headline="Custom" testID="custom-list-item" />);
    expect(screen.getByTestId("custom-list-item")).toBeTruthy();
  });

  it("has button accessibility role when interactive", () => {
    render(<ListItem headline="Press" onPress={jest.fn()} testID="a11y-li" />);
    const item = screen.getByTestId("a11y-li");
    const pressable = item.children[0];
    expect(pressable.props.accessibilityRole).toBe("button");
  });

  it("has correct accessibility state when disabled", () => {
    render(<ListItem headline="Disabled" disabled onPress={jest.fn()} testID="a11y-li" />);
    const item = screen.getByTestId("a11y-li");
    const pressable = item.children[0];
    expect(pressable.props.accessibilityState).toEqual(
      expect.objectContaining({ disabled: true }),
    );
  });
});
