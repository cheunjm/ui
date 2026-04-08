import type { GetProps } from "tamagui";
import type { View } from "tamagui";
import type { ImageSourcePropType } from "react-native";
import type { IconName } from "../icon";

/** MD3 Avatar size */
export type AvatarSize = "small" | "medium" | "large";

export type AvatarProps = Omit<GetProps<typeof View>, "children"> & {
  /** Image source — triggers image variant */
  source?: ImageSourcePropType;
  /** User name — triggers initials variant (extracts first letters) */
  name?: string;
  /** Custom icon name — triggers icon variant. Default: "person" */
  icon?: IconName;
  /** Avatar size. Default: "medium" */
  size?: AvatarSize;
  /** Background color override. Default: "$primaryContainer" */
  color?: string;
  testID?: string;
};
