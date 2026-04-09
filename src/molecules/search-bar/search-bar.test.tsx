import { render, screen, fireEvent } from "@/test-utils";
import { SearchBar } from "./search-bar";

describe("SearchBar", () => {
  it("renders with default props", () => {
    render(<SearchBar testID="sb" />);
    expect(screen.getByTestId("sb")).toBeTruthy();
  });

  it("renders with placeholder text", () => {
    render(<SearchBar placeholder="Find items" testID="sb" />);
    expect(screen.getByTestId("sb-input")).toBeTruthy();
  });

  it("renders with value", () => {
    render(<SearchBar value="hello" testID="sb" />);
    expect(screen.getByTestId("sb-input").props.value).toBe("hello");
  });

  it("shows clear button when value is present", () => {
    render(<SearchBar value="text" testID="sb" />);
    expect(screen.getByTestId("sb-clear")).toBeTruthy();
  });

  it("does not show clear button when value is empty", () => {
    render(<SearchBar value="" testID="sb" />);
    expect(screen.queryByTestId("sb-clear")).toBeNull();
  });

  it("fires onChangeText", () => {
    const onChangeText = jest.fn();
    render(<SearchBar onChangeText={onChangeText} testID="sb" />);
    fireEvent.changeText(screen.getByTestId("sb-input"), "query");
    expect(onChangeText).toHaveBeenCalledWith("query");
  });

  it("fires onSubmit on submit editing", () => {
    const onSubmit = jest.fn();
    render(<SearchBar onSubmit={onSubmit} testID="sb" />);
    fireEvent(screen.getByTestId("sb-input"), "submitEditing");
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("renders disabled", () => {
    const { toJSON } = render(<SearchBar disabled testID="sb" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<SearchBar testID="custom-search" />);
    expect(screen.getByTestId("custom-search")).toBeTruthy();
  });

  it("hides clear button when showClearButton is false", () => {
    render(<SearchBar value="text" showClearButton={false} testID="sb" />);
    expect(screen.queryByTestId("sb-clear")).toBeNull();
  });

  it("renders trailing icon instead of clear button", () => {
    render(<SearchBar value="text" trailingIcon="mic" testID="sb" />);
    expect(screen.getByTestId("sb-trailing")).toBeTruthy();
    expect(screen.queryByTestId("sb-clear")).toBeNull();
  });

  it("has search accessibility role on container", () => {
    render(<SearchBar testID="a11y-sb" />);
    const element = screen.getByTestId("a11y-sb");
    expect(element.props.accessibilityRole).toBe("search");
  });

  it("forwards accessibilityLabel to container", () => {
    render(<SearchBar accessibilityLabel="Search items" testID="a11y-sb" />);
    const element = screen.getByTestId("a11y-sb");
    expect(element.props.accessibilityLabel).toBe("Search items");
  });

  describe("dark mode", () => {
    it("renders in dark theme without crashing", () => {
      render(<SearchBar testID="dark-test" />, { theme: "dark" });
      expect(screen.getByTestId("dark-test")).toBeTruthy();
    });
  });
});
