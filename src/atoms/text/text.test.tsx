import { render, screen } from "@/test-utils";
import { Text } from "./text";

describe("Text", () => {
  it("renders with default role and size", () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText("Hello")).toBeTruthy();
  });

  it("renders all MD3 roles without crashing", () => {
    const roles = ["display", "headline", "title", "body", "label"] as const;
    roles.forEach((role) => {
      const { unmount } = render(<Text role={role}>Text</Text>);
      expect(screen.getByText("Text")).toBeTruthy();
      unmount();
    });
  });

  it("renders all MD3 sizes without crashing", () => {
    const sizes = ["large", "medium", "small"] as const;
    sizes.forEach((size) => {
      const { unmount } = render(<Text size={size}>Text</Text>);
      expect(screen.getByText("Text")).toBeTruthy();
      unmount();
    });
  });

  it("renders children as text content", () => {
    render(<Text>Hello world</Text>);
    expect(screen.getByText("Hello world")).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<Text testID="custom-text">Label</Text>);
    expect(screen.getByTestId("custom-text")).toBeTruthy();
  });
});
