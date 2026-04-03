import { render, screen } from "@/test-utils";
import { Text } from "tamagui";
import { DetailTemplate } from "./detail-template";

describe("DetailTemplate", () => {
  it("renders with testID", () => {
    render(<DetailTemplate testID="detail" />);
    expect(screen.getByTestId("detail")).toBeTruthy();
  });

  it("renders topBar slot", () => {
    render(
      <DetailTemplate topBar={<Text testID="top-bar">Header</Text>} />,
    );
    expect(screen.getByTestId("top-bar")).toBeTruthy();
  });

  it("renders children in scrollable area", () => {
    render(
      <DetailTemplate>
        <Text testID="content">Detail content</Text>
      </DetailTemplate>,
    );
    expect(screen.getByTestId("content")).toBeTruthy();
  });

  it("renders with both topBar and children", () => {
    const { toJSON } = render(
      <DetailTemplate
        testID="detail"
        topBar={<Text testID="top-bar">Header</Text>}
      >
        <Text testID="content">Body</Text>
      </DetailTemplate>,
    );
    expect(screen.getByTestId("detail")).toBeTruthy();
    expect(screen.getByTestId("top-bar")).toBeTruthy();
    expect(screen.getByTestId("content")).toBeTruthy();
    expect(toJSON()).toBeTruthy();
  });

  it("renders without any props", () => {
    const { toJSON } = render(<DetailTemplate />);
    expect(toJSON()).toBeTruthy();
  });
});
