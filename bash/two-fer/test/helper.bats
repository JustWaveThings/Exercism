setup() {
  load 'test_helper/common-setup'
  _common_setup

  source "$PROJECT_ROOT/src/helper.sh"
}

teardown() {
  rm -f "$NON_EXISTANT_FIRST_RUN_FILE"
  rm -f "$EXISTING_FIRST_RUN_FILE"
}

@test "Check first run" {
  NON_EXISTANT_FIRST_RUN_FILE=$(mktemp -u)

  assert _is_first_run
  refute _is_first_run
  refute _is_first_run

  EXISTING_FIRST_RUN_FILE=$(mktemp)
  refute _is_first_run
  refute _is_first_run
}
