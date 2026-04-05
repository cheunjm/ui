import type { ReactNode } from "react";
import { XStack, YStack, Text } from "tamagui";

// Purple pill label — use above each variant in an Overview story
export function SectionLabel({ label }: { label: string }) {
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

// Alias — same as SectionLabel, for stories that prefer "VariantLabel"
export { SectionLabel as VariantLabel };

type VariantConfig = {
  name: string;
  render: () => ReactNode;
};

type OverviewLayoutProps = {
  /** Full view name, e.g. "tracker-dashboard-home-saCard.view" */
  viewName: string;
  /** Variants to render side by side */
  variants: VariantConfig[];
};

/**
 * OverviewLayout — shared story layout that mirrors the Figma component set structure.
 *
 * Renders a section header with the view name, then all variants side by side
 * with purple pill labels above each one. Use this as the `Overview` story in
 * every component (design system) and view (app).
 */
export function OverviewLayout({ viewName, variants }: OverviewLayoutProps) {
  return (
    <YStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={16}
      gap={12}
    >
      {/* Section header */}
      <XStack alignItems="center" gap={8}>
        <XStack
          backgroundColor="#F0E8FF"
          borderRadius={4}
          paddingHorizontal={8}
          paddingVertical={3}
        >
          <Text fontSize={11} fontWeight="700" color="#7C3AED">
            Section
          </Text>
        </XStack>
        <Text fontSize={14} fontWeight="600" color="#333333">
          {viewName}
        </Text>
      </XStack>

      {/* Variants row */}
      <XStack gap={8} flexWrap="wrap" alignItems="flex-start">
        {variants.map((v) => (
          <YStack key={v.name} gap={8} alignItems="flex-start">
            <SectionLabel label={v.name} />
            {v.render()}
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
}
