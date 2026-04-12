import { render, screen, fireEvent } from "@/test-utils";
import { Search } from "./search";

const suggestions = [
  { label: "React Native", icon: "trending-up", onPress: jest.fn() },
  { label: "Tamagui", icon: "code", onPress: jest.fn() },
];

const recentSearches = ["button component", "navigation bar"];

describe("Search", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders SearchBar", () => {
    render(<Search testID="search" />);
    expect(screen.getByTestId("search-bar")).toBeTruthy();
  });

  it("shows suggestions when active", () => {
    render(<Search active suggestions={suggestions} testID="search" />);
    expect(screen.getByTestId("search-suggestions")).toBeTruthy();
    expect(screen.getByText("React Native")).toBeTruthy();
    expect(screen.getByText("Tamagui")).toBeTruthy();
  });

  it("hides suggestions when inactive", () => {
    render(<Search active={false} suggestions={suggestions} testID="search" />);
    expect(screen.queryByTestId("search-suggestions")).toBeNull();
  });

  it("fires onChangeText", () => {
    const onChangeText = jest.fn();
    render(<Search onChangeText={onChangeText} testID="search" />);
    fireEvent.changeText(screen.getByTestId("search-bar-input"), "hello");
    expect(onChangeText).toHaveBeenCalledWith("hello");
  });

  it("fires suggestion onPress", () => {
    render(<Search active suggestions={suggestions} testID="search" />);
    fireEvent.press(screen.getByTestId("search-suggestion-0"));
    expect(suggestions[0].onPress).toHaveBeenCalled();
  });

  it("fires onRecentSearchPress", () => {
    const onRecentSearchPress = jest.fn();
    render(
      <Search
        active
        recentSearches={recentSearches}
        onRecentSearchPress={onRecentSearchPress}
        testID="search"
      />,
    );
    fireEvent.press(screen.getByTestId("search-recent-0"));
    expect(onRecentSearchPress).toHaveBeenCalledWith("button component");
  });

  it("renders recent searches", () => {
    render(<Search active recentSearches={recentSearches} testID="search" />);
    expect(screen.getByText("button component")).toBeTruthy();
    expect(screen.getByText("navigation bar")).toBeTruthy();
    expect(screen.getByText("Recent searches")).toBeTruthy();
  });

  it("back button fires onBack", () => {
    const onBack = jest.fn();
    render(<Search active onBack={onBack} testID="search" />);
    fireEvent.press(screen.getByTestId("search-back"));
    expect(onBack).toHaveBeenCalled();
  });

  it("fires onClearRecent when Clear all is pressed", () => {
    const onClearRecent = jest.fn();
    render(
      <Search
        active
        recentSearches={recentSearches}
        onClearRecent={onClearRecent}
        testID="search"
      />,
    );
    fireEvent.press(screen.getByText("Clear all"));
    expect(onClearRecent).toHaveBeenCalled();
  });

  it("fires onActiveChange when typing while inactive", () => {
    const onActiveChange = jest.fn();
    render(
      <Search active={false} onActiveChange={onActiveChange} testID="search" />,
    );
    fireEvent.changeText(screen.getByTestId("search-bar-input"), "q");
    expect(onActiveChange).toHaveBeenCalledWith(true);
  });

  it("fires onSubmit when submitted", () => {
    const onSubmit = jest.fn();
    render(<Search onSubmit={onSubmit} testID="search" />);
    fireEvent(screen.getByTestId("search-bar-input"), "submitEditing");
    expect(onSubmit).toHaveBeenCalled();
  });

  it("renders suggestion without icon", () => {
    const noIconSuggestions = [{ label: "No icon item", onPress: jest.fn() }];
    render(<Search active suggestions={noIconSuggestions} testID="search" />);
    expect(screen.getByText("No icon item")).toBeTruthy();
  });

  it("shows divider when both recent and suggestions present", () => {
    render(
      <Search
        active
        recentSearches={recentSearches}
        suggestions={suggestions}
        testID="search"
      />,
    );
    expect(screen.getByText("Recent searches")).toBeTruthy();
    expect(screen.getByText("React Native")).toBeTruthy();
  });

  it("does not call onActiveChange when already active and text changes", () => {
    const onActiveChange = jest.fn();
    render(<Search active onActiveChange={onActiveChange} testID="search" />);
    fireEvent.changeText(screen.getByTestId("search-bar-input"), "q");
    expect(onActiveChange).not.toHaveBeenCalled();
  });

  it("renders without testID", () => {
    render(
      <Search
        active
        suggestions={suggestions}
        recentSearches={recentSearches}
      />,
    );
    expect(screen.getByText("React Native")).toBeTruthy();
    expect(screen.getByText("Recent searches")).toBeTruthy();
  });

  it("renders recent searches without onClearRecent", () => {
    render(<Search active recentSearches={recentSearches} testID="search" />);
    expect(screen.queryByText("Clear all")).toBeNull();
  });

  it("renders Clear all without testID", () => {
    const onClearRecent = jest.fn();
    render(
      <Search
        active
        recentSearches={recentSearches}
        onClearRecent={onClearRecent}
      />,
    );
    expect(screen.getByText("Clear all")).toBeTruthy();
  });

  it("renders in full-screen variant with overlay positioning", () => {
    render(<Search variant="fullScreen" testID="search" />);
    expect(screen.getByTestId("search")).toBeTruthy();
  });

  it("shows suggestions in full-screen variant without active prop", () => {
    render(
      <Search
        variant="fullScreen"
        recentSearches={["react", "tamagui"]}
        testID="search"
      />,
    );
    expect(screen.getByTestId("search-suggestions")).toBeTruthy();
  });

  it("defaults to bar variant", () => {
    render(<Search testID="search" />);
    expect(screen.getByTestId("search")).toBeTruthy();
  });

  it("does not call onActiveChange when typing in fullScreen variant", () => {
    const onActiveChange = jest.fn();
    render(
      <Search
        variant="fullScreen"
        onActiveChange={onActiveChange}
        testID="search"
      />,
    );
    fireEvent.changeText(screen.getByTestId("search-bar-input"), "q");
    expect(onActiveChange).not.toHaveBeenCalled();
  });

  it("fires onBack when back button pressed in fullScreen variant", () => {
    const onBack = jest.fn();
    render(
      <Search variant="fullScreen" onBack={onBack} testID="search" />,
    );
    fireEvent.press(screen.getByTestId("search-back"));
    expect(onBack).toHaveBeenCalled();
  });
});
