import { render, screen } from "@/test-utils";
import { Avatar } from "./avatar";

describe("Avatar", () => {
  it("renders image variant when source is provided", () => {
    render(
      <Avatar
        source={{ uri: "https://example.com/avatar.png" }}
        testID="avatar"
      />,
    );
    expect(screen.getByTestId("avatar")).toBeTruthy();
    expect(screen.getByTestId("avatar-image")).toBeTruthy();
  });

  it("renders initials variant with two-word name", () => {
    render(<Avatar name="John Doe" testID="avatar" />);
    expect(screen.getByText("JD")).toBeTruthy();
  });

  it("renders initials variant with single name", () => {
    render(<Avatar name="Alice" testID="avatar" />);
    expect(screen.getByText("A")).toBeTruthy();
  });

  it("falls back to icon variant when name is empty string", () => {
    render(<Avatar name="" testID="avatar" />);
    expect(screen.getByTestId("avatar-icon")).toBeTruthy();
  });

  it("renders icon variant when no source or name provided", () => {
    render(<Avatar testID="avatar" />);
    expect(screen.getByTestId("avatar-icon")).toBeTruthy();
  });

  it("prioritizes image over initials", () => {
    render(
      <Avatar
        source={{ uri: "https://example.com/avatar.png" }}
        name="John Doe"
        testID="avatar"
      />,
    );
    expect(screen.getByTestId("avatar-image")).toBeTruthy();
    expect(screen.queryByText("JD")).toBeNull();
  });

  it("renders small size", () => {
    render(<Avatar size="small" testID="avatar" />);
    expect(screen.getByTestId("avatar")).toBeTruthy();
  });

  it("renders medium size (default)", () => {
    render(<Avatar testID="avatar" />);
    expect(screen.getByTestId("avatar")).toBeTruthy();
  });

  it("renders large size", () => {
    render(<Avatar size="large" testID="avatar" />);
    expect(screen.getByTestId("avatar")).toBeTruthy();
  });

  it("accepts custom color prop", () => {
    render(<Avatar color="#FF0000" testID="avatar" />);
    expect(screen.getByTestId("avatar")).toBeTruthy();
  });

  it("propagates testID", () => {
    render(<Avatar testID="custom-avatar" />);
    expect(screen.getByTestId("custom-avatar")).toBeTruthy();
  });
});
