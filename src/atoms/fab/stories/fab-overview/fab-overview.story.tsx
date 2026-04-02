import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";
import { FAB } from "../../fab";
import type { FabSize, FabColor } from "../../fab.type";

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

function SectionLabel({ label }: { label: string }) {
  return (
    <XStack
      backgroundColor="#E8DEF8"
      borderRadius={14}
      paddingHorizontal={12}
      paddingVertical={6}
      justifyContent="center"
    >
      <Text fontSize={12} fontWeight="500" color="#6750A4">
        {label}
      </Text>
    </XStack>
  );
}

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
  title: "Atoms/FAB/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
