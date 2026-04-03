import { render } from "@/test-utils";
import { Spacer } from "./spacer";

describe("Spacer", () => {
  it("renders with defaults without crashing", () => {
    const { toJSON } = render(<Spacer />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders vertical direction", () => {
    const { toJSON } = render(<Spacer direction="vertical" size={24} />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders horizontal direction", () => {
    const { toJSON } = render(<Spacer direction="horizontal" size={24} />);
    expect(toJSON()).toBeTruthy();
  });

  it("accepts custom size", () => {
    const { toJSON } = render(<Spacer size={48} />);
    expect(toJSON()).toBeTruthy();
  });
});
