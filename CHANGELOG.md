# @aramiworks/ui

## 0.11.0

### Minor Changes

- [#312](https://github.com/cheunjm/ui/pull/312) [`1725adf`](https://github.com/cheunjm/ui/commit/1725adfed858e63d2209038b15770ffb547f8719) Thanks [@cheunjm](https://github.com/cheunjm)! - Add KeyValueListCard organism for displaying labeled key-value rows in an elevated card.

- [#314](https://github.com/cheunjm/ui/pull/314) [`41f17e6`](https://github.com/cheunjm/ui/commit/41f17e6dd9b37b934bb776efb53cf3028447d6b6) Thanks [@cheunjm](https://github.com/cheunjm)! - Add AppVersionFooter organism for displaying app version and build number.

- [`66eff0a`](https://github.com/cheunjm/ui/commit/66eff0abba56e6f51ba1e311c073ee5abb0c92f0) Thanks [@cheunjm](https://github.com/cheunjm)! - Add DestructiveActionButton organism with optional confirmation dialog.

- [#333](https://github.com/cheunjm/ui/pull/333) [`6161e61`](https://github.com/cheunjm/ui/commit/6161e6189181d5dbcf1dbce702ac30a1585c292b) Thanks [@cheunjm](https://github.com/cheunjm)! - Add EligibilityBadge organism for displaying status pills with color-coded MD3 tokens.

- [#335](https://github.com/cheunjm/ui/pull/335) [`dc6ddc0`](https://github.com/cheunjm/ui/commit/dc6ddc07472c174c3ccdd6892aa8718897dfd5ed) Thanks [@cheunjm](https://github.com/cheunjm)! - Add PurchaseRow organism for displaying purchase date, amount, and item count.

- [#346](https://github.com/cheunjm/ui/pull/346) [`0f4801e`](https://github.com/cheunjm/ui/commit/0f4801e78bc4b72a0451f9a37e321b203fa1ce87) Thanks [@cheunjm](https://github.com/cheunjm)! - Add ProductRow organism for displaying selectable product list items with leading checkbox, optional thumbnail, name, and sku.

- [#347](https://github.com/cheunjm/ui/pull/347) [`6759e18`](https://github.com/cheunjm/ui/commit/6759e189fe06f5ec286b5159bcde7a6651c50aa3) Thanks [@cheunjm](https://github.com/cheunjm)! - Add CatalogGroupHeader organism for catalog browse group selection.

- [#348](https://github.com/cheunjm/ui/pull/348) [`8df5c6b`](https://github.com/cheunjm/ui/commit/8df5c6b1f244977bbfe004e1403080e7a169fc44) Thanks [@cheunjm](https://github.com/cheunjm)! - Add WatchlistRow organism for watchlist item display with state pill indicator.

- [#349](https://github.com/cheunjm/ui/pull/349) [`264e9de`](https://github.com/cheunjm/ui/commit/264e9de30766c068c22c0284506e2f09bf3e1d5b) Thanks [@cheunjm](https://github.com/cheunjm)! - Add WatchlistGroupHeader organism for watchlist list section headers.

- [#355](https://github.com/cheunjm/ui/pull/355) [`b508f48`](https://github.com/cheunjm/ui/commit/b508f487120f0726b5219bd8dad9666ad4a21c05) Thanks [@cheunjm](https://github.com/cheunjm)! - Add SkeletonCard organism — a loading-state placeholder card with small/medium/large size variants controlling card height and skeleton line count.

- [#354](https://github.com/cheunjm/ui/pull/354) [`96ac0f1`](https://github.com/cheunjm/ui/commit/96ac0f19a3a4a947b29990afa7f3a6645ad317cd) Thanks [@cheunjm](https://github.com/cheunjm)! - Add EmptyStateCard organism — a card-shaped inline empty state with optional icon, message, and CTA button.

- [#356](https://github.com/cheunjm/ui/pull/356) [`dd5587d`](https://github.com/cheunjm/ui/commit/dd5587d380606aeaadd178de6bedafd0dd448b80) Thanks [@cheunjm](https://github.com/cheunjm)! - Add ErrorStateCard organism — card-shaped error state with an error icon, title, optional message, and optional retry CTA.

- [#362](https://github.com/cheunjm/ui/pull/362) [`6fffbff`](https://github.com/cheunjm/ui/commit/6fffbffdce42a43e2ac77fee4f39159524ae6155) Thanks [@cheunjm](https://github.com/cheunjm)! - Migrate Button, TextField, Chip, Switch, Text, Icon, Avatar, Divider, and ListItem from Tamagui to react-native-unistyles v3, and add a compiled build (`dist/`, via a `prepare` script) plus a new `@aramiworks/ui/unistyles` sub-path export containing only these Tamagui-free components. Enables consumption as a git dependency by apps outside this repo's npm workspace, which can't rely on Metro transforming TypeScript source from `node_modules`. The remaining atoms/molecules/organisms/templates stay on Tamagui.

### Patch Changes

- [#343](https://github.com/cheunjm/ui/pull/343) [`77c4095`](https://github.com/cheunjm/ui/commit/77c4095a0816fdb7c01e5f2d6a227dfa42d3851c) Thanks [@cheunjm](https://github.com/cheunjm)! - AppBarTemplate canonical Figma cleanup: rename axis State→Type, add doc-stack

- [#344](https://github.com/cheunjm/ui/pull/344) [`415171b`](https://github.com/cheunjm/ui/commit/415171bc97e71339a221b1087ffa5cdd96576efa) Thanks [@cheunjm](https://github.com/cheunjm)! - NavigationTemplate canonical Figma cleanup: rename axis State→Type, add doc-stack

- [#345](https://github.com/cheunjm/ui/pull/345) [`c1cd687`](https://github.com/cheunjm/ui/commit/c1cd6876511caf34634d3bc9d5b1283b5cbc16a7) Thanks [@cheunjm](https://github.com/cheunjm)! - DashboardTemplate canonical Figma cleanup: add doc-stack + rebind story URLs.

- [#350](https://github.com/cheunjm/ui/pull/350) [`ad35855`](https://github.com/cheunjm/ui/commit/ad358552efed651dc6ec0edcd5c48577ccde1f45) Thanks [@cheunjm](https://github.com/cheunjm)! - EmptyStateTemplate canonical Figma cleanup: collapse Type=empty|error to single Type=Default + complete doc-stack.

- [#351](https://github.com/cheunjm/ui/pull/351) [`28b0778`](https://github.com/cheunjm/ui/commit/28b07780098ba0eb293b83a284266dffb4c6a5ba) Thanks [@cheunjm](https://github.com/cheunjm)! - AppShellTemplate canonical Figma doc-stack + create 4 story files.

- [#352](https://github.com/cheunjm/ui/pull/352) [`a0ae7e2`](https://github.com/cheunjm/ui/commit/a0ae7e26b978c9d307dc75758f09461969e41a7e) Thanks [@cheunjm](https://github.com/cheunjm)! - SettingsTemplate canonical: create Figma page + doc-stack + rebind story URLs.

- [#353](https://github.com/cheunjm/ui/pull/353) [`6288a6d`](https://github.com/cheunjm/ui/commit/6288a6d1262bf5fd78ab3956fc0d927935b2b404) Thanks [@cheunjm](https://github.com/cheunjm)! - Rebind story URLs to per-frame doc-stack nodes for divider/icon/text-field/badge.

- [#357](https://github.com/cheunjm/ui/pull/357) [`79a0cfa`](https://github.com/cheunjm/ui/commit/79a0cfa42800559f6796d606c821c6d2adb457ab) Thanks [@cheunjm](https://github.com/cheunjm)! - Avatar canonical Figma: collapse 9 components to single Type=Default + rebind story URLs

- [#359](https://github.com/cheunjm/ui/pull/359) [`62d06c5`](https://github.com/cheunjm/ui/commit/62d06c5fe03cc71fcfcf33b7e0fd977e867ea5dc) Thanks [@cheunjm](https://github.com/cheunjm)! - Rebind story URLs to per-frame doc-stack nodes for fab/button/chip (Path D Wave A2).

- [#301](https://github.com/cheunjm/ui/pull/301) [`98413da`](https://github.com/cheunjm/ui/commit/98413da45345d87173ccc112003bcea3abd0402e) Thanks [@cheunjm](https://github.com/cheunjm)! - Accordion: build canonical Figma master in unified design system file b79qv459pnXaypgNQfNXuc. Single COMPONENT named Type=Default inside COMPONENT_SET Accordion (1591:14) — header row with optional leading icon, title + supporting text, chevron, plus hidden expandable content area and bottom divider. All visual values bound to surface/onSurface/onSurfaceVariant/spacing.lg/spacing.md tokens. Adds Master Component SECTION wrapper + Documentation page (Overview/Variants/Anatomy/Specs) using the doc-stack convention. Story Figma URLs repointed from placeholder to 1591:14.

- [#274](https://github.com/cheunjm/ui/pull/274) [`9fcfc1d`](https://github.com/cheunjm/ui/commit/9fcfc1d2f4607841c035f41428d891c4ac14a933) Thanks [@cheunjm](https://github.com/cheunjm)! - Bind Avatar Figma master variants to Montage tokens: cornerRadius bound to `radii.full` (was `radii.none` — broken square shape), frame fills bound to `primaryContainer` (was hardcoded white). Update avatar specs story to use Montage token names and link to the design system file.

- [#300](https://github.com/cheunjm/ui/pull/300) [`b9daef3`](https://github.com/cheunjm/ui/commit/b9daef37e5c556d8350cbca8f0bf89ecc4d1e919) Thanks [@cheunjm](https://github.com/cheunjm)! - Banner: build canonical Figma master in unified design system file b79qv459pnXaypgNQfNXuc. Single COMPONENT named Type=Default inside COMPONENT_SET Banner (1548:15) with token-bound container (surfaceContainerLow), Material Icons leading "info" glyph (hidden by default), message + supporting text (Inter Medium 14 / Regular 12), hidden actions row, and bottom divider. Adds Master Component SECTION wrapper + Documentation page (Overview/Variants/Anatomy/Specs) following the doc-stack convention. Story Figma URLs repointed from placeholder to 1548:15.

- [#306](https://github.com/cheunjm/ui/pull/306) [`ecc499d`](https://github.com/cheunjm/ui/commit/ecc499db37b75f1187b6faf1f45eeaf8d5ee6e3c) Thanks [@cheunjm](https://github.com/cheunjm)! - Build canonical Figma master for Bottom App Bar organism in unified design system file. Single COMPONENT `Type=Default` composes FAB and IconButton atom instances; full Documentation page (Overview/Variants/Anatomy/Specs).

- [#307](https://github.com/cheunjm/ui/pull/307) [`a3755a9`](https://github.com/cheunjm/ui/commit/a3755a9a39b4f74388e4eb07062ff7b79e6d3b86) Thanks [@cheunjm](https://github.com/cheunjm)! - Build canonical Figma master for Bottom Sheet organism in unified design system file. Single COMPONENT `Type=Default` (412×320, surfaceContainerLow, top corners 2xl) with drag handle + content slot; full Documentation page (Overview/Variants/Anatomy/Specs).

- [#271](https://github.com/cheunjm/ui/pull/271) [`575610c`](https://github.com/cheunjm/ui/commit/575610ce702637aea25900890b458371a0f191da) Thanks [@cheunjm](https://github.com/cheunjm)! - Update Button specs story to match canonical Montage bindings: corner radius 10 dp (radii.sm), removed MD3 `md.sys.color.*` references in favor of Montage token names.

- [#340](https://github.com/cheunjm/ui/pull/340) [`e0b8934`](https://github.com/cheunjm/ui/commit/e0b89343fd7babe57e92ba429312500f49c8228e) Thanks [@cheunjm](https://github.com/cheunjm)! - Canonicalize Switch atom — reduce to single Type=Default master and add token-bound Documentation page (Overview/Variants/Anatomy/Specs) in the unified design system file.

- [#341](https://github.com/cheunjm/ui/pull/341) [`703c5cc`](https://github.com/cheunjm/ui/commit/703c5cc8dcd0fdd31074b8e441b23147bfc17f0e) Thanks [@cheunjm](https://github.com/cheunjm)! - Canonicalize Table atom — reduce 8 Density × Rows masters to single Type=Default master, fix Specs cutoff, and add token-bound Documentation page in the unified design system file.

- [#342](https://github.com/cheunjm/ui/pull/342) [`066145b`](https://github.com/cheunjm/ui/commit/066145be94e8a9582c591a29e59410e0a4f9399d) Thanks [@cheunjm](https://github.com/cheunjm)! - Canonicalize Tooltip atom — reduce to single Type=Default master and add token-bound Documentation page in the unified design system file.

- [#317](https://github.com/cheunjm/ui/pull/317) [`6905eb5`](https://github.com/cheunjm/ui/commit/6905eb583ca3d15a57758acf7e2bab0c6b55a05f) Thanks [@cheunjm](https://github.com/cheunjm)! - Card: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET reduced from 3 variants (elevated/filled/outlined) to a single COMPONENT named Type=Default based on elevated (runtime default). Documentation page rebuilt to doc-stack convention with Overview/Variants/Anatomy/Specs FRAMEs. Story Figma URLs repointed.

- [#285](https://github.com/cheunjm/ui/pull/285) [`c25550a`](https://github.com/cheunjm/ui/commit/c25550a14cfbbb759d06ab36fec6ced2cd8fbeb3) Thanks [@cheunjm](https://github.com/cheunjm)! - Card Figma master (`647:20`): add `Type=filled` and `Type=outlined` variants alongside the existing `elevated` so Figma matches the 3 variants in `card.tsx`. Bindings: `elevated` → `surface` + shadow XS; `filled` → `surfaceVariant`; `outlined` → `surface` + `outlineVariant` 1px stroke. All radii bound to `radii.md`. No runtime change.

- [#275](https://github.com/cheunjm/ui/pull/275) [`a276d09`](https://github.com/cheunjm/ui/commit/a276d09b9d372a6c57c019fa01e75e8fbba8a6ea) Thanks [@cheunjm](https://github.com/cheunjm)! - Align Card surface tokens with Figma master (Montage canonical). Elevated card now uses `$surface` (was `$surfaceContainerLow`); filled card uses `$surfaceVariant` (was `$surfaceContainerHighest`). Outlined card unchanged. Visual change: elevated card is pure white in light mode and relies on shadow for separation; filled card is the surfaceVariant tint. Updates card specs story to drop `md.sys.color.*` references in favor of Montage token names.

- [#309](https://github.com/cheunjm/ui/pull/309) [`1a1951b`](https://github.com/cheunjm/ui/commit/1a1951b9996e2b427336b4efc0f6294aea3a6798) Thanks [@cheunjm](https://github.com/cheunjm)! - Build canonical Figma master for Carousel organism in unified design system file. Single COMPONENT `Type=Default` (items track + pagination dots) bound to surfaceContainerLow / onSurface / outlineVariant / radii.lg / spacing tokens; full Documentation page (Overview/Variants/Anatomy/Specs).

- [#308](https://github.com/cheunjm/ui/pull/308) [`8bb149d`](https://github.com/cheunjm/ui/commit/8bb149d2826711b9ddbbf3b3b59b2b40d06867e0) Thanks [@cheunjm](https://github.com/cheunjm)! - Checkbox: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET Checkbox (637:12) reduced from 6 variants (State × Disabled) to a single COMPONENT named Type=Default (637:3, 18×18) — matches runtime container size. Container fill bound to `primary`, checkmark fill bound to `onPrimary`. State (unchecked/checked/indeterminate), error, and disabled are all runtime concerns; the Variants section communicates them via instance overrides (fill/stroke/visibility/opacity). Documentation page (379:81) rebuilt to doc-stack convention with Overview/Variants/Anatomy/Specs FRAMEs — Anatomy uses Card outlined focal + numbered Badges with Connectors labeling Container/Checkmark, Specs uses a single Table instance (Rows=8) covering Size / Corner radius / Border width / Touch target / Container color / Checkmark color / Border color / Error color. Story Figma URLs repointed to specific doc nodes (1656:3, 1656:24, 1657:2, 1657:19).

- [#302](https://github.com/cheunjm/ui/pull/302) [`2aa291d`](https://github.com/cheunjm/ui/commit/2aa291d9325e09b0f1c2b2637482559198cf96dd) Thanks [@cheunjm](https://github.com/cheunjm)! - Add canonical Date Filter Chips Figma master in the unified design system file with token-bound spacing and surface, plus full Documentation page (Overview/Variants/Anatomy/Specs). Repoints the 4 Date Filter Chips story Figma URLs from the legacy molecules file to the canonical node.

- [#313](https://github.com/cheunjm/ui/pull/313) [`54badac`](https://github.com/cheunjm/ui/commit/54badacd1d468b6bd10d7a44b94fca3f578f51fb) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Date Picker stories at canonical Figma master (1702:113) in the unified DS file and add a token-bound Documentation page (Overview/Variants/Anatomy/Specs).

- [#315](https://github.com/cheunjm/ui/pull/315) [`d8a5283`](https://github.com/cheunjm/ui/commit/d8a528361379090ecb7b94910357888a1a24489a) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Dialog stories at canonical Figma master (1709:13) in the unified DS file and add a token-bound Documentation page (Overview/Variants/Anatomy/Specs).

- [#273](https://github.com/cheunjm/ui/pull/273) [`2afed4c`](https://github.com/cheunjm/ui/commit/2afed4cbaa971b96fcabf9ee435c511334548a64) Thanks [@cheunjm](https://github.com/cheunjm)! - Bind FAB Figma master variants to Montage color tokens (primaryContainer/secondaryContainer/tertiaryContainer/surfaceContainerHigh and corresponding on-container icon colors). Bind FAB large size corner radius to `radii.2xl` (24) — was hardcoded to 28 in both Figma and `FAB_SIZE_MAP`. Updates fab specs story to reflect per-size corner radii and Montage token names.

- [#280](https://github.com/cheunjm/ui/pull/280) [`e669e7f`](https://github.com/cheunjm/ui/commit/e669e7fe4a11171fba40e479347261217c7e0c22) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix stale Figma URLs in 16 template story files. Update Detail/Form/List/Empty State template story design parameters to point to the canonical `b79qv459pnXaypgNQfNXuc/ui` Figma file instead of the deprecated `HaGgCBIkDbJ2jVZp0dUFR0/templates` file.

- [#291](https://github.com/cheunjm/ui/pull/291) [`8082d40`](https://github.com/cheunjm/ui/commit/8082d40b82debe77950d1fb614079f7e40a4991f) Thanks [@cheunjm](https://github.com/cheunjm)! - FormField: build canonical Figma master at node `1452:2` in unified design system file. Single COMPONENT (no variant axis since all variation is optional content). Composes the canonical TextField atom as an instance for the input. Hidden slots for label, support text, and character count. Text colors bound to `onSurfaceVariant`. Story Figma URLs repointed to new master.

- [#296](https://github.com/cheunjm/ui/pull/296) [`82ad8ff`](https://github.com/cheunjm/ui/commit/82ad8ffd6d53009b11f63886a3cff83aa8b0901c) Thanks [@cheunjm](https://github.com/cheunjm)! - Wrap FormField Figma master in COMPONENT_SET as Type=Default (per Single-Master Rule), add Master Component SECTION + Documentation page (Overview/Variants/Anatomy/Specs). Story Figma URLs repointed from inner COMPONENT 1452:2 → COMPONENT_SET wrapper 1481:5.

- [#321](https://github.com/cheunjm/ui/pull/321) [`24fcc6c`](https://github.com/cheunjm/ui/commit/24fcc6c94116b7c650a3be130d3da899ebd74364) Thanks [@cheunjm](https://github.com/cheunjm)! - Build canonical Figma master for Full Screen Dialog organism in unified design system file. Single COMPONENT `Type=Default` (411×600, surface fill, vertical layout) with top-bar (close-button + title + action-button), 1px outlineVariant divider, and scrollable content area; full Documentation page (Overview/Variants/Anatomy/Specs). Repoint 2 story URLs at canonical COMPONENT_SET.

- [#290](https://github.com/cheunjm/ui/pull/290) [`992f2a2`](https://github.com/cheunjm/ui/commit/992f2a2f7190bae4e24302ad4965423369ca74af) Thanks [@cheunjm](https://github.com/cheunjm)! - Render IconButton's visual container at 40×40dp to match Figma node 70:2 (was 48×48). The 48×48dp touch target is preserved via `hitSlop={4}`, mirroring the Checkbox pattern of separating visual size from accessibility hit area.

- [#318](https://github.com/cheunjm/ui/pull/318) [`e9f398a`](https://github.com/cheunjm/ui/commit/e9f398a709aadc125195e4ce75568e5367927a8d) Thanks [@cheunjm](https://github.com/cheunjm)! - Icon Button: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET reduced from 8 variants (4 Variant × 2 Selected) to a single COMPONENT named Type=Default (645:2, standard unselected). Variant and Selected axes dropped as runtime-only. Documentation page rebuilt to doc-stack convention with Overview/Variants/Anatomy/Specs FRAMEs. Story Figma URLs repointed to new doc-stack node IDs.

- [#284](https://github.com/cheunjm/ui/pull/284) [`12be006`](https://github.com/cheunjm/ui/commit/12be0064cb597a22473fc2d1ae9dc219da5072ac) Thanks [@cheunjm](https://github.com/cheunjm)! - Figma masters: bind hardcoded `#FFFFFF` fills on Icon Button (3), Checkbox (4), and Tooltip plain (1) to `onPrimary` / `inverseOnSurface` tokens. Aligns Figma design system file with code (`icon-button.tsx`, `checkbox.tsx`, `tooltip.tsx`) per Card precedent. No runtime change.

- [#278](https://github.com/cheunjm/ui/pull/278) [`029f1b1`](https://github.com/cheunjm/ui/commit/029f1b1feb5b9554a300bdef42f92779dbef9380) Thanks [@cheunjm](https://github.com/cheunjm)! - icon: canonicalize Figma master to remove hardcoded cornerRadius leftover (set to 0). Aligns Icon specs to Montage `onSurface` token vocabulary.

- [#299](https://github.com/cheunjm/ui/pull/299) [`8c8b4f4`](https://github.com/cheunjm/ui/commit/8c8b4f4a7c1a186fb5f6f277dda8cc7f167618d7) Thanks [@cheunjm](https://github.com/cheunjm)! - Switch to the Claude Code review workflow: add a thin per-repo wrapper calling the reusable `claude-review.yml` in `aramiworks/.github`. Removes config for the previous third-party PR-review bot.

- [#311](https://github.com/cheunjm/ui/pull/311) [`bf0dd11`](https://github.com/cheunjm/ui/commit/bf0dd117864fee0ecad45eaab10687230351743a) Thanks [@cheunjm](https://github.com/cheunjm)! - Delete the unreferenced `claude-respond.yml` workflow. Its only trigger (responding to the previous third-party PR-review bot) is no longer reachable; `claude-review.yml` covers the same surface.

- [#289](https://github.com/cheunjm/ui/pull/289) [`e3ab1a8`](https://github.com/cheunjm/ui/commit/e3ab1a89859203e259d75a3ca8802b9bec6a60ea) Thanks [@cheunjm](https://github.com/cheunjm)! - List Item: build canonical Figma master with `Lines=one|two|three` variant axis in unified design system file. Hidden slots for leading icon/avatar + trailing text/element. Background, fills, and padding bound to design tokens (surface, onSurface, onSurfaceVariant, spacing.lg/sm). Story Figma URLs repointed to new master.

- [#293](https://github.com/cheunjm/ui/pull/293) [`dbc415a`](https://github.com/cheunjm/ui/commit/dbc415adb21da8befe62efd888a62b17ca8dc1b4) Thanks [@cheunjm](https://github.com/cheunjm)! - Collapse ListItem Figma master to single Type=Default (per Single-Master Rule) and add Documentation page with Overview/Variants/Anatomy/Specs.

- [#304](https://github.com/cheunjm/ui/pull/304) [`25107f3`](https://github.com/cheunjm/ui/commit/25107f3e1158fc7da74077b2bd939da93f7e53e2) Thanks [@cheunjm](https://github.com/cheunjm)! - Add canonical Menu Figma master in the unified design system file with token-bound surface, radius, spacing, and typography, plus full Documentation page (Overview/Variants/Anatomy/Specs). Repoints the 4 Menu story Figma URLs from the legacy molecules file to the canonical node.

- [#334](https://github.com/cheunjm/ui/pull/334) [`70aa099`](https://github.com/cheunjm/ui/commit/70aa099c0d5e02e79d063e583b945fa415c61f67) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Navigation Bar stories at canonical Figma master (1943:19) in the unified DS file and add a token-bound Documentation page (Overview/Variants/Anatomy/Specs).

- [#338](https://github.com/cheunjm/ui/pull/338) [`af67327`](https://github.com/cheunjm/ui/commit/af67327c661a1305dc12547865294f16c2391d3f) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Navigation Drawer stories at canonical Figma master in the unified DS file and add a token-bound Documentation page (Overview/Variants/Anatomy/Specs).

- [#337](https://github.com/cheunjm/ui/pull/337) [`09e4b7b`](https://github.com/cheunjm/ui/commit/09e4b7b8f749fc0c3708f640013ea5a8ad216ef3) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Navigation Rail stories at canonical Figma master in the unified DS file and add a token-bound Documentation page.

- [#319](https://github.com/cheunjm/ui/pull/319) [`29b02c1`](https://github.com/cheunjm/ui/commit/29b02c17829f2ad0b0e8d305c3cec6890965e06b) Thanks [@cheunjm](https://github.com/cheunjm)! - Progress Indicator: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET reduced from 4 variants (Type=linear/circular × Mode=determinate/indeterminate) to a single COMPONENT named Type=Default. Master restructured with hidden circular-slot for instance overrides in Variants section. Documentation page rebuilt to doc-stack convention. Story Figma URLs repointed.

- [#288](https://github.com/cheunjm/ui/pull/288) [`4a6d125`](https://github.com/cheunjm/ui/commit/4a6d12544b807f65d49220e55a5611de11e7668b) Thanks [@cheunjm](https://github.com/cheunjm)! - Align ProgressIndicator track color with Figma node 68:2 (`primaryContainer` instead of `surfaceContainerHighest`) and add the 4dp linear stop indicator at the track end. Specs story updated to match.

- [#310](https://github.com/cheunjm/ui/pull/310) [`8c9b4c7`](https://github.com/cheunjm/ui/commit/8c9b4c721a9d50c7832aebb563af9506cb1d824d) Thanks [@cheunjm](https://github.com/cheunjm)! - Radio Button: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET Radio Button (644:12) reduced from 4 variants (Selected × Disabled) to a single COMPONENT named Type=Default (644:4, 20×20) — kept the Selected=true variant since it has both outer-ring + inner-dot bound to `primary`. Outer ring stroke bound to `primary`, inner dot fill bound to `primary`. Selected, error, and disabled are runtime concerns; the Variants section communicates them via instance overrides (stroke/fill/visibility/opacity). Documentation page (379:82) rebuilt to doc-stack convention with Overview/Variants/Anatomy/Specs FRAMEs — Anatomy uses Card outlined focal + numbered Badges with Connectors labeling Outer ring / Inner dot, Specs uses a single Table instance (Rows=8) covering Outer circle size / Inner circle size / Border width / Touch target / Shape / Selected color / Unselected color / Error color. Story Figma URLs repointed to specific doc nodes (1687:3, 1687:38, 1690:2, 1690:21).

- [#298](https://github.com/cheunjm/ui/pull/298) [`acbfc07`](https://github.com/cheunjm/ui/commit/acbfc07ddbf0ec94c3d1eef651e78e718fabdef5) Thanks [@cheunjm](https://github.com/cheunjm)! - SearchBar: build canonical Figma master in unified design system file b79qv459pnXaypgNQfNXuc. Single COMPONENT named Type=Default inside COMPONENT_SET SearchBar (1530:8) with token-bound container (surfaceContainerHigh, radii.2xl, spacing.lg padding), Material Icons leading "search" glyph, placeholder input text, and hidden trailing-slot. Adds Master Component SECTION wrapper + Documentation page (Overview/Variants/Anatomy/Specs). Story Figma URLs repointed from deprecated molecules file to 1530:8.

- [#328](https://github.com/cheunjm/ui/pull/328) [`70cb126`](https://github.com/cheunjm/ui/commit/70cb126303df1fc7dbfe7fbca3d64db0f3570751) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Search stories at canonical Figma master (1920:42) in the unified DS file and add a token-bound Documentation page (Overview/Variants/Anatomy/Specs).

- [#329](https://github.com/cheunjm/ui/pull/329) [`5b50379`](https://github.com/cheunjm/ui/commit/5b503790482276d5f4ab2fc0bc538cf11072920a) Thanks [@cheunjm](https://github.com/cheunjm)! - Segmented Button: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET reduced from 2 variants to single COMPONENT named Type=Default. Documentation page rebuilt to doc-stack convention with Overview/Variants/Anatomy/Specs. Story Figma URLs repointed.

- [#294](https://github.com/cheunjm/ui/pull/294) [`81530c4`](https://github.com/cheunjm/ui/commit/81530c47e9e71d79f53b620611fe2e182f555078) Thanks [@cheunjm](https://github.com/cheunjm)! - Use `fontSize.labelLarge` / `lineHeight.labelLarge` typography tokens for SegmentedButton label instead of hardcoded values.

- [#339](https://github.com/cheunjm/ui/pull/339) [`17694db`](https://github.com/cheunjm/ui/commit/17694db7d8d1b2cc3ff73f8cd54ea2c6c4a7c024) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Side Sheet stories at canonical Figma master in the unified DS file and add a token-bound Documentation page.

- [#331](https://github.com/cheunjm/ui/pull/331) [`ef89151`](https://github.com/cheunjm/ui/commit/ef891512c4e883a932d3adeef6cc755640536773) Thanks [@cheunjm](https://github.com/cheunjm)! - Skeleton: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET reduced from 3 variants (Shape=line/block/circle) to single COMPONENT named Type=Default. Documentation page rebuilt to doc-stack convention. Story Figma URLs repointed.

- [#330](https://github.com/cheunjm/ui/pull/330) [`017eb98`](https://github.com/cheunjm/ui/commit/017eb98b6c503158c28fb0ecb9324334f5e1d759) Thanks [@cheunjm](https://github.com/cheunjm)! - Slider: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET reduced from 4 variants to single COMPONENT named Type=Default. Documentation page rebuilt to doc-stack convention. Story Figma URLs repointed.

- [#295](https://github.com/cheunjm/ui/pull/295) [`2529cf8`](https://github.com/cheunjm/ui/commit/2529cf87d133c04e85775e6334bf4374d01523b9) Thanks [@cheunjm](https://github.com/cheunjm)! - Slider: correct specs story (inactive track is `primaryContainer`, not `surfaceContainerHighest`) and tokenize `ValueLabelText` `fontSize` to `fontSize.labelSmall`.

- [#281](https://github.com/cheunjm/ui/pull/281) [`ab145b0`](https://github.com/cheunjm/ui/commit/ab145b0b1b9b68a5a948cf51efbdf35e51e8a6b4) Thanks [@cheunjm](https://github.com/cheunjm)! - slider, switch: bind hardcoded white fills in Figma masters to onPrimary token. Slider discrete-enabled ticks (5 ellipses) and Switch selected-enabled thumb were drawn with raw #FFFFFF — now bound to `onPrimary` so theme + dark mode work correctly. Code already used `onPrimary`; only Figma was drifted.

- [#322](https://github.com/cheunjm/ui/pull/322) [`61aa83e`](https://github.com/cheunjm/ui/commit/61aa83eeacbfa83b91f7e2a91394a3f29998b894) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Snackbar stories at canonical Figma master (1813:8) in the unified DS file and add a token-bound Documentation page (Overview/Variants/Anatomy/Specs).

- [#305](https://github.com/cheunjm/ui/pull/305) [`3c7a682`](https://github.com/cheunjm/ui/commit/3c7a682c356ca670bb20bb2596e7225c048ebabe) Thanks [@cheunjm](https://github.com/cheunjm)! - Spacer: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET Spacer (642:4) reduced from 2 Direction variants (horizontal/vertical) to a single COMPONENT named Type=Default (642:2, 16×16). Direction is runtime-only — code's `direction` prop handles axis at render time via `width`/`height` on a `View`. Documentation page (379:80) rebuilt to doc-stack convention with Overview/Variants/Anatomy/Specs FRAMEs — Anatomy switched from RECTANGLE/VECTOR primitives to Card outlined focal + two filled Card boxes flanking a Spacer instance with 3 Connectors, Specs uses a single Table instance (Rows=5) covering Spacing scale / Direction / Flex / Default size / Token source. Story Figma URLs repointed to specific doc nodes (1637:3, 1637:9, 1638:2, 1639:2) and the COMPONENT_SET (642:4).

- [#283](https://github.com/cheunjm/ui/pull/283) [`fd20be7`](https://github.com/cheunjm/ui/commit/fd20be78592b50262724f2ea21200085b4d09941) Thanks [@cheunjm](https://github.com/cheunjm)! - specs stories: align all 22 `*-specs.story.tsx` files (atoms + molecules + organisms) from legacy `md.sys.color.*` vocabulary to Montage token names. Mechanical sweep matching the Icon precedent (PR #278): `md.sys.color.primary` → `primary`, `md.sys.color.on-primary` → `onPrimary`, `md.sys.color.surface-container-high` → `surfaceContainerHigh`, etc. No runtime change — pure documentation cleanup.

- [#297](https://github.com/cheunjm/ui/pull/297) [`67ab622`](https://github.com/cheunjm/ui/commit/67ab622d33c70a71b48de69a3ed69650ea9bead5) Thanks [@cheunjm](https://github.com/cheunjm)! - Switch: thumb now sits 4dp from track edge in both ON and OFF states (matches Figma spec). Previously the ON state used 2dp padding while OFF state used 2dp border + 2dp padding = 4dp.

- [#332](https://github.com/cheunjm/ui/pull/332) [`418490c`](https://github.com/cheunjm/ui/commit/418490c770b1602e9da92085846529af9d37bbfa) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Tab Bar stories at canonical Figma master (1923:13) in the unified DS file and add a token-bound Documentation page (Overview/Variants/Anatomy/Specs).

- [#277](https://github.com/cheunjm/ui/pull/277) [`173fa0e`](https://github.com/cheunjm/ui/commit/173fa0ef5ba00a23700e426e93ce9cdb7598987f) Thanks [@cheunjm](https://github.com/cheunjm)! - Bind Table Figma master variants to Montage tokens: variant frame fill→`surface`, stroke→`outline`. TableHeader fill→`surfaceVariant`. Code aligned to match: header and stripe rows now use `$surfaceVariant` (was `$surfaceContainerHighest`/`$surfaceContainer`). TableRow alt stripe in Figma kept hardcoded (#FAFAFA has no exact Montage token — flagged as follow-up). Update table specs story to reference Montage token names.

- [#282](https://github.com/cheunjm/ui/pull/282) [`c413eb2`](https://github.com/cheunjm/ui/commit/c413eb2697bb6bb1b531cb6dc6e5d3784b19136d) Thanks [@cheunjm](https://github.com/cheunjm)! - table: bind TableRow Stripe=alt fill in Figma master to surfaceVariant token (was hardcoded #FAFAFA). Code already uses `$surfaceVariant` (#F7F7F8) for stripe rows; this aligns Figma to code per the canonical alignment rule. Resolves the residual deferred item from the atom Montage drift audit.

- [#303](https://github.com/cheunjm/ui/pull/303) [`cb77a81`](https://github.com/cheunjm/ui/commit/cb77a81f60702a72d7ce3f404c85a939bc882880) Thanks [@cheunjm](https://github.com/cheunjm)! - Text: canonicalize Figma master in unified design system file b79qv459pnXaypgNQfNXuc. COMPONENT_SET Text (639:32) reduced from 15 role×size variants to a single COMPONENT named Type=Default (639:22). Master TEXT child aligned to runtime `bodyMedium` tokens (fontSize 16, lineHeight 24, letterSpacing 0.09, Inter Regular) with fill bound to `onSurface`. 5 existing instances re-pointed to master with TEXT overrides preserving role/size styling. Documentation page (379:79) rebuilt to doc-stack convention with Overview/Variants/Anatomy/Specs FRAMEs — Anatomy now uses Card focal + Connector instances (no RECTANGLE/VECTOR), Specs uses two Table instances (Rows=10 + Rows=5) covering all 15 MD3 typography rows. Story Figma URLs repointed to specific doc nodes (1603:3, 1603:9, 1604:2, 1610:2) and the COMPONENT_SET (639:32).

- [#292](https://github.com/cheunjm/ui/pull/292) [`c650262`](https://github.com/cheunjm/ui/commit/c650262afdf38269a35ce19aeac8451b599be5d1) Thanks [@cheunjm](https://github.com/cheunjm)! - Replace hardcoded fontSize/lineHeight numbers in TextField (LabelText, HelperText, CounterText, TextInput) with references to `src/tokens/generated/typography.ts`. Specs story now reads sizes from the same tokens, so it stays current with the Montage-aligned token pipeline. Mirrors the pattern established for Text and Tooltip in PR #287.

- [#287](https://github.com/cheunjm/ui/pull/287) [`59d7ce1`](https://github.com/cheunjm/ui/commit/59d7ce1f0f403c77266eae1d02cb5c687837b0a7) Thanks [@cheunjm](https://github.com/cheunjm)! - Refresh Text and Tooltip specs stories to read font sizes from `src/tokens/generated/typography.ts` instead of hardcoded MD3 reference numbers, so the displayed values stay current with the Montage-aligned token pipeline.

- [#336](https://github.com/cheunjm/ui/pull/336) [`da2ccd4`](https://github.com/cheunjm/ui/commit/da2ccd4f9187550bc041a24389ab874e6f4381d7) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Time Picker stories at canonical Figma master in the unified DS file and add a token-bound Documentation page.

- [#286](https://github.com/cheunjm/ui/pull/286) [`bacade5`](https://github.com/cheunjm/ui/commit/bacade52e4c9089ef5c1cda889c177aa5828b679) Thanks [@cheunjm](https://github.com/cheunjm)! - Tooltip Figma rich variant (`649:4`): align to code's MD3 v2 vocabulary. Was: `inverseSurface` bg + `xs` radius + `#FFFFFF` title + `outlineVariant` body (matching plain). Now: `surfaceContainer` bg + `md` radius + small shadow + `onSurface` title + `onSurfaceVariant` body (matches `tooltip.tsx` `RichContainer`). Plain variant unchanged. No runtime change.

- [#323](https://github.com/cheunjm/ui/pull/323) [`eedb909`](https://github.com/cheunjm/ui/commit/eedb90965572a243e5481bfb2773f90ead7f8d31) Thanks [@cheunjm](https://github.com/cheunjm)! - Repoint Top App Bar stories at canonical Figma master (1809:14) in the unified DS file and add a token-bound Documentation page (Overview/Variants/Anatomy/Specs).

- [#276](https://github.com/cheunjm/ui/pull/276) [`536aa6c`](https://github.com/cheunjm/ui/commit/536aa6c214fa9282be4b7826378604db71123615) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix Vite alias resolution for `react-native/Libraries/Utilities/codegenNativeComponent` so Storybook web builds (and dev server) resolve the spec import to a stub instead of failing with esbuild path errors.

- [#279](https://github.com/cheunjm/ui/pull/279) [`4480c78`](https://github.com/cheunjm/ui/commit/4480c788a583c516dd150f2b2a09b47f9fb4c7cc) Thanks [@cheunjm](https://github.com/cheunjm)! - Apply web extension priority to Vite's `optimizeDeps` so packages like `react-native-safe-area-context` resolve to their `.web.js` variants in the dev server (matching `resolve.extensions`). Fixes a runtime "Element type is invalid" error in Storybook web caused by the native specs being pre-bundled instead of the web implementations.

## 0.10.0

### Minor Changes

- [#254](https://github.com/aramiworks/ui/pull/254) [`b8e388a`](https://github.com/aramiworks/ui/commit/b8e388ad02ab57ee267f9680b509eaee89e84bda) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Table atom with compound API (Table, TableHeader, TableRow, TableCell). Supports default (52px) and compact (36px) density, automatic alternating row stripes, and follows MD3 Data Table spec.

- [#261](https://github.com/aramiworks/ui/pull/261) [`44535cb`](https://github.com/aramiworks/ui/commit/44535cbd74328d15c3da15f7ced2164648cddc99) Thanks [@cheunjm](https://github.com/cheunjm)! - Add `NavigationTemplate` and `AppBarTemplate` for EFCV-leveled layouts. NavigationTemplate owns the experience-level nav bar slot; AppBarTemplate owns the flow-level top app bar slot. Templates compose: NavigationTemplate → AppBarTemplate → DashboardTemplate/ListTemplate/etc.

- [#268](https://github.com/aramiworks/ui/pull/268) [`06e2b0f`](https://github.com/aramiworks/ui/commit/06e2b0f9336ea0cee4fb83b002572caa1a773546) Thanks [@cheunjm](https://github.com/cheunjm)! - Add `AppShellTemplate` — full-screen page chrome composing topAppBar, content slot, and bottomNavigationBar. Closes the Figma↔code parity gap for the design system Templates file.

- [#270](https://github.com/aramiworks/ui/pull/270) [`60fdfb4`](https://github.com/aramiworks/ui/commit/60fdfb47ff0009f88772eabf5e63b9f9144060b5) Thanks [@cheunjm](https://github.com/cheunjm)! - Add `onLongPress` prop to Card atom. The Card now becomes interactive when either `onPress` or `onLongPress` is provided, wiring the handler through the inner Pressable.

### Patch Changes

- [#262](https://github.com/aramiworks/ui/pull/262) [`e0a851c`](https://github.com/aramiworks/ui/commit/e0a851cfe488a21df74877a77b50101e48d0fe0d) Thanks [@cheunjm](https://github.com/cheunjm)! - Add tests to bring Jest coverage to 100% across statements/branches/functions/lines and enforce a 100% coverage threshold in jest.config.ts.

- [#265](https://github.com/aramiworks/ui/pull/265) [`eaa2e3d`](https://github.com/aramiworks/ui/commit/eaa2e3d911acf34e411523ffa950abeb14e2ac1b) Thanks [@cheunjm](https://github.com/cheunjm)! - Bind design system Figma file to Montage tokens. The design system file (`b79qv459pnXaypgNQfNXuc`) now owns `color` (light + dark modes), `radii`, and `spacing` variable collections, with all master components rebound from MD3 defaults to these variables. The token pipeline gains alpha-aware hex output and aliases for the new collection names, allowing `colors.ts` to round-trip identically from the Figma file.

- [#256](https://github.com/aramiworks/ui/pull/256) [`f949efd`](https://github.com/aramiworks/ui/commit/f949efda85ea93c673b3174ecf35ddbf9c049001) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix date-picker test using stale hardcoded date that's now in the past.

- [#257](https://github.com/aramiworks/ui/pull/257) [`e78c28a`](https://github.com/aramiworks/ui/commit/e78c28a66fe67cfc445b4387e2ac118556bc0b5b) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix slider test asserting stale literal disabled opacity (0.38 → DISABLED_OPACITY).

- [#260](https://github.com/aramiworks/ui/pull/260) [`83cbf8f`](https://github.com/aramiworks/ui/commit/83cbf8fe9bdb0a0f8cdb7821f174773a0b706515) Thanks [@cheunjm](https://github.com/cheunjm)! - Wrap Storybook web preview in `SafeAreaProvider` so stories using `useSafeAreaInsets` (e.g. top-app-bar) render correctly in Chromatic.

- [#258](https://github.com/aramiworks/ui/pull/258) [`fcec597`](https://github.com/aramiworks/ui/commit/fcec59706ceba1c9e0db06b911a2aaf9b6cda92d) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix time-picker and navigation-drawer test drift against current component output.

- [#267](https://github.com/aramiworks/ui/pull/267) [`6550c2b`](https://github.com/aramiworks/ui/commit/6550c2bfe946d5c8f7b0d76d158415d77f399ffe) Thanks [@cheunjm](https://github.com/cheunjm)! - Add conflict-fix trigger to ci-autofix wrapper.

- [#252](https://github.com/aramiworks/ui/pull/252) [`caabc5e`](https://github.com/aramiworks/ui/commit/caabc5e77b3093e3787e005395242ec6ff5ab2d1) Thanks [@cheunjm](https://github.com/cheunjm)! - Token pipeline now extracts all Figma modes (Light + Dark) and auto-generates `colors.ts` and `colors-dark.ts` in a single pass. `colors-dark.ts` was previously hand-maintained — it is now regenerated from Figma Variables with identical values.

- [#264](https://github.com/aramiworks/ui/pull/264) [`b859705`](https://github.com/aramiworks/ui/commit/b8597056c5f8eb286b3b02c82c1ee1c1c58ce1b3) Thanks [@cheunjm](https://github.com/cheunjm)! - Replace hardcoded radius and spacing values with design tokens across atoms and organisms — circles and pills now use `$full`, padding/gaps use semantic spacing tokens (`$xs`/`$sm`/`$md`/`$lg`/`$2xl`).

- [#263](https://github.com/aramiworks/ui/pull/263) [`e77b451`](https://github.com/aramiworks/ui/commit/e77b4516a16ea92a91409847d4b457e44fda9c15) Thanks [@cheunjm](https://github.com/cheunjm)! - Update Figma URLs in NavigationTemplate and AppBarTemplate stories to point to the canonical ui Figma file (`b79qv459pnXaypgNQfNXuc`) after the standalone templates file was deleted. Templates now live alongside atoms/molecules/organisms in the unified design system file.

## 0.9.0

### Minor Changes

- [#255](https://github.com/aramiworks/ui/pull/255) [`8b766c1`](https://github.com/aramiworks/ui/commit/8b766c167cad0fead2b6b77087b758e180789a54) Thanks [@cheunjm](https://github.com/cheunjm)! - TopAppBar: apply top safe-area inset internally via `useSafeAreaInsets`, and add a `trailingContent?: ReactNode` slot to support text/destructive actions (e.g. 수정/삭제 in stock-tracker accounts-detail) when the icon-only `actions` API isn't sufficient. The `trailingContent` slot replaces `actions` when both are provided.

### Patch Changes

- [#251](https://github.com/aramiworks/ui/pull/251) [`41c9441`](https://github.com/aramiworks/ui/commit/41c9441ebb349ebd598236a7ec308b41dc148af4) Thanks [@cheunjm](https://github.com/cheunjm)! - Refactor anatomy stories to use actual library components instead of hardcoded mock elements.

- [#248](https://github.com/aramiworks/ui/pull/248) [`21ffa76`](https://github.com/aramiworks/ui/commit/21ffa76ccbc582ce26298944ef6b9328dc6ecde5) Thanks [@cheunjm](https://github.com/cheunjm)! - Replace hardcoded colors and spacing with tokens — montage phase 4a.

- [#250](https://github.com/aramiworks/ui/pull/250) [`e832d6b`](https://github.com/aramiworks/ui/commit/e832d6baeeefc14da3ce330019cfe142057707ad) Thanks [@cheunjm](https://github.com/cheunjm)! - Add WCAG AA contrast check script (non-blocking CI report) — montage phase 4b.

## 0.8.0

### Minor Changes

- [#247](https://github.com/aramiworks/ui/pull/247) [`9b007f6`](https://github.com/aramiworks/ui/commit/9b007f68b4dd9e635e806c595313c61b94a52f5d) Thanks [@cheunjm](https://github.com/cheunjm)! - Retheme design system to match Wanted Montage visual language: blue primary palette, Pretendard font, 10px button radius, Montage shadow presets, and updated interaction states across 19 components.

### Patch Changes

- [#242](https://github.com/aramiworks/ui/pull/242) [`f3fca43`](https://github.com/aramiworks/ui/commit/f3fca436165711c9e1458730e6a73a5e4e8debdb) Thanks [@cheunjm](https://github.com/cheunjm)! - Centralize dev ports into scripts/ports.env and change Storybook port to 6007 (avoids conflict with stock-tracker which uses 6006).

- [#246](https://github.com/aramiworks/ui/pull/246) [`3a6ffd4`](https://github.com/aramiworks/ui/commit/3a6ffd4c348c8ed96e025a460676f52c4e70f29f) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix accessibilityValue.now always reporting min for range slider variant.

- [#244](https://github.com/aramiworks/ui/pull/244) [`f83a9ce`](https://github.com/aramiworks/ui/commit/f83a9cee9997e939c45e226395e7f06749eaf8b5) Thanks [@cheunjm](https://github.com/cheunjm)! - Add branch coverage tests to achieve 100% Jest test coverage across all components.

## 0.7.0

### Minor Changes

- [#236](https://github.com/aramiworks/ui/pull/236) [`76da34b`](https://github.com/aramiworks/ui/commit/76da34b0f89d54e5d9346b427efbb872dcabf0c6) Thanks [@cheunjm](https://github.com/cheunjm)! - Add `layouts` re-exports (`XStack`, `YStack`, `ZStack`, `Stack`, `View` from Tamagui) so consumers have a single import source. Update `EmptyStateTemplate` `icon` prop from `string` to `ReactNode | string` to support custom icon nodes alongside MaterialIcons names.

### Patch Changes

- [#234](https://github.com/aramiworks/ui/pull/234) [`acc1bd9`](https://github.com/aramiworks/ui/commit/acc1bd9ea6395b0fd3e905f7cba386823152b2ec) Thanks [@cheunjm](https://github.com/cheunjm)! - Improve mprocs.yaml: add port-kill prefix, SIGTERM stop signals, and consistent cmd format.

- [#238](https://github.com/aramiworks/ui/pull/238) [`3ba4b2f`](https://github.com/aramiworks/ui/commit/3ba4b2fd07085242227d956107e7509d3301975e) Thanks [@cheunjm](https://github.com/cheunjm)! - Add dev-dashboard wrapper script with npm install and port cleanup phases, matching stock-tracker pattern.

- [#240](https://github.com/aramiworks/ui/pull/240) [`ae2e9f2`](https://github.com/aramiworks/ui/commit/ae2e9f2ae8f9cd1a3335d378a38f57259ac41cbb) Thanks [@cheunjm](https://github.com/cheunjm)! - Add sleep after port kill in mprocs commands to prevent Expo port conflict prompt.

- [#239](https://github.com/aramiworks/ui/pull/239) [`1be0617`](https://github.com/aramiworks/ui/commit/1be0617321b919bba7e20b621bba9733e107b59c) Thanks [@cheunjm](https://github.com/cheunjm)! - Exclude react-native-reanimated from Vite dep optimization to fix ReactFabric error in Storybook dev server.

- [#241](https://github.com/aramiworks/ui/pull/241) [`59d1d9a`](https://github.com/aramiworks/ui/commit/59d1d9aea7bf1909eac998f04444579117f8adbc) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix iOS on-device Storybook errors: move storybook-sort import to preview (fixes deeperSort undefined), remove Tamagui config path from babel plugin (fixes parse error when extraction is disabled).

- [#237](https://github.com/aramiworks/ui/pull/237) [`a3a56b0`](https://github.com/aramiworks/ui/commit/a3a56b011ebf765c1f1c60947010d37cc4aeda66) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix Storybook build errors: ReactFabric alias ordering and extensionless import warning.

## 0.6.0

### Minor Changes

- [#223](https://github.com/aramiworks/ui/pull/223) [`f82d163`](https://github.com/aramiworks/ui/commit/f82d163b25f492bbb88e048f7d2215098ae5bcd4) Thanks [@cheunjm](https://github.com/cheunjm)! - Add docked (inline) variant to DatePicker.

- [#212](https://github.com/aramiworks/ui/pull/212) [`a59fcc9`](https://github.com/aramiworks/ui/commit/a59fcc938eaf6c1d659b17146c3e2bb3c46a3101) Thanks [@cheunjm](https://github.com/cheunjm)! - Add hero image variant to Dialog with `heroImage` prop for full-width images above the title.

- [#217](https://github.com/aramiworks/ui/pull/217) [`c999ca9`](https://github.com/aramiworks/ui/commit/c999ca9fff71cc1cc8e68a8a9df5bcb10bfa5119) Thanks [@cheunjm](https://github.com/cheunjm)! - Add `leadingAvatar` and `trailingElement` props to ListItem for avatar leading content and interactive trailing elements.

- [#214](https://github.com/aramiworks/ui/pull/214) [`e80af13`](https://github.com/aramiworks/ui/commit/e80af13eb16f03432203fc370ffb1f23a4a1a585) Thanks [@cheunjm](https://github.com/cheunjm)! - Add divider support and cascading submenus to Menu with `MenuDivider` type and `submenu` prop on `MenuItem`.

- [#222](https://github.com/aramiworks/ui/pull/222) [`cb1c1cd`](https://github.com/aramiworks/ui/commit/cb1c1cda5ddfb800cb6e77354500c66782399c30) Thanks [@cheunjm](https://github.com/cheunjm)! - Add standard (inline) variant to NavigationDrawer.

- [#210](https://github.com/aramiworks/ui/pull/210) [`6e9dadd`](https://github.com/aramiworks/ui/commit/6e9dadd825ca82c8a5939267eef707c4664062b8) Thanks [@cheunjm](https://github.com/cheunjm)! - Add optional menu icon to NavigationRail with `menuIcon` prop for hamburger menu at the top.

- [#213](https://github.com/aramiworks/ui/pull/213) [`739d80c`](https://github.com/aramiworks/ui/commit/739d80cd07775aacf5b11a0e6694ab1c4542e565) Thanks [@cheunjm](https://github.com/cheunjm)! - Add full-screen variant to Search with `variant` prop for overlay search experience.

- [#216](https://github.com/aramiworks/ui/pull/216) [`2c9da54`](https://github.com/aramiworks/ui/commit/2c9da54674df7602596e0e9f03059a97fa5aaace) Thanks [@cheunjm](https://github.com/cheunjm)! - Add range variant to Slider with dual-thumb support and `lowValue`/`highValue`/`onRangeChange` props.

- [#209](https://github.com/aramiworks/ui/pull/209) [`9be678b`](https://github.com/aramiworks/ui/commit/9be678b1ad7988a1a8883c5bf86d4e5587aad65e) Thanks [@cheunjm](https://github.com/cheunjm)! - Add two-line variant to Snackbar with `lines` prop for multi-line messages.

- [#218](https://github.com/aramiworks/ui/pull/218) [`6b94fdc`](https://github.com/aramiworks/ui/commit/6b94fdce20c61b9e869c8d3df718fb7d78c747fe) Thanks [@cheunjm](https://github.com/cheunjm)! - Add refreshControl, contentContainerStyle, showsVerticalScrollIndicator props to DashboardTemplate, ListTemplate, and DetailTemplate. Add fab slot to DashboardTemplate and ListTemplate.

- [#219](https://github.com/aramiworks/ui/pull/219) [`2f455e2`](https://github.com/aramiworks/ui/commit/2f455e2fff53fab3c91c0dd1d2a8dc660715e315) Thanks [@cheunjm](https://github.com/cheunjm)! - Add useConfirmDialog hook — imperative API for showing MD3-styled confirm dialogs without managing visible state at the call site.

### Patch Changes

- [#225](https://github.com/aramiworks/ui/pull/225) [`2125fc4`](https://github.com/aramiworks/ui/commit/2125fc4a002d31bb98e136691528a6729a572ebb) Thanks [@cheunjm](https://github.com/cheunjm)! - claude/respond posts a PR summary comment after each CI fix attempt.

- [#224](https://github.com/aramiworks/ui/pull/224) [`66dc4b4`](https://github.com/aramiworks/ui/commit/66dc4b45a0c90331545c08d9226456e115813380) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix ci-autofix workflow by inlining jobs — workflow_run triggers cannot call reusable workflows.

- [#215](https://github.com/aramiworks/ui/pull/215) [`b8de819`](https://github.com/aramiworks/ui/commit/b8de81918d50659613e2562762374bee94ec4ef9) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix ci-autofix triggering on main branch pushes causing startup_failure spam.

- [#231](https://github.com/aramiworks/ui/pull/231) [`d94862d`](https://github.com/aramiworks/ui/commit/d94862df0098a1f88b21c2bba10608f975cad3f9) Thanks [@cheunjm](https://github.com/cheunjm)! - fix(ci): remove accidentally committed node_modules symlink that broke release workflow

- [#226](https://github.com/aramiworks/ui/pull/226) [`9481fdc`](https://github.com/aramiworks/ui/commit/9481fdcfe5cb45b535f998e33173098114f3132b) Thanks [@cheunjm](https://github.com/cheunjm)! - fix(ci): use direct binary path for changeset CLI in release workflow

- [#229](https://github.com/aramiworks/ui/pull/229) [`f2a7e01`](https://github.com/aramiworks/ui/commit/f2a7e015f93a0466658866ee6e264035642db9f9) Thanks [@cheunjm](https://github.com/cheunjm)! - Remove custom version command from release workflow; use action-bundled changeset instead.

- [#228](https://github.com/aramiworks/ui/pull/228) [`34c9b5b`](https://github.com/aramiworks/ui/commit/34c9b5b1da5e00c9eb48ef7d4031cd7e407beeda) Thanks [@cheunjm](https://github.com/cheunjm)! - fix(ci): use node directly to run changeset CLI in release workflow, bypassing missing binary symlink

- [#227](https://github.com/aramiworks/ui/pull/227) [`477bdf5`](https://github.com/aramiworks/ui/commit/477bdf5eccb25f4ec01906629ec228be32cbf060) Thanks [@cheunjm](https://github.com/cheunjm)! - Use local changeset binary in release workflow to avoid npx registry resolution failure.

- [#220](https://github.com/aramiworks/ui/pull/220) [`664da7a`](https://github.com/aramiworks/ui/commit/664da7ab8729f76af5ac683d2cf462d784e8bb31) Thanks [@cheunjm](https://github.com/cheunjm)! - Add keyboardAvoiding prop to FullScreenDialog — wraps body ScrollView in KeyboardAvoidingView when true, recommended for dialogs containing form inputs.

- [#212](https://github.com/aramiworks/ui/pull/212) [`9e1b47a`](https://github.com/aramiworks/ui/commit/9e1b47a06a722c04160d777a01eea4aeaf66fb27) Thanks [@cheunjm](https://github.com/cheunjm)! - fix(useConfirmDialog): stabilize callbacks with refs to prevent stale closures and Modal remounts; remove redundant react-native Text wrapper inside Dialog body

  fix(menu): reset submenu state on close, guard disabled subitems, add submenu accessibility role

  fix(full-screen-dialog): scope keyboardShouldPersistTaps to keyboardAvoiding=true only

- [#232](https://github.com/aramiworks/ui/pull/232) [`b41b897`](https://github.com/aramiworks/ui/commit/b41b897c74007ec9099f9b6c03f1664d0827f296) Thanks [@cheunjm](https://github.com/cheunjm)! - Add workflow to post passing Greptile Review status when PR has no reviewable files.

- [#211](https://github.com/aramiworks/ui/pull/211) [`e19e04e`](https://github.com/aramiworks/ui/commit/e19e04e903255f81118449b78e7b28f23b6daa66) Thanks [@cheunjm](https://github.com/cheunjm)! - Add story sort order to on-device Storybook to match web (overview, variants, anatomy, specs).

- [#221](https://github.com/aramiworks/ui/pull/221) [`875305b`](https://github.com/aramiworks/ui/commit/875305b08d164bd573ea477fff54f55c01b0019d) Thanks [@cheunjm](https://github.com/cheunjm)! - Remove deploy-storybook.yml workflow — Storybook deploy is now handled by the eas-build web job per profile.

- [#230](https://github.com/aramiworks/ui/pull/230) [`bf395c4`](https://github.com/aramiworks/ui/commit/bf395c45253ba131d06457fc1e288ca43c26afbb) Thanks [@cheunjm](https://github.com/cheunjm)! - Remove accidentally committed node_modules symlink that broke CI release workflow.

## 0.5.0

### Minor Changes

- [#164](https://github.com/aramiworks/ui/pull/164) [`48b53af`](https://github.com/aramiworks/ui/commit/48b53af69575b9d36c2d41aed13dbf529008c69d) Thanks [@cheunjm](https://github.com/cheunjm)! - Harden accessibility across all atoms and molecules with consistent roles, states, labels, and test assertions.

- [#158](https://github.com/aramiworks/ui/pull/158) [`729c9ee`](https://github.com/aramiworks/ui/commit/729c9eeb461d884978e972a9d4a25f8230198cba) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Avatar atom component with image, initials, and icon variants in three sizes.

- [#159](https://github.com/aramiworks/ui/pull/159) [`b691d8c`](https://github.com/aramiworks/ui/commit/b691d8ccaed454e43ce9c8f57f0f2641e00f9300) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Banner and Accordion molecule components with full MD3 styling and animated transitions.

- [#166](https://github.com/aramiworks/ui/pull/166) [`7b157ad`](https://github.com/aramiworks/ui/commit/7b157ad9664b3160bb36b9d7acacbcf51c11d360) Thanks [@cheunjm](https://github.com/cheunjm)! - Add SettingsTemplate and DashboardTemplate for settings screens and dashboard layouts.

- [#162](https://github.com/aramiworks/ui/pull/162) [`6b2b7c3`](https://github.com/aramiworks/ui/commit/6b2b7c3c48d921080a3322873558464d0ae1f442) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Figma Variables → TypeScript token pipeline (tokens:fetch + tokens:build scripts).

- [#207](https://github.com/aramiworks/ui/pull/207) [`f35062f`](https://github.com/aramiworks/ui/commit/f35062fc51b8f929dda82b6e9bd2df85411e46cd) Thanks [@cheunjm](https://github.com/cheunjm)! - Add hero variant to Carousel with larger item sizing and full-width layout.

- [#157](https://github.com/aramiworks/ui/pull/157) [`c64f703`](https://github.com/aramiworks/ui/commit/c64f703824de44d998f68da5fdd88dd8ca2c8979) Thanks [@cheunjm](https://github.com/cheunjm)! - Add dark mode support with MD3 dark color palette, custom Tamagui themes, and UiProvider theme switching via useThemeMode hook.

- [#197](https://github.com/aramiworks/ui/pull/197) [`e3daec2`](https://github.com/aramiworks/ui/commit/e3daec29193d2e0a381bc53af18b50caa80b8de7) Thanks [@cheunjm](https://github.com/cheunjm)! - Add range selection mode and year selector to DatePicker component.

- [#193](https://github.com/aramiworks/ui/pull/193) [`393acd8`](https://github.com/aramiworks/ui/commit/393acd8e9566cebc3bd9fc204b3caf094b97ca49) Thanks [@cheunjm](https://github.com/cheunjm)! - Expand MD3 animation token set with standardDecelerate, standardAccelerate, emphasized presets and full duration scale.

- [#199](https://github.com/aramiworks/ui/pull/199) [`329a47d`](https://github.com/aramiworks/ui/commit/329a47d285cb3b1817679e8db8e35fcae8050f6d) Thanks [@cheunjm](https://github.com/cheunjm)! - Add FullScreenDialog organism for MD3 full-screen dialog pattern.

- [#120](https://github.com/aramiworks/ui/pull/120) [`557b411`](https://github.com/aramiworks/ui/commit/557b4113aace0e5c1e2b3965524fdaf25ab74f8a) Thanks [@cheunjm](https://github.com/cheunjm)! - Add SideSheet organism — MD3 side panel that slides in from left or right with optional header and close action.

- [#115](https://github.com/aramiworks/ui/pull/115) [`3c5b157`](https://github.com/aramiworks/ui/commit/3c5b1574dbe0050e20e05c271178d693d1309013) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Search organism — MD3 full search experience with suggestions panel, recent searches, and active/inactive states.

- [#208](https://github.com/aramiworks/ui/pull/208) [`d0c381a`](https://github.com/aramiworks/ui/commit/d0c381a321a069ac44f88b38ac163034981159ed) Thanks [@cheunjm](https://github.com/cheunjm)! - Add label-less variant to NavigationBar with `showLabels` prop to hide text labels.

- [#201](https://github.com/aramiworks/ui/pull/201) [`05c91c0`](https://github.com/aramiworks/ui/commit/05c91c0cdea9a8620d2ed5c1db86ca535a3557be) Thanks [@cheunjm](https://github.com/cheunjm)! - Add standard variant to SideSheet for persistent inline display without Modal/scrim.

- [#141](https://github.com/aramiworks/ui/pull/141) [`0aad4a4`](https://github.com/aramiworks/ui/commit/0aad4a45d10a0f4535c4b696e4fb10e9b7a11ab0) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Skeleton atom — animated loading placeholder with pulse animation, supports line/block/circle/pill shapes.

### Patch Changes

- [#188](https://github.com/aramiworks/ui/pull/188) [`78199f9`](https://github.com/aramiworks/ui/commit/78199f98cb621f049c7c73ea84ff790ad862dab4) Thanks [@cheunjm](https://github.com/cheunjm)! - Add accessibilityHint prop support to all interactive components.

- [#175](https://github.com/aramiworks/ui/pull/175) [`54b423b`](https://github.com/aramiworks/ui/commit/54b423bdfa742b050a1340169253dcb3610ac683) Thanks [@cheunjm](https://github.com/cheunjm)! - Add dark mode render tests for all theme-dependent components and Storybook theme toggle.

- [#174](https://github.com/aramiworks/ui/pull/174) [`e322535`](https://github.com/aramiworks/ui/commit/e32253536d53b6625477b375875456bfff3b9e22) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Prettier format check to CI and auto-format existing codebase.

- [#177](https://github.com/aramiworks/ui/pull/177) [`e267bee`](https://github.com/aramiworks/ui/commit/e267bee5b99c76e48abeaef0ca1edadb5bdcbb13) Thanks [@cheunjm](https://github.com/cheunjm)! - Add standalone Storybook build check to CI.

- [#167](https://github.com/aramiworks/ui/pull/167) [`ac5d8a8`](https://github.com/aramiworks/ui/commit/ac5d8a808fdd43ba477ed46a2106f6bab0f635f8) Thanks [@cheunjm](https://github.com/cheunjm)! - Add tokens-sync CI workflow for automated Figma-to-code token generation.

- [#187](https://github.com/aramiworks/ui/pull/187) [`ccc93c6`](https://github.com/aramiworks/ui/commit/ccc93c697465c253e8a4815219b8dfd623017978) Thanks [@cheunjm](https://github.com/cheunjm)! - Add `tokens:sync` convenience script that runs fetch + build in one step.

- [#139](https://github.com/aramiworks/ui/pull/139) [`32eea8b`](https://github.com/aramiworks/ui/commit/32eea8b4628755eb136fa40bb3b1476c81ab40a4) Thanks [@cheunjm](https://github.com/cheunjm)! - Gate Chromatic CI job on src/ changes to avoid unnecessary builds on non-story PRs.

- [#163](https://github.com/aramiworks/ui/pull/163) [`a6761fa`](https://github.com/aramiworks/ui/commit/a6761fab8af79350902e9221a29a928e7a675ee7) Thanks [@cheunjm](https://github.com/cheunjm)! - Remove hardcoded hex color fallbacks for dark-mode-safe theme token resolution.

- [#186](https://github.com/aramiworks/ui/pull/186) [`585cdb3`](https://github.com/aramiworks/ui/commit/585cdb367548fcb12bf4bbeff787728ef49d22c9) Thanks [@cheunjm](https://github.com/cheunjm)! - Deepen test coverage for Slider, FormField, Carousel, Avatar, and Badge.

- [#200](https://github.com/aramiworks/ui/pull/200) [`696b0bb`](https://github.com/aramiworks/ui/commit/696b0bb15ad0c962ba830f3e5b02898bfe7b7b83) Thanks [@cheunjm](https://github.com/cheunjm)! - Add scrollable prop to Dialog for long body content.

- [#147](https://github.com/aramiworks/ui/pull/147) [`ed14453`](https://github.com/aramiworks/ui/commit/ed14453322dd52d9f563228eadca8d9a5c85cd64) Thanks [@cheunjm](https://github.com/cheunjm)! - Auto-trigger EAS builds on release with version-to-environment mapping.

- [#149](https://github.com/aramiworks/ui/pull/149) [`a6f94e2`](https://github.com/aramiworks/ui/commit/a6f94e218d07dfc846da1d23be09240c9bad8c96) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Figma design page links to all molecule, organism, template, and extra atom stories.

- [#142](https://github.com/aramiworks/ui/pull/142) [`7539e11`](https://github.com/aramiworks/ui/commit/7539e11974b26337a52b7a1777aca21118d69e29) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Figma design node links to card, tooltip, and skeleton stories.

- [#145](https://github.com/aramiworks/ui/pull/145) [`a8a7683`](https://github.com/aramiworks/ui/commit/a8a7683e99083bdf9eec97e4e06e9aa088228b5a) Thanks [@cheunjm](https://github.com/cheunjm)! - Convert app.config.ts to app.config.js so EAS CLI can parse it without TypeScript support.

- [#140](https://github.com/aramiworks/ui/pull/140) [`9cae2c2`](https://github.com/aramiworks/ui/commit/9cae2c2372252a69a392ee827151b82ce256dfd0) Thanks [@cheunjm](https://github.com/cheunjm)! - Remove incorrect Figma node links from card and tooltip overview stories — both pointed to the Button page.

- [#143](https://github.com/aramiworks/ui/pull/143) [`3b5c90f`](https://github.com/aramiworks/ui/commit/3b5c90fd925dfd2ca8159a23ff35a43e1e7513db) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix EAS Update CI — use import type so sucrase strips TypeScript annotations correctly.

- [#153](https://github.com/aramiworks/ui/pull/153) [`f0bb00a`](https://github.com/aramiworks/ui/commit/f0bb00ac0293d494884bce7ab7308edca84a895e) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix createIconComponent mock to use the fontFamily parameter instead of hardcoding 'Material Icons'.

- [#148](https://github.com/aramiworks/ui/pull/148) [`d8a6c3f`](https://github.com/aramiworks/ui/commit/d8a6c3f848d41f0d0d51b356ce8a58212865313a) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix storybook:generate script to use correct .ondevice config path.

- [#205](https://github.com/aramiworks/ui/pull/205) [`9f02b4a`](https://github.com/aramiworks/ui/commit/9f02b4a4130815f44f6db88ee068d8842f91c9b7) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix Storybook story ordering with storybook-deeper-sort addon.

- [#180](https://github.com/aramiworks/ui/pull/180) [`d1c5492`](https://github.com/aramiworks/ui/commit/d1c549282e0cb0cd80e45058594132b72cd2e73f) Thanks [@cheunjm](https://github.com/cheunjm)! - Add commit status gating to Greptile Response workflow and convert from reusable to standalone.

- [#152](https://github.com/aramiworks/ui/pull/152) [`4b55120`](https://github.com/aramiworks/ui/commit/4b55120afc4cc14fd3ebae46aea81407da7107d0) Thanks [@cheunjm](https://github.com/cheunjm)! - Gate OTA updates behind CI passing — switch EAS Update trigger from push to workflow_run so OTA only publishes when e2e-web passes.

- [#150](https://github.com/aramiworks/ui/pull/150) [`372269c`](https://github.com/aramiworks/ui/commit/372269c0b93e74adf9765bef9de552fa7db0685c) Thanks [@cheunjm](https://github.com/cheunjm)! - Add Deploy Storybook workflow to publish Storybook to Vercel on push to main.

- [#156](https://github.com/aramiworks/ui/pull/156) [`d0d3437`](https://github.com/aramiworks/ui/commit/d0d3437ff2e1c1449c15b26c449567a969d9a409) Thanks [@cheunjm](https://github.com/cheunjm)! - Remove developmentClient from develop EAS profile so it builds a standalone internal app.

- [#161](https://github.com/aramiworks/ui/pull/161) [`0804226`](https://github.com/aramiworks/ui/commit/080422685aab7617f44fbdabb85f4d8adf884ca1) Thanks [@cheunjm](https://github.com/cheunjm)! - Add storybook:generate step to EAS Build web job to fix missing storybook.requires error.

- [#168](https://github.com/aramiworks/ui/pull/168) [`c05295c`](https://github.com/aramiworks/ui/commit/c05295c4f89abf871aacbb63a367cc159b3df3bd) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix EAS Build Slack notifications to post to the correct channel.

- [#171](https://github.com/aramiworks/ui/pull/171) [`bdc6770`](https://github.com/aramiworks/ui/commit/bdc677039f4525101d570b4c6711e550cf98cb01) Thanks [@cheunjm](https://github.com/cheunjm)! - Add eas-build-post-install hook to generate storybook.requires on Expo servers; fix Slack notification to show Expo build URL and fail on EAS error.

- [#173](https://github.com/aramiworks/ui/pull/173) [`fded37d`](https://github.com/aramiworks/ui/commit/fded37dc1d3c58044fceeaa5b15afb6ee2e5ef87) Thanks [@cheunjm](https://github.com/cheunjm)! - Improve EAS build Slack notification format to show platform and profile as distinct fields.

- [#182](https://github.com/aramiworks/ui/pull/182) [`1108ca6`](https://github.com/aramiworks/ui/commit/1108ca627826780d3b7847acec639e35960b09a0) Thanks [@cheunjm](https://github.com/cheunjm)! - Deploy Expo web build to Vercel in EAS build web job; link Vercel URL in Slack notification.

- [#195](https://github.com/aramiworks/ui/pull/195) [`3e8a97d`](https://github.com/aramiworks/ui/commit/3e8a97d6b7d019a856aaeaba148c4a7b38474d53) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix Vercel deploy step to run from dist/ working directory so project.json is discovered correctly.

- [#198](https://github.com/aramiworks/ui/pull/198) [`7dbf3ec`](https://github.com/aramiworks/ui/commit/7dbf3ecfc40a4c9f1858435b20390423b93507c0) Thanks [@cheunjm](https://github.com/cheunjm)! - Remove ad-hoc Vercel deploy from eas-build web job; Slack notification now links to storybook.ui.arami.so.

- [#206](https://github.com/aramiworks/ui/pull/206) [`2a0d469`](https://github.com/aramiworks/ui/commit/2a0d4695644b077a85c4efe53103441e54d7ceaf) Thanks [@cheunjm](https://github.com/cheunjm)! - Increase native EAS build timeout from 45 to 90 minutes to handle queue waits.

- [#151](https://github.com/aramiworks/ui/pull/151) [`e85ba57`](https://github.com/aramiworks/ui/commit/e85ba572ab30acecbf1c22c97fcfae68b3174443) Thanks [@cheunjm](https://github.com/cheunjm)! - Remove redundant claude-code-review workflow; Greptile covers auto PR review org-wide.

- [#185](https://github.com/aramiworks/ui/pull/185) [`24ef439`](https://github.com/aramiworks/ui/commit/24ef4391e43899e425552eb575c9427e3c5657f7) Thanks [@cheunjm](https://github.com/cheunjm)! - Standardize Skeleton and NavigationDrawer to use react-native-reanimated.

- [#203](https://github.com/aramiworks/ui/pull/203) [`b3f6dac`](https://github.com/aramiworks/ui/commit/b3f6dac2e455351531a0986fe6d0dfea445969c8) Thanks [@cheunjm](https://github.com/cheunjm)! - Deploy Storybook per build profile with env-specific URLs (develop/stage/production).

## 0.4.0

### Minor Changes

- [#109](https://github.com/aramiworks/ui/pull/109) [`24a49f6`](https://github.com/aramiworks/ui/commit/24a49f6b0a1689ef17a47f01de8882d0bede1ce5) Thanks [@cheunjm](https://github.com/cheunjm)! - Add 4-section story structure (Overview, Anatomy, Specs, Variants) with Figma design links across all atoms, molecules, organisms, and templates.

- [#119](https://github.com/aramiworks/ui/pull/119) [`2ad90e1`](https://github.com/aramiworks/ui/commit/2ad90e1f126a627ee2fcd3e825c51860c2f40946) Thanks [@cheunjm](https://github.com/cheunjm)! - Add BottomAppBar organism — MD3 bottom action bar with FAB slot and up to 4 icon button actions.

- [#117](https://github.com/aramiworks/ui/pull/117) [`2562be8`](https://github.com/aramiworks/ui/commit/2562be8b3cf0b3d929ae6bf33f02c61f8beb5d86) Thanks [@cheunjm](https://github.com/cheunjm)! - Add TabBar organism — MD3 primary and secondary tab bars with fixed and scrollable variants.

- [#124](https://github.com/aramiworks/ui/pull/124) [`06f30da`](https://github.com/aramiworks/ui/commit/06f30dac8aef5c8280013013f55bab23a3feba38) Thanks [@cheunjm](https://github.com/cheunjm)! - Upgrade Storybook from v8 to v10 across all packages.

### Patch Changes

- [#128](https://github.com/aramiworks/ui/pull/128) [`92d370c`](https://github.com/aramiworks/ui/commit/92d370cea8ea39624c20871018da15677411f79d) Thanks [@cheunjm](https://github.com/cheunjm)! - Restrict EAS build/update to main branch and sync runtimeVersion from package.json major.minor.

- [#134](https://github.com/aramiworks/ui/pull/134) [`0a10426`](https://github.com/aramiworks/ui/commit/0a10426478522152c30b7a58be9883ecba6a3b91) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix icon font not rendering on Storybook web — correct Material Icons font family name and add ligature settings.

- [#130](https://github.com/aramiworks/ui/pull/130) [`a0e793e`](https://github.com/aramiworks/ui/commit/a0e793e2abdcdd5bf2ff819702a6cca8d079de68) Thanks [@cheunjm](https://github.com/cheunjm)! - Add workflow_dispatch trigger to release workflow for manual triggering.

- [#132](https://github.com/aramiworks/ui/pull/132) [`05d43aa`](https://github.com/aramiworks/ui/commit/05d43aaf1749f14dc9e6dbbdc89d02b30371d12d) Thanks [@cheunjm](https://github.com/cheunjm)! - Bump create-github-app-token to v2 in release workflow to fix PKCS#1 key format support.

- [#133](https://github.com/aramiworks/ui/pull/133) [`285ec79`](https://github.com/aramiworks/ui/commit/285ec797d2c73a333822f1718f7227238e781952) Thanks [@cheunjm](https://github.com/cheunjm)! - Update mprocs dashboard with dedicated ios/android panes and fix expo-vector-icons mock font rendering.

- [#131](https://github.com/aramiworks/ui/pull/131) [`f7abbd4`](https://github.com/aramiworks/ui/commit/f7abbd4a610dda73f949fee03830cb4a2bb48df9) Thanks [@cheunjm](https://github.com/cheunjm)! - Fix Material Icons rendering in Storybook web — load font via preview-head.html and convert hyphenated icon names to underscore format for ligature support.

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
