import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack, Text } from "tamagui";

import { BottomSheet } from "../../bottom-sheet";
import type { BottomSheetVariant } from "../../bottom-sheet.type";
import { SectionLabel } from "../../../../storybook";

const variants: BottomSheetVariant[] = ["modal", "standard"];

const variantLabels: Record<BottomSheetVariant, string> = {
  modal: "Modal",
  standard: "Standard",
};

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
        <SectionLabel label={variantLabels.standard} />
        <BottomSheet visible variant="standard">
          <SampleContent />
        </BottomSheet>
      </YStack>

      {/* Modal variant — toggle button */}
      <YStack gap={8}>
        <SectionLabel label={variantLabels.modal} />
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
  title: "organisms/bottom-sheet/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
