#!/bin/bash

NUM=1
FOLDER_SIZE=`ls -l | grep ^d | wc -l`
FILE_PATH=
DATE=$(date +%Y%m%d)
DIR="./cs-02/day"
while [ "$NUM" != "$(($FOLDER_SIZE+1))" ]
do
  if [ -e $DIR$NUM/*.cs ]; then
    echo $DIR$NUM/*.cs
    for file in $DIR$NUM/*.cs
    do
    FILE_PATH+="$file "
    done
  elif [ `ls -l $DIR$NUM | grep ^- | wc -l` == 0 ]; then
    echo "day$NUM is empty!"
  else
    echo "day$NUM is not empty, but not exist .cs"
  fi
  NUM=$(($NUM+1))
done

zip cs_backup.zip $FILE_PATH
echo $FILE_PATH
echo $DATE