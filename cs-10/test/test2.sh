#!/bin/bash

DAY=$(seq 1 16)
FILES=

for i in $DAY
do
  currdir="day$i"
  empty=true

  for file in `ls $currdir/ | grep .*.cs`
  do
    FILES+="$currdir/$file "
    empty=false
  done

  if $empty == true; then
    echo "$currdir is empty!"
  fi
done

zip tmp.zip $FILES 1>&2 > /dev/null