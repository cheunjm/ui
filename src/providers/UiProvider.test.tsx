import { render, screen } from "@/test-utils";
import { Text } from "tamagui";
import { UiProvider } from "./UiProvider";

describe("UiProvider", () => {
  it("renders children", () => {
    render(
      <UiProvider>
        <Text testID="child">hello</Text>
      </UiProvider>
    );
    expect(screen.getByTestId("child")).toBeTruthy();
  });
});
