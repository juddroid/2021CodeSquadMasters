#!/bin/bash

if [ -d ./backup_20210109 ]; then
  rm -r backup_20210109
fi

if [ -d ./cs_backup ]; then
  rm -r cs_backup
fi

if [ -e ./backup_20210109.zip ]; then
  rm backup_20210109.zip
fi
