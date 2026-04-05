# @aramiworks/ui — Design System

Expo-based component library. Brad Frost atomic design with MD3 interface and Tamagui internals.

## Start Storybook

```bash
npm start          # Expo dev server (press i for iOS, a for Android, w for web)
```

## Structure

- `src/atoms/` — basic building blocks (Button, Text, Icon, etc.)
- `src/molecules/` — composed atoms (SearchBar, FormField, etc.)
- `src/organisms/` — complex UI sections (TopAppBar, NavigationBar, etc.)
- `src/templates/` — page-level layouts (FormTemplate, ListTemplate, etc.)
- `src/tokens/generated/` — auto-generated from Figma (DO NOT EDIT)
- `src/tokens/custom/` — hand-written tokens (animation, etc.)
- `.ondevice/` — Storybook React Native config

## Secrets Management

- No Doppler project for this repo (secrets managed via GitHub Actions secrets and 1Password)
- **EAS environments**: `develop` / `stage` / `master` (set via `APP_ENV` in eas.json profiles)

## Conventions

- Components use Tamagui `styled()` internally, expose MD3 API externally
- All visual values come from tokens — no hardcoded colors, spacing, or sizes
- Stories in `stories/` subfolder with `.story.tsx` extension
- Token pipeline: Figma Variables → Token Studio → `tokens/generated/*.ts`
