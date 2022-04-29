#!/bin/bash

static_assets=""
script="-- $1"

if [ -z "$1" ]; then
  static_assets="public"
  script=""
fi

echo $script

wrangler pages dev $static_assets \
--binding AUTH0_FRONTEND_AUDIENCE=$WORKER_AUTH0_FRONTEND_AUDIENCE \
--binding AUTH0_DOMAIN=$WORKER_AUTH0_DOMAIN \
--binding AUTH0_BACKEND_SECRET=$WORKER_AUTH0_BACKEND_SECRET \
--binding AUTH0_BACKEND_ID=$WORKER_AUTH0_BACKEND_ID \
--binding CF_ACCOUNT_ID=$WORKER_CF_ACCOUNT_ID \
--binding CF_API_TOKEN=$WORKER_CF_API_TOKEN \
$script