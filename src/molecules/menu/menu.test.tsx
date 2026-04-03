import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";
import config from "../../../tamagui.config";
import { Menu } from "./menu";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={config}>{children}</TamaguiProvider>
);

const items = [
  { key: "edit", label: "Edit", onPress: jest.fn() },
  { key: "delete", label: "Delete", onPress: jest.fn() },
  { key: "disabled", label: "Disabled", onPress: jest.fn(), disabled: true },
];

describe("Menu", () => {
  it("renders when visible", () => {
    const { getByTestId } = render(
      <Menu visible onDismiss={jest.fn()} items={items} testID="menu" />,
      { wrapper }
    );
    expect(getByTestId("menu")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    const { queryByTestId } = render(
      <Menu visible={false} onDismiss={jest.fn()} items={items} testID="menu" />,
      { wrapper }
    );
    expect(queryByTestId("menu")).toBeNull();
  });

  it("calls onPress for enabled item", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Menu
        visible
        onDismiss={jest.fn()}
        items={[{ key: "a", label: "A", onPress }]}
        testID="menu"
      />,
      { wrapper }
    );
    fireEvent.press(getByTestId("menu-item-a"));
    expect(onPress).toHaveBeenCalled();
  });

  it("does not call onPress for disabled item", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Menu
        visible
        onDismiss={jest.fn()}
        items={[{ key: "d", label: "D", onPress, disabled: true }]}
        testID="menu"
      />,
      { wrapper }
    );
    fireEvent.press(getByTestId("menu-item-d"));
    expect(onPress).not.toHaveBeenCalled();
  });
});
