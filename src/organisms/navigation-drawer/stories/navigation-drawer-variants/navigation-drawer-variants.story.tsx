import type { Meta, StoryObj } from "@storybook/react";
import { NavigationDrawer } from "../../navigation-drawer";
import type { NavigationDrawerProps } from "../../navigation-drawer.type";

const meta: Meta<NavigationDrawerProps> = {
  title: "organisms/navigation-drawer/variants",
  component: NavigationDrawer,
  args: {
    open: true,
    onClose: () => {},
    activeKey: "inbox",
    onDestinationPress: () => {},
  },
};

export default meta;
type Story = StoryObj<NavigationDrawerProps>;

export const Default: Story = {
  args: {
    sections: [
      {
        destinations: [
          { icon: "inbox", label: "Inbox", key: "inbox" },
          { icon: "send", label: "Sent", key: "sent" },
          { icon: "drafts", label: "Drafts", key: "drafts" },
        ],
      },
    ],
  },
};

export const WithHeader: Story = {
  args: {
    header: "Mail",
    sections: [
      {
        destinations: [
          { icon: "inbox", label: "Inbox", key: "inbox" },
          { icon: "send", label: "Sent", key: "sent" },
          { icon: "drafts", label: "Drafts", key: "drafts" },
        ],
      },
    ],
  },
};

export const WithSections: Story = {
  args: {
    header: "Mail",
    sections: [
      {
        header: "Primary",
        destinations: [
          { icon: "inbox", label: "Inbox", key: "inbox" },
          { icon: "send", label: "Sent", key: "sent" },
        ],
      },
      {
        header: "Labels",
        destinations: [
          { icon: "label", label: "Important", key: "important" },
          { icon: "label", label: "Starred", key: "starred" },
        ],
      },
    ],
  },
};
