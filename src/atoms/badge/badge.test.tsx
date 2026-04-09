import { render, screen } from "@/test-utils";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders small dot badge by default", () => {
    render(<Badge testID="badge" />);
    expect(screen.getByTestId("badge")).toBeTruthy();
  });

  it("renders large badge with count", () => {
    render(<Badge size="large" count={5} testID="badge" />);
    expect(screen.getByText("5")).toBeTruthy();
  });

  it("caps count at 999+", () => {
    render(<Badge size="large" count={1500} testID="badge" />);
    expect(screen.getByText("999+")).toBeTruthy();
  });

  it("renders large badge without count", () => {
    const { toJSON } = render(<Badge size="large" testID="badge" />);
    expect(toJSON()).toBeTruthy();
  });

  it("does not show count on small badge", () => {
    const { toJSON } = render(<Badge size="small" count={5} testID="badge" />);
    expect(toJSON()).toBeTruthy();
    expect(screen.queryByText("5")).toBeNull();
  });

  it("renders with custom testID", () => {
    render(<Badge testID="custom-badge" />);
    expect(screen.getByTestId("custom-badge")).toBeTruthy();
  });

  it("has accessibility role text for large badge", () => {
    render(<Badge size="large" count={3} testID="a11y-badge" />);
    const element = screen.getByTestId("a11y-badge");
    expect(element.props.accessibilityRole).toBe("text");
  });

  it("has default accessibility label for large badge with count", () => {
    render(<Badge size="large" count={3} testID="a11y-badge" />);
    const element = screen.getByTestId("a11y-badge");
    expect(element.props.accessibilityLabel).toBe("3 notifications");
  });

  it("forwards custom accessibilityLabel", () => {
    render(<Badge size="large" count={5} accessibilityLabel="5 unread" testID="a11y-badge" />);
    const element = screen.getByTestId("a11y-badge");
    expect(element.props.accessibilityLabel).toBe("5 unread");
  });
});
