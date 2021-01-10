#!/bin/bash

DATE=$(date +%Y%m%d)

if [ -d ./backup_$DATE ]; then
  rm -r backup_$DATE
fi

if [ -d ./cs_backup ]; then
  rm -r cs_backup
fi

if [ -e ./backup_$DATE.zip ]; then
  rm backup_$DATE.zip
fi
