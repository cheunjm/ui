import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack, Text } from "tamagui";

import { BottomSheet } from "../../bottom-sheet";
import type { BottomSheetVariant } from "../../bottom-sheet.type";

const variants: BottomSheetVariant[] = ["modal", "standard"];

const variantLabels: Record<BottomSheetVariant, string> = {
  modal: "Modal",
  standard: "Standard",
};

function VariantLabel({ label }: { label: string }) {
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

function SampleContent() {
  return (
    <YStack gap={12} paddingVertical={8}>
      <Text fontSize={16} fontWeight="600">
        Bottom Sheet Title
      </Text>
      <Text fontSize={14} color="#49454F">
        This is sample content inside the bottom sheet. It can contain any
        components and will scroll if the content exceeds the available space.
      </Text>
    </YStack>
  );
}

function Overview() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <YStack gap={24} padding={24}>
      {/* Standard variant — always visible inline */}
      <YStack gap={8}>
        <VariantLabel label={variantLabels.standard} />
        <BottomSheet visible variant="standard">
          <SampleContent />
        </BottomSheet>
      </YStack>

      {/* Modal variant — toggle button */}
      <YStack gap={8}>
        <VariantLabel label={variantLabels.modal} />
        <Text
          fontSize={14}
          color="#6750A4"
          fontWeight="500"
          onPress={() => setModalVisible(true)}
        >
          Tap to open modal bottom sheet
        </Text>
        <BottomSheet
          visible={modalVisible}
          variant="modal"
          onDismiss={() => setModalVisible(false)}
        >
          <SampleContent />
        </BottomSheet>
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "Organisms/BottomSheet/Overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
