---
"@aramiworks/ui": minor
---

Migrate Button, TextField, Chip, Switch, Text, Icon, Avatar, Divider, and ListItem from Tamagui to react-native-unistyles v3, and add a compiled build (`dist/`, via a `prepare` script) plus a new `@aramiworks/ui/unistyles` sub-path export containing only these Tamagui-free components. Enables consumption as a git dependency by apps outside this repo's npm workspace, which can't rely on Metro transforming TypeScript source from `node_modules`. The remaining atoms/molecules/organisms/templates stay on Tamagui.
