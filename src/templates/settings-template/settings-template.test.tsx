import { render, screen } from "@/test-utils";
import { Text } from "tamagui";
import { SettingsTemplate } from "./settings-template";
import type { SettingsSection } from "./settings-template.type";

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

describe("SettingsTemplate", () => {
  const basicSections: SettingsSection[] = [
    {
      title: "General",
      items: [<Text key="1">Notifications</Text>, <Text key="2">Language</Text>],
    },
  ];

  it("renders with testID", () => {
    render(<SettingsTemplate testID="settings" sections={basicSections} />);
    expect(screen.getByTestId("settings")).toBeTruthy();
  });

  it("renders topBar slot", () => {
    render(
      <SettingsTemplate
        topBar={<Text>Settings Header</Text>}
        sections={basicSections}
      />,
    );
    expect(screen.getByText("Settings Header")).toBeTruthy();
  });

  it("renders section title", () => {
    render(<SettingsTemplate sections={basicSections} />);
    expect(screen.getByText("General")).toBeTruthy();
  });

  it("renders section items", () => {
    render(<SettingsTemplate sections={basicSections} />);
    expect(screen.getByText("Notifications")).toBeTruthy();
    expect(screen.getByText("Language")).toBeTruthy();
  });

  it("renders children", () => {
    render(
      <SettingsTemplate sections={basicSections}>
        <Text>Footer Content</Text>
      </SettingsTemplate>,
    );
    expect(screen.getByText("Footer Content")).toBeTruthy();
  });

  it("renders collapsible section with Accordion", () => {
    const collapsibleSections: SettingsSection[] = [
      {
        title: "Advanced",
        items: [<Text key="1">Debug Mode</Text>],
        collapsible: true,
        defaultExpanded: true,
      },
    ];
    render(
      <SettingsTemplate
        testID="settings"
        sections={collapsibleSections}
      />,
    );
    expect(screen.getByText("Advanced")).toBeTruthy();
    expect(screen.getByText("Debug Mode")).toBeTruthy();
  });

  it("propagates testID to collapsible sections", () => {
    const collapsibleSections: SettingsSection[] = [
      {
        title: "Privacy",
        items: [<Text key="1">Cookies</Text>],
        collapsible: true,
      },
    ];
    render(
      <SettingsTemplate testID="settings" sections={collapsibleSections} />,
    );
    expect(screen.getByTestId("settings-section-0")).toBeTruthy();
  });

  it("renders divider between multiple sections", () => {
    const multipleSections: SettingsSection[] = [
      {
        title: "General",
        items: [<Text key="1">Item 1</Text>],
      },
      {
        title: "Advanced",
        items: [<Text key="2">Item 2</Text>],
      },
    ];
    render(<SettingsTemplate sections={multipleSections} />);
    expect(screen.getByText("General")).toBeTruthy();
    expect(screen.getByText("Advanced")).toBeTruthy();
  });

  it("renders section without title", () => {
    const untitledSections: SettingsSection[] = [
      {
        items: [<Text key="1">No Title Item</Text>],
      },
    ];
    render(<SettingsTemplate sections={untitledSections} />);
    expect(screen.getByText("No Title Item")).toBeTruthy();
  });

  it("renders collapsible section without testID", () => {
    const collapsibleSections: SettingsSection[] = [
      {
        title: "Theme",
        items: [<Text key="1">Dark Mode</Text>],
        collapsible: true,
      },
    ];
    render(<SettingsTemplate sections={collapsibleSections} />);
    expect(screen.getByText("Theme")).toBeTruthy();
    expect(screen.getByText("Dark Mode")).toBeTruthy();
  });
});
