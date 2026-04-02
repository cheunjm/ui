import { render, screen, fireEvent } from "@/test-utils";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("renders unchecked by default", () => {
    render(<Checkbox testID="cb" />);
    expect(screen.getByTestId("cb")).toBeTruthy();
  });

  it("renders checked state", () => {
    const { toJSON } = render(<Checkbox state="checked" testID="cb" />);
    expect(screen.getByTestId("cb")).toBeTruthy();
    expect(toJSON()).toBeTruthy();
  });

  it("renders indeterminate state", () => {
    const { toJSON } = render(
      <Checkbox state="indeterminate" testID="cb" />,
    );
    expect(screen.getByTestId("cb")).toBeTruthy();
    expect(toJSON()).toBeTruthy();
  });

  it("renders disabled without crash", () => {
    const { toJSON } = render(<Checkbox disabled testID="cb" />);
    expect(toJSON()).toBeTruthy();
  });

  it("fires onPress callback", () => {
    const onPress = jest.fn();
    render(<Checkbox onPress={onPress} testID="cb" />);
    fireEvent.press(screen.getByTestId("cb"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders with error prop", () => {
    const { toJSON } = render(<Checkbox error testID="cb" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with custom testID", () => {
    render(<Checkbox testID="custom-cb" />);
    expect(screen.getByTestId("custom-cb")).toBeTruthy();
  });
});
