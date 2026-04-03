---
"@arami-works/ui": patch
---

Move runtime packages (react, react-native, expo, tamagui, etc.) from dependencies to peerDependencies — fixes $react lockfile resolution errors when installed as a library in consuming repos.
