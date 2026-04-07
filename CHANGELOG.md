# @aramiworks/ui

## 0.3.0

### Minor Changes

- [#114](https://github.com/aramiworks/ui/pull/114) [`1b0b6c9`](https://github.com/aramiworks/ui/commit/1b0b6c9bac336be0478e9c59dcd0cf2a4873db08) Thanks [@cheunjm](https://github.com/cheunjm)! - Add NavigationRail organism — MD3 vertical navigation for tablet/desktop with optional FAB slot and 3–7 destinations.

- [#121](https://github.com/aramiworks/ui/pull/121) [`39babf3`](https://github.com/aramiworks/ui/commit/39babf3b8d7bbdad7dcba4330184431277a12fb2) Thanks [@cheunjm](https://github.com/cheunjm)! - Add UiProvider and OverviewLayout storybook utilities. UiProvider wraps TamaguiProvider so consumer apps never import Tamagui directly. OverviewLayout, SectionLabel, and VariantLabel are shared story layout components for consistent visual documentation across all repos.

### Patch Changes

- [#108](https://github.com/aramiworks/ui/pull/108) [`c0a7b01`](https://github.com/aramiworks/ui/commit/c0a7b01f3c211de45603bb93b262674f5c0680f6) Thanks [@cheunjm](https://github.com/cheunjm)! - Add AsyncStorage to on-device Storybook to persist selected story between sessions.

- [#125](https://github.com/aramiworks/ui/pull/125) [`b142650`](https://github.com/aramiworks/ui/commit/b1426504d15f6048952a0b2b1eb3c8708d052491) Thanks [@cheunjm](https://github.com/cheunjm)! - Add ready_for_review to CI pull_request trigger types so Chromatic runs when a draft PR is converted to ready.

- [#116](https://github.com/aramiworks/ui/pull/116) [`5301153`](https://github.com/aramiworks/ui/commit/530115385d8fa0e830d4f68ff2091fee8a560e2a) Thanks [@cheunjm](https://github.com/cheunjm)! - Add ITSAppUsesNonExemptEncryption to suppress App Store encryption warning.

- [#110](https://github.com/aramiworks/ui/pull/110) [`e696f92`](https://github.com/aramiworks/ui/commit/e696f92ab6adc1aea4e15ec0b41271855e36e55a) Thanks [@cheunjm](https://github.com/cheunjm)! - Standardize EAS environment naming to develop/stage/master across all config and workflows.

- [#111](https://github.com/aramiworks/ui/pull/111) [`35441c7`](https://github.com/aramiworks/ui/commit/35441c73ee67b1908719c6c9e658777bee9e9b65) Thanks [@cheunjm](https://github.com/cheunjm)! - CI cleanup: remove redundant push-to-main trigger, rename jobs to match convention, remove duplicate Slack notification from eas-update.

- [#112](https://github.com/aramiworks/ui/pull/112) [`94f9796`](https://github.com/aramiworks/ui/commit/94f97963b7aeb4049aeaf54cd78d1892d2d313c5) Thanks [@cheunjm](https://github.com/cheunjm)! - Configure Mergify merge queue with explicit check-success conditions and approval-based auto-merge.

- [#122](https://github.com/aramiworks/ui/pull/122) [`5e23991`](https://github.com/aramiworks/ui/commit/5e23991472ecbdc605373170c1671be3d5056c9f) Thanks [@cheunjm](https://github.com/cheunjm)! - Disable Vercel GitHub integration on PRs to prevent bot noise.

- [#118](https://github.com/aramiworks/ui/pull/118) [`b3f41c1`](https://github.com/aramiworks/ui/commit/b3f41c1d3b6acb443aba8132dc6543a787aed146) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Mergify auto-update rule to keep PR branches up-to-date with main.

- [#113](https://github.com/aramiworks/ui/pull/113) [`3ab792a`](https://github.com/aramiworks/ui/commit/3ab792ac59d2ec1c7bfa76a4ca9a2cd71836ac42) Thanks [@cheunjm](https://github.com/cheunjm)! - Replace AsyncStorage with in-memory storage adapter in on-device Storybook to avoid native module dependency.

## 0.2.1

### Patch Changes

- [#106](https://github.com/aramiworks/ui/pull/106) [`4711cff`](https://github.com/aramiworks/ui/commit/4711cff75d600b6c21e12552ac80a1081459ded2) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix release workflow to publish to GitHub Packages after version bump PR merges.

## 0.2.0

### Minor Changes

- [#76](https://github.com/aramiworks/ui/pull/76) [`49069b3`](https://github.com/aramiworks/ui/commit/49069b349e22060af4b4c239f6afdd2615e74e7e) Thanks [@cheunjm](https://github.com/cheunjm)! - feat(atoms): [INF-600] add Tooltip atom

- [#82](https://github.com/aramiworks/ui/pull/82) [`99de7bf`](https://github.com/aramiworks/ui/commit/99de7bfef44d83f1da71fe14e5566f5a880d0008) Thanks [@cheunjm](https://github.com/cheunjm)! - feat(organisms): [INF-604] add DatePicker organism

- [#83](https://github.com/aramiworks/ui/pull/83) [`003f70f`](https://github.com/aramiworks/ui/commit/003f70f6a931c02143e120608cdc22fb08ab7cd6) Thanks [@cheunjm](https://github.com/cheunjm)! - feat(organisms): [INF-605] add TimePicker organism

### Patch Changes

- [#103](https://github.com/aramiworks/ui/pull/103) [`df9dc08`](https://github.com/aramiworks/ui/commit/df9dc0870b4935cd43f658e919322c9cb5433540) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Mergify config for automated dependency PR merging.

- [#84](https://github.com/aramiworks/ui/pull/84) [`9717ae1`](https://github.com/aramiworks/ui/commit/9717ae106f4a0737b1222be3ba899fd1b41874e7) Thanks [@cheunjm](https://github.com/cheunjm)! - Restructure Button stories: Anatomy/Overview/Specs as docs pages, Variants split into one story per variant

- [#99](https://github.com/aramiworks/ui/pull/99) [`56bc89b`](https://github.com/aramiworks/ui/commit/56bc89b4dff50b39b580565b28d1666ae7811145) Thanks [@cheunjm](https://github.com/cheunjm)! - Disable Tamagui babel-plugin static extraction to fix Node 24 parse errors caused by v1/v2 version mismatch with @tamagui/static-sync.

- [#90](https://github.com/aramiworks/ui/pull/90) [`55ad9a5`](https://github.com/aramiworks/ui/commit/55ad9a5d05b1dee038eff11b13debfb390830446) Thanks [@cheunjm](https://github.com/cheunjm)! - fix(molecules,organisms): fix Menu and NavigationDrawer Text props and shadow styles

- [#89](https://github.com/aramiworks/ui/pull/89) [`c052247`](https://github.com/aramiworks/ui/commit/c0522479790ea99c4b42bb6499118b472f0bf786) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix incorrect Button import path in menu-overview story.

- [#102](https://github.com/aramiworks/ui/pull/102) [`ce305c1`](https://github.com/aramiworks/ui/commit/ce305c194e0c7aa9c375e10f23dfd14f9c323209) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix zIndex tokens to use named keys and add outline color aliases in tamagui config.

- [#97](https://github.com/aramiworks/ui/pull/97) [`f67477b`](https://github.com/aramiworks/ui/commit/f67477ba302965d43381f9c10b09afc3a98eb495) Thanks [@cheunjm](https://github.com/cheunjm)! - CI overhaul: rename jobs for consistent check names, enable Chromatic visual review gate, fix duplicate changeset check, remove conflicting claude-changelog workflow, add paths-ignore, scope all triggers to main branch only.

- [#100](https://github.com/aramiworks/ui/pull/100) [`8ab74c5`](https://github.com/aramiworks/ui/commit/8ab74c5b6ec828aa89e98e51e65d50d8b4345c78) Thanks [@cheunjm](https://github.com/cheunjm)! - Move expo-updates from devDependencies to dependencies for OTA update channels to work.

- [#101](https://github.com/aramiworks/ui/pull/101) [`8cbcf69`](https://github.com/aramiworks/ui/commit/8cbcf69fb995140720d51a47026a34924fbb5f08) Thanks [@cheunjm](https://github.com/cheunjm)! - Add proactive behavior rules for model switching, agent teams, and convention updates.

- [#104](https://github.com/aramiworks/ui/pull/104) [`f1af9c4`](https://github.com/aramiworks/ui/commit/f1af9c4d1f8515d8e7f9550ca907d991970e5136) Thanks [@cheunjm](https://github.com/cheunjm)! - Rename package scope from @arami-works to @aramiworks to match GitHub org for GitHub Packages publishing.

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
