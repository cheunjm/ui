import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack } from "tamagui";
import { FAB } from "../../fab";
import type { FabSize, FabColor } from "../../fab.type";
import { SectionLabel } from "../../../../storybook";

const sizes: FabSize[] = ["small", "regular", "large"];
const colors: FabColor[] = ["primary", "surface", "secondary", "tertiary"];

const sizeLabels: Record<FabSize, string> = {
  small: "Small (40)",
  regular: "Regular (56)",
  large: "Large (96)",
};

const colorLabels: Record<FabColor, string> = {
  primary: "Primary",
  surface: "Surface",
  secondary: "Secondary",
  tertiary: "Tertiary",
};

function Overview() {
  return (
    <YStack gap={32}>
      {/* Sizes */}
      <XStack
        backgroundColor="#FFFFFF"
        borderRadius={12}
        borderWidth={1}
        borderColor="#E0E0E0"
        padding={24}
        gap={24}
        alignItems="flex-start"
      >
        {sizes.map((s) => (
          <YStack key={s} alignItems="center" gap={8}>
            <SectionLabel label={sizeLabels[s]} />
            <FAB icon="add" size={s} />
          </YStack>
        ))}
      </XStack>

      {/* Colors */}
      <XStack
        backgroundColor="#FFFFFF"
        borderRadius={12}
        borderWidth={1}
        borderColor="#E0E0E0"
        padding={24}
        gap={24}
        alignItems="flex-start"
      >
        {colors.map((c) => (
          <YStack key={c} alignItems="center" gap={8}>
            <SectionLabel label={colorLabels[c]} />
            <FAB icon="edit" color={c} />
          </YStack>
        ))}
      </XStack>

      {/* Extended FAB */}
      <XStack
        backgroundColor="#FFFFFF"
        borderRadius={12}
        borderWidth={1}
        borderColor="#E0E0E0"
        padding={24}
        gap={24}
        alignItems="flex-start"
      >
        <YStack alignItems="center" gap={8}>
          <SectionLabel label="Extended" />
          <FAB icon="edit" label="New task" />
        </YStack>
      </XStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/fab/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=210-22",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
