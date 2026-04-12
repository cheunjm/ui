import { render, screen } from "@/test-utils";
import { View } from "tamagui";
import { Text } from "react-native";
import { ListTemplate } from "./list-template";

describe("ListTemplate", () => {
  it("renders with no props", () => {
    render(<ListTemplate testID="lt" />);
    expect(screen.getByTestId("lt")).toBeTruthy();
  });

  it("renders children in scrollable area", () => {
    render(
      <ListTemplate testID="lt">
        <Text testID="child">Item</Text>
      </ListTemplate>,
    );
    expect(screen.getByTestId("lt-scroll")).toBeTruthy();
    expect(screen.getByTestId("child")).toBeTruthy();
  });

  it("renders topBar slot", () => {
    render(<ListTemplate testID="lt" topBar={<View testID="top-bar" />} />);
    expect(screen.getByTestId("top-bar")).toBeTruthy();
  });

  it("renders headerContent slot", () => {
    render(
      <ListTemplate testID="lt" headerContent={<View testID="header" />} />,
    );
    expect(screen.getByTestId("header")).toBeTruthy();
  });

  it("renders bottomBar slot", () => {
    render(
      <ListTemplate testID="lt" bottomBar={<View testID="bottom-bar" />} />,
    );
    expect(screen.getByTestId("bottom-bar")).toBeTruthy();
  });

  it("renders all slots together", () => {
    render(
      <ListTemplate
        testID="lt"
        topBar={<View testID="top" />}
        headerContent={<View testID="header" />}
        bottomBar={<View testID="bottom" />}
      >
        <Text testID="content">Content</Text>
      </ListTemplate>,
    );
    expect(screen.getByTestId("top")).toBeTruthy();
    expect(screen.getByTestId("header")).toBeTruthy();
    expect(screen.getByTestId("lt-scroll")).toBeTruthy();
    expect(screen.getByTestId("content")).toBeTruthy();
    expect(screen.getByTestId("bottom")).toBeTruthy();
  });

  it("renders fab slot", () => {
    render(
      <ListTemplate testID="lt" fab={<Text testID="fab">FAB</Text>} />,
    );
    expect(screen.getByTestId("fab")).toBeTruthy();
  });
});
