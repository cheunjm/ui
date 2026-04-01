import { render, screen } from "@/test-utils";
import { ProgressIndicator } from "./progress-indicator";

describe("ProgressIndicator", () => {
  it("renders linear type by default", () => {
    render(<ProgressIndicator testID="progress" />);
    expect(screen.getByTestId("progress")).toBeTruthy();
  });

  it("renders circular type", () => {
    render(<ProgressIndicator type="circular" testID="progress" />);
    expect(screen.getByTestId("progress")).toBeTruthy();
  });

  it("renders determinate mode with progress value", () => {
    render(
      <ProgressIndicator mode="determinate" progress={0.5} testID="progress" />
    );
    const el = screen.getByTestId("progress");
    expect(el).toBeTruthy();
    expect(el.props.accessibilityValue.now).toBe(50);
  });

  it("renders indeterminate mode without progress value", () => {
    render(<ProgressIndicator mode="indeterminate" testID="progress" />);
    const el = screen.getByTestId("progress");
    expect(el).toBeTruthy();
    expect(el.props.accessibilityValue.now).toBeUndefined();
  });

  it("renders with custom testID", () => {
    render(<ProgressIndicator testID="custom-progress" />);
    expect(screen.getByTestId("custom-progress")).toBeTruthy();
  });

  it("clamps progress to 0-1 range", () => {
    render(
      <ProgressIndicator mode="determinate" progress={1.5} testID="progress" />
    );
    const el = screen.getByTestId("progress");
    expect(el.props.accessibilityValue.now).toBe(100);
  });
});
