#!/usr/bin/env bash
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "Usage: npm run tokens:sync -- <export.json>"
  echo "       bash scripts/tokens-sync.sh <export.json>"
  exit 1
fi

npx tsx scripts/tokens-fetch.ts --input "$1"
npx tsx scripts/tokens-build.ts
