#!/bin/bash

set -e # abort when catch error

read -p "Please enter your order for execute: " RUN_PATH # get simple input file path keywords

MATCH_FILE=$(ls src | grep $RUN_PATH) # get match file for full filename

FULL_PATH=$(pwd)/src/$MATCH_FILE # absolute filename path

echo "yoru runtime file path is $FULL_PATH" # some tooltips

ts-node $FULL_PATH # execute the full filename path by ts-node, by the way, you have you install ts-node first.