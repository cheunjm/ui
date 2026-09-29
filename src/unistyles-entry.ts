// A narrower entry point containing only the components migrated to
// react-native-unistyles (no Tamagui dependency). Import from
// "@aramiworks/ui/unistyles" instead of the package root when consuming
// from an app that isn't part of this repo's npm workspace and doesn't
// want to pull in Tamagui + its peer dependencies — the root entry
// (`src/index.ts`) re-exports every atom/molecule/organism/template,
// including the ~265 files still on Tamagui, which would otherwise be
// transitively required.
export { Button } from "./atoms/button";
export type { ButtonProps, ButtonVariant } from "./atoms/button/button.type";

export { TextField } from "./atoms/text-field";
export type {
  TextFieldProps,
  TextFieldVariant,
} from "./atoms/text-field/text-field.type";

export { Chip } from "./atoms/chip";
export type { ChipProps, ChipType } from "./atoms/chip/chip.type";

export { Switch } from "./atoms/switch";
export type { SwitchProps } from "./atoms/switch/switch.type";

export { Text } from "./atoms/text";
export type { TextProps, TextRole, TextSize } from "./atoms/text/text.type";

export { Icon } from "./atoms/icon";
export type { IconProps, IconSize, IconName } from "./atoms/icon";

export { Avatar } from "./atoms/avatar";
export type { AvatarProps, AvatarSize } from "./atoms/avatar";

export { Divider } from "./atoms/divider";
export type {
  DividerProps,
  DividerOrientation,
  DividerInset,
} from "./atoms/divider";

export { ListItem } from "./molecules/list-item";
export type { ListItemProps } from "./molecules/list-item";

export { lightTheme, darkTheme } from "./tokens/unistyles.theme";
export type { AppTheme } from "./tokens/unistyles.theme";
export { resolveColor } from "./tokens/resolve-color";
export { resolveSpacing } from "./tokens/resolve-spacing";
export { useAppTheme } from "./tokens/use-app-theme";
