#!/bin/bash

FOLDER_SIZE=`ls -l cs-02-test | grep ^d | wc -l`
DATE=$(date +%Y%m%d)
DIR="./cs-02-test"
NUM=1
mkdir cs_backup
while [ "$NUM" != "$(($FOLDER_SIZE+1))" ]
do
  if [ -e $DIR/day$NUM/*.cs ]; then
    cp $DIR/day$NUM/*.cs ./cs_backup
    elif [ `ls -l cs-02-test | grep ^- | wc -l` == 0 ]; then
    echo "day$NUM is empty"
    else
    echo "not empty, not cs"
  fi
  NUM=$(($NUM+1))
done

zip "backup_$DATE.zip" ./cs_backup/*
scp -i ~/.ssh/juddroid_rsa "backup_$DATE.zip" juddroid@192.168.32.128:/backup