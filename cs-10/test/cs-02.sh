#!/bin/bash

NUM=1
FOLDER_SIZE=`ls -l cs-02 | grep ^d | wc -l`
#mkdir cs_backup
while [ "$NUM" != "$(($FOLDER_SIZE+1))" ]
do
  if [ `ls -l ./cs-02/day"$NUM" | grep ^- | wc -l` != 0 ]; then
    echo `ls -l cs-02/day$NUM | grep ^-.*\.cs$ `  
  else
    echo "day"$NUM" is empty"
  fi
  NUM=$(($NUM+1))
done
