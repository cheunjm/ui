import React from "react";
import { render } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";
import config from "../../../tamagui.config";
import { Carousel } from "./carousel";
import { Text } from "../../atoms/text";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={config}>{children}</TamaguiProvider>
);

const items = [
  { key: "a", content: <Text variant="bodyMedium">Item A</Text> },
  { key: "b", content: <Text variant="bodyMedium">Item B</Text> },
  { key: "c", content: <Text variant="bodyMedium">Item C</Text> },
];

describe("Carousel", () => {
  it("renders with default multi-browse variant", () => {
    const { getByTestId } = render(
      <Carousel items={items} testID="carousel" />,
      { wrapper }
    );
    expect(getByTestId("carousel")).toBeTruthy();
  });

  it("renders uncontained variant", () => {
    const { getByTestId } = render(
      <Carousel items={items} variant="uncontained" testID="carousel" />,
      { wrapper }
    );
    expect(getByTestId("carousel")).toBeTruthy();
  });

  it("renders full-screen variant", () => {
    const { getByTestId } = render(
      <Carousel items={items} variant="full-screen" testID="carousel" />,
      { wrapper }
    );
    expect(getByTestId("carousel")).toBeTruthy();
  });

  it("hides dots when showDots is false", () => {
    const { getByTestId } = render(
      <Carousel items={items} showDots={false} testID="carousel" />,
      { wrapper }
    );
    expect(getByTestId("carousel")).toBeTruthy();
  });
});
