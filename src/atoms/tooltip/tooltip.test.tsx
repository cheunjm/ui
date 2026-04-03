import React from "react";
import { render } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";
import config from "../../../tamagui.config";
import { Tooltip } from "./tooltip";
import { Text } from "../text";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={config}>{children}</TamaguiProvider>
);

describe("Tooltip", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Tooltip label="Tooltip text" testID="tooltip">
        <Text variant="bodyMedium">Trigger</Text>
      </Tooltip>,
      { wrapper }
    );
    expect(getByText("Trigger")).toBeTruthy();
  });

  it("renders plain variant", () => {
    const { getByTestId } = render(
      <Tooltip label="Plain tip" variant="plain" testID="tooltip">
        <Text variant="bodyMedium">Trigger</Text>
      </Tooltip>,
      { wrapper }
    );
    expect(getByTestId("tooltip")).toBeTruthy();
  });

  it("renders rich variant with description", () => {
    const { getByTestId } = render(
      <Tooltip
        label="Rich title"
        description="Rich description text"
        variant="rich"
        testID="tooltip"
      >
        <Text variant="bodyMedium">Trigger</Text>
      </Tooltip>,
      { wrapper }
    );
    expect(getByTestId("tooltip")).toBeTruthy();
  });
});
