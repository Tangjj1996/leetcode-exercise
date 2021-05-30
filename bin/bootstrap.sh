#!/bin/bash

set -e # abort when catch error

read -p "Please enter your order for execute: " RUN_PATH

MATCH_FILE=$(ls src | grep $RUN_PATH)

FULL_PATH=$(pwd)/src/$MATCH_FILE

echo "yoru runtime file path is $FULL_PATH"

ts-node $FULL_PATH