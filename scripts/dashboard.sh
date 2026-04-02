#!/usr/bin/env bash
set -euo pipefail

# @cheunjm/ui — Local Dev Dashboard
# Shows live status of dev services, connected devices, and running processes.
# Usage: ./scripts/dashboard.sh [--once]

INTERVAL=5
ONCE=false
[[ "${1:-}" == "--once" ]] && ONCE=true

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
DIM='\033[2m'
BOLD='\033[1m'
RESET='\033[0m'

check_port() {
  lsof -iTCP:"$1" -sTCP:LISTEN -P >/dev/null 2>&1
}

check_process() {
  pgrep -f "$1" >/dev/null 2>&1
}

status_dot() {
  if "$1"; then
    printf "${GREEN}●${RESET}"
  else
    printf "${DIM}○${RESET}"
  fi
}

render() {
  clear
  printf "${BOLD}@cheunjm/ui — Local Dev Dashboard${RESET}\n"
  printf "${DIM}%s · refreshing every %ds${RESET}\n\n" "$(date '+%H:%M:%S')" "$INTERVAL"

  # --- Services ---
  printf "${CYAN}Services${RESET}\n"

  local expo_running=false metro_running=false sb_web_running=false
  check_port 8081 && expo_running=true
  check_process "metro" && metro_running=true
  check_port 6006 && sb_web_running=true

  printf "  %s  Expo Dev Server        %s\n" "$(status_dot $expo_running)" "$( $expo_running && echo ':8081' || echo '--' )"
  printf "  %s  Metro Bundler          %s\n" "$(status_dot $metro_running)" "$( $metro_running && echo 'running' || echo '--' )"
  printf "  %s  Storybook Web          %s\n" "$(status_dot $sb_web_running)" "$( $sb_web_running && echo ':6006' || echo '--' )"
  echo

  # --- Devices ---
  printf "${CYAN}Devices${RESET}\n"

  # Android
  if command -v adb >/dev/null 2>&1; then
    local android_devices
    android_devices=$(adb devices 2>/dev/null | tail -n +2 | grep -w "device" || true)
    if [[ -n "$android_devices" ]]; then
      while IFS= read -r line; do
        local serial model
        serial=$(echo "$line" | awk '{print $1}')
        model=$(adb -s "$serial" shell getprop ro.product.model 2>/dev/null || echo "$serial")
        printf "  ${GREEN}●${RESET}  Android  %s\n" "$model"
      done <<< "$android_devices"
    else
      printf "  ${DIM}○${RESET}  Android  ${DIM}no device${RESET}\n"
    fi
  else
    printf "  ${YELLOW}○${RESET}  Android  ${DIM}adb not found${RESET}\n"
  fi

  # iOS
  if command -v xcrun >/dev/null 2>&1; then
    local ios_devices
    ios_devices=$(xcrun xctrace list devices 2>/dev/null | sed -n '/== Devices ==/,/== Simulators ==/p' | grep -v "^==" | grep -v "^$" || true)
    local physical_count=0
    if [[ -n "$ios_devices" ]]; then
      while IFS= read -r line; do
        [[ -z "$line" ]] && continue
        # Skip the Mac itself
        if echo "$line" | grep -qi "mac\|macbook\|mac studio\|mac mini\|mac pro\|iMac"; then
          continue
        fi
        printf "  ${GREEN}●${RESET}  iOS      %s\n" "$(echo "$line" | sed 's/ ([A-F0-9-]*)$//')"
        physical_count=$((physical_count + 1))
      done <<< "$ios_devices"
    fi
    if [[ $physical_count -eq 0 ]]; then
      printf "  ${DIM}○${RESET}  iOS      ${DIM}no device${RESET}\n"
    fi
  else
    printf "  ${YELLOW}○${RESET}  iOS      ${DIM}xcrun not found${RESET}\n"
  fi
  echo

  # --- Tests ---
  printf "${CYAN}Processes${RESET}\n"

  local jest_running=false maestro_running=false lint_running=false tsc_running=false
  check_process "jest.*cheunjm/ui" && jest_running=true
  check_process "maestro" && maestro_running=true
  check_process "eslint.*src/" && lint_running=true
  check_process "tsc.*noEmit" && tsc_running=true

  printf "  %s  Jest                   %s\n" "$(status_dot $jest_running)" "$( $jest_running && echo 'running' || echo '--' )"
  printf "  %s  Maestro E2E            %s\n" "$(status_dot $maestro_running)" "$( $maestro_running && echo 'running' || echo '--' )"
  printf "  %s  ESLint                 %s\n" "$(status_dot $lint_running)" "$( $lint_running && echo 'running' || echo '--' )"
  printf "  %s  TypeScript             %s\n" "$(status_dot $tsc_running)" "$( $tsc_running && echo 'running' || echo '--' )"
  echo

  printf "${DIM}Press Ctrl+C to exit${RESET}\n"
}

if $ONCE; then
  render
  exit 0
fi

trap 'printf "\n"; exit 0' INT TERM
while true; do
  render
  sleep "$INTERVAL"
done
