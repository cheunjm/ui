#!/usr/bin/env bash
set -euo pipefail

# @aramiworks/ui — Service launcher
# Starts dev services in the background and pipes output to logs/*.log
# so the dashboard can tail them.
#
# Usage:
#   ./scripts/start.sh expo          # Expo dev server
#   ./scripts/start.sh storybook     # Storybook Web
#   ./scripts/start.sh all           # Both
#   ./scripts/start.sh stop          # Kill all managed services

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
LOGS_DIR="$REPO_ROOT/logs"
PIDS_DIR="$REPO_ROOT/logs/pids"

mkdir -p "$LOGS_DIR" "$PIDS_DIR"

log() { printf "\033[0;36m[start]\033[0m %s\n" "$*"; }
err() { printf "\033[0;31m[start]\033[0m %s\n" "$*" >&2; }

start_service() {
  local name="$1"
  local cmd="$2"
  local logfile="$LOGS_DIR/${name}.log"
  local pidfile="$PIDS_DIR/${name}.pid"

  if [[ -f "$pidfile" ]]; then
    local existing_pid
    existing_pid=$(cat "$pidfile")
    if kill -0 "$existing_pid" 2>/dev/null; then
      log "$name already running (pid $existing_pid)"
      return
    fi
    rm -f "$pidfile"
  fi

  log "Starting $name → logs/${name}.log"
  : > "$logfile"
  bash -c "cd '$REPO_ROOT' && $cmd" >> "$logfile" 2>&1 &
  echo $! > "$pidfile"
  log "$name started (pid $!)"
}

stop_service() {
  local name="$1"
  local pidfile="$PIDS_DIR/${name}.pid"

  if [[ ! -f "$pidfile" ]]; then
    return
  fi

  local pid
  pid=$(cat "$pidfile")
  if kill -0 "$pid" 2>/dev/null; then
    log "Stopping $name (pid $pid)"
    kill "$pid" 2>/dev/null || true
    sleep 1
    kill -9 "$pid" 2>/dev/null || true
  fi
  rm -f "$pidfile"
}

cmd="${1:-all}"

case "$cmd" in
  expo)
    start_service "expo" "npm start"
    ;;
  storybook)
    start_service "storybook" "npm run storybook:web"
    ;;
  all)
    start_service "expo" "npm start"
    start_service "storybook" "npm run storybook:web"
    ;;
  stop)
    stop_service "expo"
    stop_service "storybook"
    log "All services stopped"
    ;;
  *)
    err "Unknown command: $cmd"
    echo "Usage: $0 [expo|storybook|all|stop]"
    exit 1
    ;;
esac
