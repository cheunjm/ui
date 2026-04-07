import { render, screen } from "@/test-utils";
import { Text } from "tamagui";
import { OverviewLayout, SectionLabel, VariantLabel } from "./OverviewLayout";

describe("SectionLabel", () => {
  it("renders the label text", () => {
    render(<SectionLabel label="Default" />);
    expect(screen.getByText("Default")).toBeTruthy();
  });
});

describe("VariantLabel", () => {
  it("renders the label text", () => {
    render(<VariantLabel label="Filled" />);
    expect(screen.getByText("Filled")).toBeTruthy();
  });
});

describe("OverviewLayout", () => {
  it("renders the view name", () => {
    render(
      <OverviewLayout
        viewName="atoms/badge/overview"
        variants={[{ name: "default", render: () => <Text>Badge</Text> }]}
      />
    );
    expect(screen.getByText("atoms/badge/overview")).toBeTruthy();
  });

  it("renders all variant labels", () => {
    render(
      <OverviewLayout
        viewName="atoms/button/overview"
        variants={[
          { name: "filled", render: () => <Text>Filled</Text> },
          { name: "outlined", render: () => <Text>Outlined</Text> },
        ]}
      />
    );
    expect(screen.getByText("filled")).toBeTruthy();
    expect(screen.getByText("outlined")).toBeTruthy();
  });

  it("renders variant content", () => {
    render(
      <OverviewLayout
        viewName="test"
        variants={[{ name: "v1", render: () => <Text testID="content">Content</Text> }]}
      />
    );
    expect(screen.getByTestId("content")).toBeTruthy();
  });
});
