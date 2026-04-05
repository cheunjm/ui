import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";
import { ProgressIndicator } from "../../progress-indicator";
import { SectionLabel } from "../../../../storybook";

function Overview() {
  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={32}
    >
      <YStack gap={16}>
        <SectionLabel label="Linear" />

        <YStack gap={8}>
          <Text fontSize={12} color="#666666">
            Indeterminate
          </Text>
          <ProgressIndicator type="linear" mode="indeterminate" />
        </YStack>

        <YStack gap={8}>
          <Text fontSize={12} color="#666666">
            Determinate (0%)
          </Text>
          <ProgressIndicator
            type="linear"
            mode="determinate"
            progress={0}
          />
        </YStack>

        <YStack gap={8}>
          <Text fontSize={12} color="#666666">
            Determinate (50%)
          </Text>
          <ProgressIndicator
            type="linear"
            mode="determinate"
            progress={0.5}
          />
        </YStack>

        <YStack gap={8}>
          <Text fontSize={12} color="#666666">
            Determinate (100%)
          </Text>
          <ProgressIndicator
            type="linear"
            mode="determinate"
            progress={1}
          />
        </YStack>
      </YStack>

      <YStack gap={16}>
        <SectionLabel label="Circular" />

        <XStack gap={24} alignItems="center">
          <YStack alignItems="center" gap={8}>
            <Text fontSize={12} color="#666666">
              Indeterminate
            </Text>
            <ProgressIndicator type="circular" mode="indeterminate" />
          </YStack>

          <YStack alignItems="center" gap={8}>
            <Text fontSize={12} color="#666666">
              0%
            </Text>
            <ProgressIndicator
              type="circular"
              mode="determinate"
              progress={0}
            />
          </YStack>

          <YStack alignItems="center" gap={8}>
            <Text fontSize={12} color="#666666">
              50%
            </Text>
            <ProgressIndicator
              type="circular"
              mode="determinate"
              progress={0.5}
            />
          </YStack>

          <YStack alignItems="center" gap={8}>
            <Text fontSize={12} color="#666666">
              100%
            </Text>
            <ProgressIndicator
              type="circular"
              mode="determinate"
              progress={1}
            />
          </YStack>
        </XStack>
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/progress-indicator/overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
