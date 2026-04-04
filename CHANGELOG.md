# @aramiworks/ui

## 0.1.0

### Minor Changes

- [#63](https://github.com/aramiworks/ui/pull/63) [`ddc2402`](https://github.com/aramiworks/ui/commit/ddc2402d3f29af0c5da520c41ad492775f873548) Thanks [@cheunjm](https://github.com/cheunjm)! - Add ListTemplate — page-level layout with TopAppBar slot, optional header content, scrollable list area, and optional bottom navigation

- [#64](https://github.com/aramiworks/ui/pull/64) [`76373ea`](https://github.com/aramiworks/ui/commit/76373ea005a90a05d66e158d2755f58863004888) Thanks [@cheunjm](https://github.com/cheunjm)! - Add FormTemplate — page-level layout with TopAppBar slot, scrollable form content area, and sticky bottom actions

- [#62](https://github.com/aramiworks/ui/pull/62) [`d0628e8`](https://github.com/aramiworks/ui/commit/d0628e83a8de2205aa9c2d2bd7a200471fdd48ec) Thanks [@cheunjm](https://github.com/cheunjm)! - Add DetailTemplate — page-level layout with TopAppBar slot and scrollable content area

- [#60](https://github.com/aramiworks/ui/pull/60) [`f6b5fb2`](https://github.com/aramiworks/ui/commit/f6b5fb23ffde761df7ea3bf5d0d2bf103f3400f0) Thanks [@cheunjm](https://github.com/cheunjm)! - Add EmptyStateTemplate organism — centered empty state layout with optional icon, title, body, and CTA action slot

- [#75](https://github.com/aramiworks/ui/pull/75) [`eceb9e4`](https://github.com/aramiworks/ui/commit/eceb9e4814f9ab30edb8c8fba5dea860ce5ea997) Thanks [@cheunjm](https://github.com/cheunjm)! - feat(atoms): [INF-599] add Card atom

- [#77](https://github.com/aramiworks/ui/pull/77) [`6e881f8`](https://github.com/aramiworks/ui/commit/6e881f83a6d5bebe7096b9811df400373a883e87) Thanks [@cheunjm](https://github.com/cheunjm)! - feat(molecules): [INF-601] add Menu molecule

- [#78](https://github.com/aramiworks/ui/pull/78) [`3fb4d20`](https://github.com/aramiworks/ui/commit/3fb4d202d7ee6acabea08617ddcd0bab2180a89e) Thanks [@cheunjm](https://github.com/cheunjm)! - feat(organisms): [INF-602] add NavigationDrawer organism

- [#80](https://github.com/aramiworks/ui/pull/80) [`e88a7da`](https://github.com/aramiworks/ui/commit/e88a7da15fed27db7d6b1692d59b2384d1591a9f) Thanks [@cheunjm](https://github.com/cheunjm)! - feat(organisms): [INF-603] add Carousel organism

### Patch Changes

- [#87](https://github.com/aramiworks/ui/pull/87) [`6604881`](https://github.com/aramiworks/ui/commit/66048811469e1782d32b044f241ca78b45771f58) Thanks [@cheunjm](https://github.com/cheunjm)! - Add develop-simulator, stage-simulator, and production-simulator EAS build profiles

- [#67](https://github.com/aramiworks/ui/pull/67) [`096e130`](https://github.com/aramiworks/ui/commit/096e1303e2832705c5eb06bee7cb609996e0f7f1) Thanks [@cheunjm](https://github.com/cheunjm)! - Replace changeset-bot commit status with GitHub Actions workflow

- [#81](https://github.com/aramiworks/ui/pull/81) [`31a881a`](https://github.com/aramiworks/ui/commit/31a881a43e1d230e4592074ec8d848b0eacd8820) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix bundle ID to follow so.arami.ui.storybook convention with env suffixes for develop and stage

- [#74](https://github.com/aramiworks/ui/pull/74) [`44d615e`](https://github.com/aramiworks/ui/commit/44d615ec2b0685b6de1619e4321bed48adf6d58f) Thanks [@cheunjm](https://github.com/cheunjm)! - Add @changesets/cli to devDependencies so Release workflow can run npx changeset version

- [#96](https://github.com/aramiworks/ui/pull/96) [`ff5e1da`](https://github.com/aramiworks/ui/commit/ff5e1dadd2bfeef62986581f7edd63ed5935a1fd) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix changeset config — add missing @changesets/changelog-github dep, update stale repo name, set access to public.

- [#71](https://github.com/aramiworks/ui/pull/71) [`2ed157a`](https://github.com/aramiworks/ui/commit/2ed157a8ad29d142b65b2d3044881adb5ed10deb) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix EAS config slug and owner to use aramiworks after org rename

- [#72](https://github.com/aramiworks/ui/pull/72) [`2d92c08`](https://github.com/aramiworks/ui/commit/2d92c08da06d39969c7d414d75a3aad8f4daa3c9) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix EAS slug to match registered Expo project (cheunjm-ui)

- [#94](https://github.com/aramiworks/ui/pull/94) [`9a07b96`](https://github.com/aramiworks/ui/commit/9a07b96feac51c0b7516731fed1a27209e61bd63) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix on-device Storybook entry to call getStorybookUI() instead of using View3 instance directly.

- [#85](https://github.com/aramiworks/ui/pull/85) [`362be5f`](https://github.com/aramiworks/ui/commit/362be5faee4a12a5fde432cc565ad1b50ecf30b3) Thanks [@cheunjm](https://github.com/cheunjm)! - Set up GitHub Packages publishing — package is now published to npm.pkg.github.com on release.

- [#70](https://github.com/aramiworks/ui/pull/70) [`10eae8f`](https://github.com/aramiworks/ui/commit/10eae8f15faa17cf1d1896525fdbacd7928a8428) Thanks [@cheunjm](https://github.com/cheunjm)! - chore(ci): remove claude-code-review and Vercel Storybook deploy (replaced by Greptile and Chromatic)

- [#73](https://github.com/aramiworks/ui/pull/73) [`8b07ebb`](https://github.com/aramiworks/ui/commit/8b07ebb26db26321a414b3986c3220e7096f2303) Thanks [@cheunjm](https://github.com/cheunjm)! - Replace claude-pr-description with lightweight auto-label workflow for decision-log tagging.

- [#79](https://github.com/aramiworks/ui/pull/79) [`103e23b`](https://github.com/aramiworks/ui/commit/103e23b9a8481458f3b54bf139219dba820e3941) Thanks [@cheunjm](https://github.com/cheunjm)! - Remove pr-summary CI job and associated PR data prep steps — coverage and visual regression now reported by Codecov and Chromatic directly.

- [#86](https://github.com/aramiworks/ui/pull/86) [`d922796`](https://github.com/aramiworks/ui/commit/d9227963a6f5086f8715384605fae2e8ad5a12d6) Thanks [@cheunjm](https://github.com/cheunjm)! - Add mprocs dev dashboard with expo and storybook:web processes.

- [#68](https://github.com/aramiworks/ui/pull/68) [`dd27fe4`](https://github.com/aramiworks/ui/commit/dd27fe40f3c8bd87868e9e5151ca232a7e1d57d5) Thanks [@cheunjm](https://github.com/cheunjm)! - Update org references from Arami-Works to aramiworks in workflow files

- [#95](https://github.com/aramiworks/ui/pull/95) [`3f126e1`](https://github.com/aramiworks/ui/commit/3f126e1f986d3c7d2823d8af40b00a5612a58ae5) Thanks [@cheunjm](https://github.com/cheunjm)! - Move runtime packages (react, react-native, expo, tamagui, etc.) from dependencies to peerDependencies — fixes $react lockfile resolution errors when installed as a library in consuming repos.

- [#91](https://github.com/aramiworks/ui/pull/91) [`52f1888`](https://github.com/aramiworks/ui/commit/52f1888c9b4ac31f45567ea29a6d1114ebf5ebd2) Thanks [@cheunjm](https://github.com/cheunjm)! - Add unit tests for spacer and text atoms.

- [#57](https://github.com/aramiworks/ui/pull/57) [`311c8dd`](https://github.com/aramiworks/ui/commit/311c8dda35dc587b0c91a5455e8d2a682498eb77) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix Tamagui `createTamagui()` error by adding required `true` key to size and space tokens
