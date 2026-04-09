import { Fragment } from "react";
import { ScrollView } from "react-native";
import { View } from "tamagui";
import { Text } from "../../atoms/text";
import { Divider } from "../../atoms/divider";
import { Accordion } from "../../molecules/accordion";
import type { SettingsSection, SettingsTemplateProps } from "./settings-template.type";

function SectionContent({ section }: { section: SettingsSection }) {
  return (
    <>
      {section.title && !section.collapsible ? (
        <View paddingHorizontal={16} paddingTop={16} paddingBottom={8}>
          <Text role="label" size="large" color="$onSurfaceVariant">
            {section.title}
          </Text>
        </View>
      ) : null}
      {section.items.map((item, i) => (
        <Fragment key={i}>{item}</Fragment>
      ))}
    </>
  );
}

export function SettingsTemplate({
  topBar,
  sections,
  children,
  testID,
}: SettingsTemplateProps) {
  return (
    <View flex={1} testID={testID}>
      {topBar}

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        {sections.map((section, index) => (
          <Fragment key={index}>
            {index > 0 ? <Divider /> : null}
            {section.collapsible ? (
              <Accordion.Item
                title={section.title ?? ""}
                defaultExpanded={section.defaultExpanded}
                testID={testID ? `${testID}-section-${index}` : undefined}
              >
                <SectionContent section={section} />
              </Accordion.Item>
            ) : (
              <SectionContent section={section} />
            )}
          </Fragment>
        ))}
        {children}
      </ScrollView>
    </View>
  );
}
