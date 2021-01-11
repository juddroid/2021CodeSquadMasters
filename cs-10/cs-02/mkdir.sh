#!/bin/bash
NUM=1
FOLDERS=16
while [ "$NUM" != "$(($FOLDERS+1))" ]
do
  mkdir ./cs-02-test/day$NUM
  NUM=$(($NUM+1))
done