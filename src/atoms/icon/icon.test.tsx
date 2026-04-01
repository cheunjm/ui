import { render, screen } from "@/test-utils";
import { Icon } from "./icon";

describe("Icon", () => {
  it("renders with default size 24", () => {
    const { toJSON } = render(<Icon name="home" testID="icon" />);
    expect(screen.getByTestId("icon")).toBeTruthy();
    expect(toJSON()).toBeTruthy();
  });

  it("renders all MD3 size variants", () => {
    const sizes = [20, 24, 40, 48] as const;
    sizes.forEach((size) => {
      const { unmount } = render(
        <Icon name="home" size={size} testID="icon" />,
      );
      expect(screen.getByTestId("icon")).toBeTruthy();
      unmount();
    });
  });

  it("renders with custom color", () => {
    const { toJSON } = render(
      <Icon name="star" color="#FF0000" testID="icon" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders with theme token color", () => {
    const { toJSON } = render(
      <Icon name="star" color="$primary" testID="icon" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders with accessibility label", () => {
    render(<Icon name="home" accessibilityLabel="Home icon" testID="icon" />);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("renders different icon names", () => {
    const icons = ["home", "search", "settings", "close", "add"] as const;
    icons.forEach((name) => {
      const { unmount } = render(<Icon name={name} testID="icon" />);
      expect(screen.getByTestId("icon")).toBeTruthy();
      unmount();
    });
  });
});
