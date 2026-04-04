import { render, screen, fireEvent } from "@/test-utils";
import { Text } from "react-native";
import { Tooltip } from "./tooltip";

describe("Tooltip", () => {
  it("renders children", () => {
    render(
      <Tooltip label="Tooltip text" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    expect(screen.getByTestId("tooltip")).toBeTruthy();
  });

  it("does not show tooltip content by default", () => {
    render(
      <Tooltip label="Help text" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    expect(screen.queryByText("Help text")).toBeNull();
  });

  it("shows plain tooltip on touch start", () => {
    render(
      <Tooltip label="Help text" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Help text")).toBeTruthy();
  });

  it("hides tooltip on touch end", () => {
    render(
      <Tooltip label="Help text" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Help text")).toBeTruthy();
    fireEvent(wrapper, "touchEnd");
    expect(screen.queryByText("Help text")).toBeNull();
  });

  it("renders plain variant by default", () => {
    render(
      <Tooltip label="Plain tip" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Plain tip")).toBeTruthy();
  });

  it("renders rich variant with description", () => {
    render(
      <Tooltip label="Title" description="Description" variant="rich" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Title")).toBeTruthy();
    expect(screen.getByText("Description")).toBeTruthy();
  });

  it("renders rich variant without description", () => {
    render(
      <Tooltip label="Title only" variant="rich" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Title only")).toBeTruthy();
  });

  it("renders rich variant with action button", () => {
    const onAction = jest.fn();
    render(
      <Tooltip label="Title" variant="rich" actionLabel="Learn more" onAction={onAction} testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Learn more")).toBeTruthy();
  });

  it("supports top placement (default)", () => {
    render(
      <Tooltip label="Top" placement="top" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Top")).toBeTruthy();
  });

  it("supports bottom placement", () => {
    render(
      <Tooltip label="Bottom" placement="bottom" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Bottom")).toBeTruthy();
  });

  it("supports left placement", () => {
    render(
      <Tooltip label="Left" placement="left" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Left")).toBeTruthy();
  });

  it("supports right placement", () => {
    render(
      <Tooltip label="Right" placement="right" testID="tooltip">
        <Text>Trigger</Text>
      </Tooltip>
    );
    const wrapper = screen.getByTestId("tooltip").children[0];
    fireEvent(wrapper, "touchStart");
    expect(screen.getByText("Right")).toBeTruthy();
  });
});
