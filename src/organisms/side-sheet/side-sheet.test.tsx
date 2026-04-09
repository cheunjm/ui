import { render, screen, fireEvent } from "@/test-utils";
import { Text } from "react-native";
import { SideSheet } from "./side-sheet";

describe("SideSheet", () => {
  it("renders children when open", () => {
    render(
      <SideSheet open onClose={jest.fn()}>
        <Text>Content</Text>
      </SideSheet>,
    );
    expect(screen.getByText("Content")).toBeTruthy();
  });

  it("does not show content when closed", () => {
    render(
      <SideSheet open={false} onClose={jest.fn()}>
        <Text>Hidden</Text>
      </SideSheet>,
    );
    expect(screen.queryByText("Hidden")).toBeNull();
  });

  it("renders header when provided", () => {
    render(
      <SideSheet open onClose={jest.fn()} header="Filters">
        <Text>Content</Text>
      </SideSheet>,
    );
    expect(screen.getByText("Filters")).toBeTruthy();
  });

  it("does not render header row when not provided", () => {
    render(
      <SideSheet open onClose={jest.fn()} testID="sheet">
        <Text>Content</Text>
      </SideSheet>,
    );
    expect(screen.queryByTestId("sheet-close")).toBeNull();
  });

  it("fires onClose when close button pressed", () => {
    const onClose = jest.fn();
    render(
      <SideSheet open onClose={onClose} header="Filters" testID="sheet">
        <Text>Content</Text>
      </SideSheet>,
    );
    fireEvent.press(screen.getByTestId("sheet-close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("applies testID to sheet panel", () => {
    render(
      <SideSheet open onClose={jest.fn()} testID="sheet">
        <Text>Content</Text>
      </SideSheet>,
    );
    expect(screen.getByTestId("sheet")).toBeTruthy();
  });

  describe("standard variant", () => {
    it("renders content without Modal", () => {
      render(
        <SideSheet open onClose={jest.fn()} variant="standard" testID="sheet">
          <Text>Standard content</Text>
        </SideSheet>,
      );
      expect(screen.getByText("Standard content")).toBeTruthy();
      expect(screen.queryByTestId("sheet-modal")).toBeNull();
    });

    it("renders without scrim", () => {
      render(
        <SideSheet open onClose={jest.fn()} variant="standard" testID="sheet">
          <Text>Content</Text>
        </SideSheet>,
      );
      expect(screen.queryByTestId("sheet-scrim")).toBeNull();
    });

    it("renders header in standard variant", () => {
      render(
        <SideSheet
          open
          onClose={jest.fn()}
          variant="standard"
          header="Settings"
          testID="sheet"
        >
          <Text>Content</Text>
        </SideSheet>,
      );
      expect(screen.getByText("Settings")).toBeTruthy();
    });

    it("close button works in standard variant", () => {
      const onClose = jest.fn();
      render(
        <SideSheet
          open
          onClose={onClose}
          variant="standard"
          header="Settings"
          testID="sheet"
        >
          <Text>Content</Text>
        </SideSheet>,
      );
      fireEvent.press(screen.getByTestId("sheet-close"));
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("modal variant (default)", () => {
    it("renders with Modal", () => {
      render(
        <SideSheet open onClose={jest.fn()} testID="sheet">
          <Text>Modal content</Text>
        </SideSheet>,
      );
      expect(screen.getByTestId("sheet-modal")).toBeTruthy();
    });

    it("renders scrim", () => {
      render(
        <SideSheet open onClose={jest.fn()} testID="sheet">
          <Text>Content</Text>
        </SideSheet>,
      );
      expect(screen.getByTestId("sheet-scrim")).toBeTruthy();
    });
  });
});
