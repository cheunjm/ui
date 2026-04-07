import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, View } from "tamagui";
import { Button } from "../../../../atoms/button";
import { Dialog } from "../../dialog";

function Overview() {
  const [basic, setBasic] = useState(false);
  const [withIcon, setWithIcon] = useState(false);
  const [withBody, setWithBody] = useState(false);
  const [confirmOnly, setConfirmOnly] = useState(false);
  const [full, setFull] = useState(false);

  return (
    <View height={600} position="relative">
      <YStack gap={16} padding={16}>
        <Button variant="filled" onPress={() => setBasic(true)}>
          Basic Dialog
        </Button>
        <Button variant="filled" onPress={() => setWithIcon(true)}>
          With Icon
        </Button>
        <Button variant="filled" onPress={() => setWithBody(true)}>
          With Body
        </Button>
        <Button variant="filled" onPress={() => setConfirmOnly(true)}>
          Confirm Only
        </Button>
        <Button variant="filled" onPress={() => setFull(true)}>
          Full Dialog
        </Button>
      </YStack>

      <Dialog
        visible={basic}
        title="Basic dialog"
        onConfirm={() => setBasic(false)}
        onDismiss={() => setBasic(false)}
      />
      <Dialog
        visible={withIcon}
        icon="info"
        title="With icon"
        onConfirm={() => setWithIcon(false)}
        onDismiss={() => setWithIcon(false)}
      >
        This dialog has an icon above the title.
      </Dialog>
      <Dialog
        visible={withBody}
        title="Discard draft?"
        onConfirm={() => setWithBody(false)}
        onDismiss={() => setWithBody(false)}
        confirmLabel="Discard"
        dismissLabel="Cancel"
      >
        Your changes have not been saved. If you discard, your draft will be
        lost.
      </Dialog>
      <Dialog
        visible={confirmOnly}
        title="Acknowledged"
        onConfirm={() => setConfirmOnly(false)}
        confirmLabel="OK"
      >
        This dialog only has a confirm button.
      </Dialog>
      <Dialog
        visible={full}
        icon="warning"
        title="Delete account?"
        confirmLabel="Delete"
        dismissLabel="Keep"
        onConfirm={() => setFull(false)}
        onDismiss={() => setFull(false)}
      >
        This action cannot be undone. All your data will be permanently removed.
      </Dialog>
    </View>
  );
}

const meta: Meta = {
  title: "organisms/dialog/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
