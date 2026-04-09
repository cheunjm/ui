import { render, screen, fireEvent } from "@/test-utils";
import { Menu } from "./menu";

const items = [
  { key: "edit", label: "Edit", onPress: jest.fn() },
  { key: "delete", label: "Delete", onPress: jest.fn() },
  { key: "disabled", label: "Disabled", onPress: jest.fn(), disabled: true },
];

describe("Menu", () => {
  it("renders when visible", () => {
    render(<Menu visible onDismiss={jest.fn()} items={items} testID="menu" />);
    expect(screen.getByTestId("menu")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    render(<Menu visible={false} onDismiss={jest.fn()} items={items} testID="menu" />);
    expect(screen.queryByTestId("menu")).toBeNull();
  });

  it("calls onPress for enabled item", () => {
    const onPress = jest.fn();
    render(
      <Menu
        visible
        onDismiss={jest.fn()}
        items={[{ key: "a", label: "A", onPress }]}
        testID="menu"
      />
    );
    fireEvent.press(screen.getByTestId("menu-item-a"));
    expect(onPress).toHaveBeenCalled();
  });

  it("does not call onPress for disabled item", () => {
    const onPress = jest.fn();
    render(
      <Menu
        visible
        onDismiss={jest.fn()}
        items={[{ key: "d", label: "D", onPress, disabled: true }]}
        testID="menu"
      />
    );
    fireEvent.press(screen.getByTestId("menu-item-d"));
    expect(onPress).not.toHaveBeenCalled();
  });

  it("has menu accessibility role on container", () => {
    render(
      <Menu visible onDismiss={jest.fn()} items={items} testID="a11y-menu" />
    );
    const element = screen.getByTestId("a11y-menu");
    expect(element.props.accessibilityRole).toBe("menu");
  });

  it("has menuitem accessibility role on items", () => {
    render(
      <Menu visible onDismiss={jest.fn()} items={items} testID="a11y-menu" />
    );
    const item = screen.getByTestId("a11y-menu-item-edit");
    expect(item.props.accessibilityRole).toBe("menuitem");
  });

  it("has correct accessibility state on disabled item", () => {
    render(
      <Menu visible onDismiss={jest.fn()} items={items} testID="a11y-menu" />
    );
    const item = screen.getByTestId("a11y-menu-item-disabled");
    expect(item.props.accessibilityState).toEqual(
      expect.objectContaining({ disabled: true }),
    );
  });
});
