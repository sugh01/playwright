#!/bin/bash

# Check if SHARD_COUNT is provided as a command-line argument
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <SHARD_COUNT>"
    exit 1
fi

SHARD_COUNT=$1

# Generate Docker Compose file dynamically
cat <<EOF >docker-compose.yml
version: '3'

services:
EOF

for ((i=1; i<=$SHARD_COUNT; i++)); do
    cat <<EOF >>docker-compose.yml
  playwright-$i:
    build:
      context: .
      dockerfile: Dockerfile
    command: ["sh", "-c", "npx playwright test --shard=$i/$SHARD_COUNT"]
    volumes:
      - ./blob-report:/usr/src/app/blob-report
EOF
done
