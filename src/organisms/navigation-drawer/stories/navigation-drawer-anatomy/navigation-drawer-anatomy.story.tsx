import type { Meta, StoryObj } from "@storybook/react";
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
      <YStack width={300} height={300} justifyContent="center" alignItems="center">
        <View position="relative" width={240} height={280}>
          <View
            backgroundColor="#F7F2FA"
            borderRadius={16}
            width={240}
            height={280}
            padding={12}
          >
            {/* Header */}
            <View height={40} justifyContent="center" paddingHorizontal={16}>
              <Text fontSize={14} fontWeight="500" color="#1C1B1F">Mail</Text>
            </View>

            {/* Section header */}
            <View height={24} justifyContent="center" paddingHorizontal={16}>
              <Text fontSize={11} fontWeight="500" color="#49454F">Section</Text>
            </View>

            {/* Destination items */}
            {["Inbox", "Sent", "Drafts"].map((label, i) => (
              <XStack
                key={label}
                height={56}
                borderRadius={9999}
                backgroundColor={i === 0 ? "#E8DEF8" : "transparent"}
                alignItems="center"
                gap={12}
                paddingHorizontal={16}
              >
                <View
                  width={18}
                  height={18}
                  borderRadius={4}
                  borderWidth={1.5}
                  borderColor={i === 0 ? "#6750A4" : "#49454F"}
                  borderStyle="dashed"
                />
                <Text
                  flex={1}
                  fontSize={12}
                  fontWeight={i === 0 ? "600" : "400"}
                  color={i === 0 ? "#1C1B1F" : "#49454F"}
                >
                  {label}
                </Text>
                {i === 0 && (
                  <Text fontSize={10} color="#6750A4">24</Text>
                )}
              </XStack>
            ))}
          </View>

          {/* Callout 1 — Container */}
          <View position="absolute" top={-10} right={-20}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Header */}
          <View position="absolute" top={16} left={-20}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Section header */}
          <View position="absolute" top={56} right={-20}>
            <Callout number={3} />
          </View>

          {/* Callout 4 — Destination item */}
          <View position="absolute" top={100} left={-20}>
            <Callout number={4} />
          </View>

          {/* Callout 5 — Icon */}
          <View position="absolute" top={140} right={-20}>
            <Callout number={5} />
          </View>

          {/* Callout 6 — Label */}
          <View position="absolute" bottom={60} left={-20}>
            <Callout number={6} />
          </View>

          {/* Callout 7 — Badge */}
          <View position="absolute" bottom={60} right={-20}>
            <Callout number={7} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="Container" />
        <LegendItem number={2} label="Header" />
        <LegendItem number={3} label="Section header" />
        <LegendItem number={4} label="Destination item" />
        <LegendItem number={5} label="Icon" />
        <LegendItem number={6} label="Label" />
        <LegendItem number={7} label="Badge" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/navigation-drawer/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
