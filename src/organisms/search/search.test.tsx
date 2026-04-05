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
    render(
      <Search active suggestions={suggestions} testID="search" />,
    );
    expect(screen.getByTestId("search-suggestions")).toBeTruthy();
    expect(screen.getByText("React Native")).toBeTruthy();
    expect(screen.getByText("Tamagui")).toBeTruthy();
  });

  it("hides suggestions when inactive", () => {
    render(
      <Search active={false} suggestions={suggestions} testID="search" />,
    );
    expect(screen.queryByTestId("search-suggestions")).toBeNull();
  });

  it("fires onChangeText", () => {
    const onChangeText = jest.fn();
    render(<Search onChangeText={onChangeText} testID="search" />);
    fireEvent.changeText(screen.getByTestId("search-bar-input"), "hello");
    expect(onChangeText).toHaveBeenCalledWith("hello");
  });

  it("fires suggestion onPress", () => {
    render(
      <Search active suggestions={suggestions} testID="search" />,
    );
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
    render(
      <Search active recentSearches={recentSearches} testID="search" />,
    );
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
});
