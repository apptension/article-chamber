#!/bin/bash

set -e

FULL_SERVICE_NAME="env-${CHAMBER_ENV}-${CHAMBER_SERVICE}";
CHAMBER_KMS_KEY_ALIAS="${CHAMBER_ENV}-env-kms-key"

CHAMBER_KMS_KEY_ALIAS="${CHAMBER_KMS_KEY_ALIAS}" /bin/chamber export "${FULL_SERVICE_NAME}" \
  | jq '.' \
  | vipe \
  | CHAMBER_KMS_KEY_ALIAS="${CHAMBER_KMS_KEY_ALIAS}" /bin/chamber import "${FULL_SERVICE_NAME}" -
