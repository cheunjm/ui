#!/bin/bash
# Takes screenshots of all Storybook stories on iOS Simulator (headless-compatible)
# Uses terminate+relaunch per story since simctl openurl doesn't work headlessly
# Usage: ./scripts/ios-visual-screenshots.sh <simulator-udid> <output-dir>

set -euo pipefail

UDID="${1:?Usage: $0 <simulator-udid> <output-dir>}"
OUTPUT_DIR="${2:?Usage: $0 <simulator-udid> <output-dir>}"
BUNDLE_ID="com.aramiworks.ui.storybook"

mkdir -p "$OUTPUT_DIR"

# Story IDs — keep in sync with src/**/*.story.tsx
STORIES=(
  "atoms-spacer-stories-spacer-horizontal--default"
  "atoms-spacer-stories-spacer-vertical--default"
  "atoms-text-stories-text-body--default"
  "atoms-text-stories-text-display--default"
  "atoms-text-stories-text-headline--default"
  "atoms-text-stories-text-label--default"
  "atoms-text-stories-text-title--default"
  "atoms-button-stories-button-anatomy--default"
  "atoms-button-stories-button-overview--default"
  "atoms-button-stories-button-specs--default"
  "atoms-button-stories-button-variants--default"
)

for STORY_ID in "${STORIES[@]}"; do
  echo "Screenshotting: $STORY_ID"
  xcrun simctl terminate "$UDID" "$BUNDLE_ID" 2>/dev/null || true
  sleep 1
  xcrun simctl launch "$UDID" "$BUNDLE_ID" -STORYBOOK_STORY_ID "$STORY_ID"
  sleep 5
  xcrun simctl io "$UDID" screenshot "$OUTPUT_DIR/ios-${STORY_ID}.png"
done

echo "Done — ${#STORIES[@]} screenshots saved to $OUTPUT_DIR"
