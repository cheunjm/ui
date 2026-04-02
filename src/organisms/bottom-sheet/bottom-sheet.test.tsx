import { render, screen, fireEvent } from "@/test-utils";
import { Text } from "tamagui";

import { BottomSheet } from "./bottom-sheet";

describe("BottomSheet", () => {
  it("renders modal variant with children", () => {
    render(
      <BottomSheet visible testID="sheet">
        <Text>Sheet content</Text>
      </BottomSheet>,
    );
    expect(screen.getByText("Sheet content")).toBeTruthy();
  });

  it("renders standard variant without Modal", () => {
    render(
      <BottomSheet visible variant="standard" testID="sheet">
        <Text>Standard content</Text>
      </BottomSheet>,
    );
    expect(screen.getByText("Standard content")).toBeTruthy();
  });

  it("shows drag handle by default", () => {
    render(<BottomSheet visible testID="sheet" />);
    expect(screen.getByTestId("sheet-handle")).toBeTruthy();
  });

  it("hides drag handle when showDragHandle is false", () => {
    render(<BottomSheet visible showDragHandle={false} testID="sheet" />);
    expect(screen.queryByTestId("sheet-handle")).toBeNull();
  });

  it("calls onDismiss when scrim is pressed", () => {
    const onDismiss = jest.fn();
    render(<BottomSheet visible onDismiss={onDismiss} testID="sheet" />);
    fireEvent.press(screen.getByTestId("sheet-scrim"));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("renders with custom testID", () => {
    render(<BottomSheet visible testID="custom-sheet" />);
    expect(screen.getByTestId("custom-sheet")).toBeTruthy();
  });

  it("renders both variants without crashing", () => {
    const variants = ["modal", "standard"] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <BottomSheet visible variant={variant}>
          <Text>Content</Text>
        </BottomSheet>,
      );
      expect(screen.getByText("Content")).toBeTruthy();
      unmount();
    });
  });
});
