#!/usr/bin/env bash
set -euo pipefail

# @cheunjm/ui — Local Dev Dashboard
# Grid layout showing live status of dev services, devices, and logs.
# Usage: ./scripts/dashboard.sh [--once]

INTERVAL=5
ONCE=false
[[ "${1:-}" == "--once" ]] && ONCE=true

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
LOGS_DIR="$REPO_ROOT/logs"

# Colors (must use $'...' so escape chars are real bytes, not literals)
GREEN=$'\033[0;32m'
DIM=$'\033[2m'
BOLD=$'\033[1m'
RESET=$'\033[0m'

check_port() { lsof -iTCP:"$1" -sTCP:LISTEN -P >/dev/null 2>&1; }
check_process() { pgrep -f "$1" >/dev/null 2>&1; }

# Repeat char $1 exactly $2 times
rep() { printf "%${2}s" | tr ' ' "$1"; }

# Strip ANSI escape codes to measure visible length
visible_len() { printf '%s' "$1" | sed $'s/\033\\[[0-9;]*m//g' | wc -m | tr -d ' '; }

# Pad string to visible width $2 (accounts for hidden ANSI bytes)
pad() {
  local str="$1" width="$2"
  local vlen
  vlen=$(visible_len "$str")
  local pad=$(( width - vlen ))
  if (( pad > 0 )); then
    printf '%s%*s' "$str" "$pad" ''
  else
    printf '%s' "$str"
  fi
}

render() {
  local cols
  cols=$(tput cols 2>/dev/null || echo 80)
  local half=$(( cols / 2 ))
  local lw=$(( half - 3 ))   # inner width of left cell
  local rw=$(( cols - half - 3 ))  # inner width of right cell
  local fw=$(( cols - 4 ))   # inner width of full-width row

  clear

  printf "${BOLD}npm run dev:dashboard${RESET}${DIM} — ui design system${RESET}\n\n"

  # ── Data collection ──────────────────────────────────────

  local expo_running=false sb_running=false
  check_port 8081 && expo_running=true || true
  check_port 6006 && sb_running=true  || true

  local android_names=() ios_names=()
  if command -v adb >/dev/null 2>&1; then
    while IFS= read -r line; do
      [[ -z "$line" ]] && continue
      local serial model
      serial=$(awk '{print $1}' <<< "$line")
      model=$(adb -s "$serial" shell getprop ro.product.model 2>/dev/null || echo "$serial")
      android_names+=("$model")
    done < <(adb devices 2>/dev/null | tail -n +2 | grep -w "device" || true)
  fi
  if command -v xcrun >/dev/null 2>&1; then
    while IFS= read -r line; do
      [[ -z "$line" ]] && continue
      echo "$line" | grep -qi "mac\|macbook\|mac studio\|mac mini\|mac pro\|imac" && continue
      ios_names+=("$(echo "$line" | sed 's/ ([A-F0-9-]*)$//')")
    done < <(xcrun xctrace list devices 2>/dev/null \
      | sed -n '/== Devices ==/,/== Simulators ==/p' \
      | grep -v "^==" | grep -v "^$" || true)
  fi
  local dev_count=$(( ${#android_names[@]} + ${#ios_names[@]} ))

  local jest_label maestro_label
  if check_process "jest"; then
    jest_label="${GREEN}running${RESET}"
  else
    jest_label="${DIM}--${RESET}"
  fi
  if check_process "maestro"; then
    maestro_label="${GREEN}running${RESET}"
  else
    maestro_label="${DIM}--${RESET}"
  fi

  # ── Helpers ───────────────────────────────────────────────

  local expo_dot sb_dot dev_dot
  if $expo_running; then expo_dot="${GREEN}●${RESET}"; else expo_dot="${DIM}○${RESET}"; fi
  if $sb_running;   then sb_dot="${GREEN}●${RESET}";   else sb_dot="${DIM}○${RESET}"; fi
  if (( dev_count > 0 )); then dev_dot="${GREEN}●${RESET}"; else dev_dot="${DIM}○${RESET}"; fi

  cell_row() {
    local l="$1" r="$2"
    printf "│ %s │ %s │\n" "$(pad "$l" $lw)" "$(pad "$r" $rw)"
  }
  full_row() {
    printf "│ %s │\n" "$(pad "$1" $fw)"
  }

  # ── Draw ──────────────────────────────────────────────────

  # Top border
  printf "┌%s┬%s┐\n" "$(rep '─' $((half - 1)))" "$(rep '─' $((cols - half - 1)))"

  # Row 1: EXPO | STORYBOOK — titles
  cell_row \
    "${expo_dot}  ${BOLD}EXPO${RESET}" \
    "${sb_dot}  ${BOLD}STORYBOOK${RESET}"

  # Row 1: sub-info
  if $expo_running; then
    local expo_sub="${DIM}android · ios · web${RESET}  ${DIM}:8081${RESET}"
  else
    local expo_sub="${DIM}android · ios · web${RESET}"
  fi
  if $sb_running; then
    local sb_sub="${DIM}port 6006${RESET}"
  else
    local sb_sub="${DIM}stopped${RESET}"
  fi
  cell_row "$expo_sub" "$sb_sub"

  # Mid divider
  printf "├%s┼%s┤\n" "$(rep '─' $((half - 1)))" "$(rep '─' $((cols - half - 1)))"

  # Row 2: DEVICES | TESTS — titles
  cell_row \
    "${dev_dot}  ${BOLD}DEVICES${RESET}" \
    "${DIM}🧪${RESET}  ${BOLD}TESTS${RESET}"

  # Row 2: sub-info
  if (( dev_count > 0 )); then
    local all_devs=("${android_names[@]+"${android_names[@]}"}" "${ios_names[@]+"${ios_names[@]}"}")
    local dev_sub
    dev_sub=$(IFS=' · '; echo "${all_devs[*]}")
    cell_row "${DIM}${dev_sub}${RESET}" "jest ${jest_label}  maestro ${maestro_label}"
  else
    cell_row "${DIM}no device${RESET}" "jest ${jest_label}  maestro ${maestro_label}"
  fi

  # Logs section — collapse middle divider to full width
  printf "├%s┴%s┤\n" "$(rep '─' $((half - 1)))" "$(rep '─' $((cols - half - 1)))"

  full_row "${DIM}📋${RESET}  ${BOLD}LOGS${RESET}"

  local has_logs=false
  for svc in expo storybook; do
    local logfile="$LOGS_DIR/${svc}.log"
    if [[ -f "$logfile" && -s "$logfile" ]]; then
      has_logs=true
      full_row "${DIM}── ${svc} ──${RESET}"
      tail -n 4 "$logfile" 2>/dev/null | while IFS= read -r line; do
        full_row "${DIM}${line}${RESET}"
      done
    fi
  done
  if ! $has_logs; then
    full_row "${DIM}no logs — run ./scripts/start.sh to capture output${RESET}"
  fi

  # Bottom border
  printf "└%s┘\n" "$(rep '─' $((cols - 2)))"

  printf "\n${DIM}%s · every %ds · ctrl+c to exit${RESET}\n" "$(date '+%H:%M:%S')" "$INTERVAL"
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
