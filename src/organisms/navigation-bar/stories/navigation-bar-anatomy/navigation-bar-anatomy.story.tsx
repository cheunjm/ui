import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text, View } from "tamagui";

function Callout({ number }: { number: number }) {
  return (
    <XStack
      width={24}
      height={24}
      borderRadius={12}
      backgroundColor="#6750A4"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={12} fontWeight="600" color="#FFFFFF">
        {number}
      </Text>
    </XStack>
  );
}

function LegendItem({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  return (
    <XStack gap={10} alignItems="center">
      <Callout number={number} />
      <Text fontSize={14} color="#1C1B1F">
        {label}
      </Text>
    </XStack>
  );
}

function Anatomy() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={48}
      alignItems="center"
    >
      {/* Diagram */}
      <YStack width={300} height={140} justifyContent="center" alignItems="center">
        <View position="relative" width={280} height={80}>
          <View
            backgroundColor="#F7F2FA"
            width={280}
            height={80}
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            paddingHorizontal={8}
          >
            {/* Destination items */}
            {["Home", "Search", "Profile"].map((label, i) => (
              <YStack key={label} alignItems="center" gap={4}>
                {/* Active indicator for first item */}
                <View
                  width={i === 0 ? 64 : 24}
                  height={i === 0 ? 32 : 24}
                  borderRadius={i === 0 ? 16 : 12}
                  backgroundColor={i === 0 ? "#E8DEF8" : "transparent"}
                  justifyContent="center"
                  alignItems="center"
                >
                  <View
                    width={18}
                    height={18}
                    borderRadius={4}
                    borderWidth={1.5}
                    borderColor={i === 0 ? "#6750A4" : "#49454F"}
                    borderStyle="dashed"
                  />
                </View>
                <Text fontSize={10} color={i === 0 ? "#1C1B1F" : "#49454F"}>
                  {label}
                </Text>
              </YStack>
            ))}
          </View>

          {/* Callout 1 — Container */}
          <View position="absolute" top={-16} right={-20}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Destination */}
          <View position="absolute" top={10} left={-20}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Icon */}
          <View position="absolute" top={10} right={-20}>
            <Callout number={3} />
          </View>

          {/* Callout 4 — Label */}
          <View position="absolute" bottom={-10} left={-20}>
            <Callout number={4} />
          </View>

          {/* Callout 5 — Badge */}
          <View position="absolute" bottom={-10} right={-20}>
            <Callout number={5} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Destination" />
        <LegendItem number={3} label="Icon" />
        <LegendItem number={4} label="Label" />
        <LegendItem number={5} label="Badge" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/navigation-bar/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9wluFWH1CfEuAf0KjDEUFt/organisms?node-id=6-15",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
