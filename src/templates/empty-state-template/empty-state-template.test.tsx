import { render, screen } from "@/test-utils";
import { Text } from "react-native";
import { EmptyStateTemplate } from "./empty-state-template";

describe("EmptyStateTemplate", () => {
  it("renders with all props", () => {
    render(
      <EmptyStateTemplate
        icon="inbox"
        title="No items"
        body="You have no items yet."
        action={<Text testID="action-btn">Add item</Text>}
        testID="empty-state"
      />,
    );
    expect(screen.getByTestId("empty-state")).toBeTruthy();
    expect(screen.getByText("No items")).toBeTruthy();
    expect(screen.getByText("You have no items yet.")).toBeTruthy();
    expect(screen.getByTestId("action-btn")).toBeTruthy();
  });

  it("renders with title only", () => {
    render(<EmptyStateTemplate title="Nothing here" testID="empty-state" />);
    expect(screen.getByTestId("empty-state")).toBeTruthy();
    expect(screen.getByText("Nothing here")).toBeTruthy();
  });

  it("renders with topBar", () => {
    render(
      <EmptyStateTemplate
        topBar={<Text testID="top-bar">Header</Text>}
        title="Empty"
        testID="empty-state"
      />,
    );
    expect(screen.getByTestId("top-bar")).toBeTruthy();
    expect(screen.getByText("Empty")).toBeTruthy();
  });

  it("renders without optional props", () => {
    const { toJSON } = render(<EmptyStateTemplate testID="empty-state" />);
    expect(screen.getByTestId("empty-state")).toBeTruthy();
    expect(toJSON()).toBeTruthy();
  });
});
