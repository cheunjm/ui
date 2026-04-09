import { render, screen, fireEvent } from "@/test-utils";
import { Banner } from "./banner";

jest.mock("react-native-reanimated", () => {
  const { View } = require("react-native");
  return {
    __esModule: true,
    default: {
      View,
      createAnimatedComponent: (c: any) => c,
      call: () => {},
    },
    useSharedValue: (init: any) => ({ value: init }),
    useAnimatedStyle: (fn: any) => fn(),
    withTiming: (val: any) => val,
    withSpring: (val: any) => val,
    Easing: { linear: (v: any) => v },
  };
});

describe("Banner", () => {
  it("renders message text", () => {
    render(<Banner message="Test message" testID="banner" />);
    expect(screen.getByText("Test message")).toBeTruthy();
  });

  it("renders supporting text when provided", () => {
    render(
      <Banner
        message="Main message"
        supportingText="Extra detail"
        testID="banner"
      />,
    );
    expect(screen.getByText("Extra detail")).toBeTruthy();
  });

  it("does not render supporting text when not provided", () => {
    render(<Banner message="Main message" testID="banner" />);
    expect(screen.queryByText("Extra detail")).toBeNull();
  });

  it("renders icon when provided", () => {
    render(<Banner message="With icon" icon="info" testID="banner" />);
    expect(screen.getByTestId("banner-icon")).toBeTruthy();
  });

  it("renders action buttons", () => {
    const onAction = jest.fn();
    render(
      <Banner
        message="Actions"
        actions={[{ label: "Dismiss", onPress: onAction }]}
        testID="banner"
      />,
    );
    expect(screen.getByText("Dismiss")).toBeTruthy();
  });

  it("calls action onPress when pressed", () => {
    const onAction = jest.fn();
    render(
      <Banner
        message="Actions"
        actions={[{ label: "OK", onPress: onAction }]}
        testID="banner"
      />,
    );
    fireEvent.press(screen.getByText("OK"));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("propagates testID", () => {
    render(<Banner message="Test" testID="my-banner" />);
    expect(screen.getByTestId("my-banner")).toBeTruthy();
  });

  it("limits actions to 2", () => {
    render(
      <Banner
        message="Many actions"
        actions={[
          { label: "A", onPress: jest.fn() },
          { label: "B", onPress: jest.fn() },
          { label: "C", onPress: jest.fn() },
        ]}
        testID="banner"
      />,
    );
    expect(screen.getByText("A")).toBeTruthy();
    expect(screen.getByText("B")).toBeTruthy();
    expect(screen.queryByText("C")).toBeNull();
  });

  it("has alert accessibility role on container", () => {
    render(<Banner message="Alert" testID="a11y-banner" />);
    const banner = screen.getByTestId("a11y-banner");
    const container = banner.children[0];
    expect(container.props.accessibilityRole).toBe("alert");
  });

  it("has polite live region on container", () => {
    render(<Banner message="Alert" testID="a11y-banner" />);
    const banner = screen.getByTestId("a11y-banner");
    const container = banner.children[0];
    expect(container.props.accessibilityLiveRegion).toBe("polite");
  });
});
