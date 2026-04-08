import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, View } from "tamagui";
import { ListTemplate } from "../../list-template";
import { TopAppBar } from "../../../../organisms/top-app-bar";
import { SearchBar } from "../../../../molecules/search-bar";
import { NavigationBar } from "../../../../organisms/navigation-bar";
import { ListItem } from "../../../../molecules/list-item";
import { SectionLabel } from "../../../../storybook";

const sampleItems = [
  { headline: "Photos", supportingText: "Jan 9, 2024", leadingContent: "image" },
  { headline: "Recipes", supportingText: "Jan 17, 2024", leadingContent: "restaurant" },
  { headline: "Work", supportingText: "Jan 28, 2024", leadingContent: "work" },
  { headline: "Vacation", supportingText: "Feb 3, 2024", leadingContent: "flight" },
  { headline: "Personal", supportingText: "Feb 12, 2024", leadingContent: "person" },
];

const navDestinations = [
  { icon: "home-outline", activeIcon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  { icon: "notifications-outline", activeIcon: "notifications", label: "Alerts", badge: 3 },
  { icon: "person-outline", activeIcon: "person", label: "Profile" },
];

function Overview() {
  const [search, setSearch] = useState("");

  return (
    <YStack gap={32} padding={16}>
      <YStack gap={8}>
        <SectionLabel label="TopAppBar + List Items" />
        <View height={360} borderWidth={1} borderColor="#E0E0E0" borderRadius={12} overflow="hidden">
          <ListTemplate
            topBar={
              <TopAppBar
                type="small"
                title="My Files"
                navigationIcon="menu"
              />
            }
          >
            {sampleItems.map((item, i) => (
              <ListItem
                key={i}
                headline={item.headline}
                supportingText={item.supportingText}
                leadingContent={item.leadingContent}
                showDivider={i < sampleItems.length - 1}
              />
            ))}
          </ListTemplate>
        </View>
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="TopAppBar + SearchBar + List Items" />
        <View height={420} borderWidth={1} borderColor="#E0E0E0" borderRadius={12} overflow="hidden">
          <ListTemplate
            topBar={
              <TopAppBar
                type="small"
                title="Search"
                navigationIcon="arrow-back"
              />
            }
            headerContent={
              <View paddingHorizontal={16} paddingVertical={8}>
                <SearchBar
                  value={search}
                  onChangeText={setSearch}
                  placeholder="Search files..."
                />
              </View>
            }
          >
            {sampleItems
              .filter((item) =>
                item.headline.toLowerCase().includes(search.toLowerCase()),
              )
              .map((item, i, arr) => (
                <ListItem
                  key={i}
                  headline={item.headline}
                  supportingText={item.supportingText}
                  leadingContent={item.leadingContent}
                  showDivider={i < arr.length - 1}
                />
              ))}
          </ListTemplate>
        </View>
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="TopAppBar + List Items + NavigationBar" />
        <View height={440} borderWidth={1} borderColor="#E0E0E0" borderRadius={12} overflow="hidden">
          <ListTemplate
            topBar={
              <TopAppBar
                type="small"
                title="Home"
                navigationIcon="menu"
              />
            }
            bottomBar={
              <NavigationBar
                destinations={navDestinations}
                activeIndex={0}
              />
            }
          >
            {sampleItems.map((item, i) => (
              <ListItem
                key={i}
                headline={item.headline}
                supportingText={item.supportingText}
                leadingContent={item.leadingContent}
                showDivider={i < sampleItems.length - 1}
              />
            ))}
          </ListTemplate>
        </View>
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "templates/list-template/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/HaGgCBIkDbJ2jVZp0dUFR0/templates?node-id=4-7",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
