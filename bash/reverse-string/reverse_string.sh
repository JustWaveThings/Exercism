#!/usr/bin/env bash

main() {
  reversed="$(echo "$1" | rev)"
  echo "$reversed"
}

main "$@"
