import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";
import config from "../../../tamagui.config";
import { DatePicker } from "./date-picker";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={config}>{children}</TamaguiProvider>
);

describe("DatePicker", () => {
  it("renders when visible", () => {
    const { getByTestId } = render(
      <DatePicker
        visible
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="date-picker"
      />,
      { wrapper }
    );
    expect(getByTestId("date-picker")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    const { queryByTestId } = render(
      <DatePicker
        visible={false}
        onConfirm={jest.fn()}
        onDismiss={jest.fn()}
        testID="date-picker"
      />,
      { wrapper }
    );
    expect(queryByTestId("date-picker")).toBeNull();
  });

  it("calls onDismiss when cancel pressed", () => {
    const onDismiss = jest.fn();
    const { getByText } = render(
      <DatePicker visible onConfirm={jest.fn()} onDismiss={onDismiss} testID="dp" />,
      { wrapper }
    );
    fireEvent.press(getByText("Cancel"));
    expect(onDismiss).toHaveBeenCalled();
  });

  it("calls onConfirm when OK pressed", () => {
    const onConfirm = jest.fn();
    const { getByText } = render(
      <DatePicker visible onConfirm={onConfirm} onDismiss={jest.fn()} testID="dp" />,
      { wrapper }
    );
    fireEvent.press(getByText("OK"));
    expect(onConfirm).toHaveBeenCalled();
  });
});
