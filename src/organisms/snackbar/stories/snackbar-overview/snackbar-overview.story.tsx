import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, View } from "tamagui";
import { Button } from "../../../../atoms/button";
import { Snackbar } from "../../snackbar";

function Overview() {
  const [singleLine, setSingleLine] = useState(false);
  const [withAction, setWithAction] = useState(false);
  const [withClose, setWithClose] = useState(false);
  const [twoLine, setTwoLine] = useState(false);
  const [withAll, setWithAll] = useState(false);

  return (
    <View height={500} position="relative">
      <YStack gap={16} padding={16}>
        <Button variant="filled" onPress={() => setSingleLine(true)}>
          Single Line
        </Button>
        <Button variant="filled" onPress={() => setWithAction(true)}>
          With Action
        </Button>
        <Button variant="filled" onPress={() => setWithClose(true)}>
          With Close Icon
        </Button>
        <Button variant="filled" onPress={() => setTwoLine(true)}>
          Two Line
        </Button>
        <Button variant="filled" onPress={() => setWithAll(true)}>
          Action + Close
        </Button>
      </YStack>

      <Snackbar
        visible={singleLine}
        message="Single-line snackbar"
        onDismiss={() => setSingleLine(false)}
      />
      <Snackbar
        visible={withAction}
        message="Item deleted"
        actionLabel="Undo"
        onAction={() => setWithAction(false)}
        onDismiss={() => setWithAction(false)}
      />
      <Snackbar
        visible={withClose}
        message="Connection restored"
        showCloseIcon
        onDismiss={() => setWithClose(false)}
      />
      <Snackbar
        visible={twoLine}
        message="This is a longer snackbar message that will wrap to two lines on smaller screens"
        onDismiss={() => setTwoLine(false)}
      />
      <Snackbar
        visible={withAll}
        message="Unable to send photo"
        actionLabel="Retry"
        showCloseIcon
        onAction={() => setWithAll(false)}
        onDismiss={() => setWithAll(false)}
        duration={0}
      />
    </View>
  );
}

const meta: Meta = {
  title: "organisms/snackbar/overview",
  component: Overview,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
