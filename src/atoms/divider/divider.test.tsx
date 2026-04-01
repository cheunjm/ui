import { render, screen } from "@/test-utils";
import { Divider } from "./divider";

describe("Divider", () => {
  it("renders horizontal by default", () => {
    render(<Divider testID="divider" />);
    expect(screen.getByTestId("divider")).toBeTruthy();
  });

  it("renders vertical orientation", () => {
    const { toJSON } = render(
      <Divider orientation="vertical" testID="divider" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders all inset variants", () => {
    const insets = ["none", "insetLeft", "insetRight", "insetBoth"] as const;
    insets.forEach((inset) => {
      const { unmount } = render(
        <Divider inset={inset} testID="divider" />,
      );
      expect(screen.getByTestId("divider")).toBeTruthy();
      unmount();
    });
  });

  it("renders with accessibilityRole separator", () => {
    const { toJSON } = render(<Divider testID="divider" />);
    const tree = JSON.stringify(toJSON());
    expect(tree).toContain("separator");
  });

  it("renders with custom testID", () => {
    render(<Divider testID="custom-divider" />);
    expect(screen.getByTestId("custom-divider")).toBeTruthy();
  });

  it("accepts style overrides", () => {
    const { toJSON } = render(
      <Divider backgroundColor="$error" testID="divider" />,
    );
    expect(toJSON()).toBeTruthy();
  });
});
