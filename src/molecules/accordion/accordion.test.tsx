import { render, screen, fireEvent } from "@/test-utils";
import { Text } from "../../atoms/text";
import { Accordion, AccordionItem } from "./accordion";

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

describe("AccordionItem", () => {
  it("renders item with title", () => {
    render(
      <AccordionItem title="Section 1" testID="item">
        <Text>Content</Text>
      </AccordionItem>,
    );
    expect(screen.getByText("Section 1")).toBeTruthy();
  });

  it("renders supporting text", () => {
    render(
      <AccordionItem title="Section" supportingText="Details" testID="item">
        <Text>Content</Text>
      </AccordionItem>,
    );
    expect(screen.getByText("Details")).toBeTruthy();
  });

  it("renders content when defaultExpanded", () => {
    render(
      <AccordionItem title="Section" defaultExpanded testID="item">
        <Text>Expanded content</Text>
      </AccordionItem>,
    );
    expect(screen.getByText("Expanded content")).toBeTruthy();
  });

  it("renders content when controlled expanded", () => {
    render(
      <AccordionItem title="Section" expanded testID="item">
        <Text>Visible content</Text>
      </AccordionItem>,
    );
    expect(screen.getByText("Visible content")).toBeTruthy();
  });

  it("calls onToggle on header press", () => {
    const onToggle = jest.fn();
    render(
      <AccordionItem title="Toggle me" onToggle={onToggle} testID="item">
        <Text>Content</Text>
      </AccordionItem>,
    );
    fireEvent.press(screen.getByText("Toggle me"));
    expect(onToggle).toHaveBeenCalledWith(true);
  });

  it("chevron icon is present", () => {
    render(
      <AccordionItem title="Section" testID="item">
        <Text>Content</Text>
      </AccordionItem>,
    );
    expect(screen.getByTestId("item-chevron")).toBeTruthy();
  });

  it("disabled state prevents toggle", () => {
    const onToggle = jest.fn();
    render(
      <AccordionItem title="Disabled" disabled onToggle={onToggle} testID="item">
        <Text>Content</Text>
      </AccordionItem>,
    );
    fireEvent.press(screen.getByText("Disabled"));
    expect(onToggle).not.toHaveBeenCalled();
  });

  it("propagates testID", () => {
    render(
      <AccordionItem title="Test" testID="my-accordion-item">
        <Text>Content</Text>
      </AccordionItem>,
    );
    expect(screen.getByTestId("my-accordion-item")).toBeTruthy();
  });

  it("has button accessibility role on header", () => {
    render(
      <AccordionItem title="Section" testID="a11y-item">
        <Text>Content</Text>
      </AccordionItem>,
    );
    const item = screen.getByTestId("a11y-item");
    const pressable = item.children[0];
    expect(pressable.props.accessibilityRole).toBe("button");
  });

  it("has correct accessibility state when expanded", () => {
    render(
      <AccordionItem title="Section" expanded testID="a11y-item">
        <Text>Content</Text>
      </AccordionItem>,
    );
    const item = screen.getByTestId("a11y-item");
    const pressable = item.children[0];
    expect(pressable.props.accessibilityState).toEqual(
      expect.objectContaining({ expanded: true }),
    );
  });
});

describe("Accordion", () => {
  it("renders multiple items", () => {
    render(
      <Accordion testID="accordion">
        <Accordion.Item title="First" testID="first">
          <Text>Content 1</Text>
        </Accordion.Item>
        <Accordion.Item title="Second" testID="second">
          <Text>Content 2</Text>
        </Accordion.Item>
      </Accordion>,
    );
    expect(screen.getByTestId("accordion")).toBeTruthy();
    expect(screen.getByText("First")).toBeTruthy();
    expect(screen.getByText("Second")).toBeTruthy();
  });
});
