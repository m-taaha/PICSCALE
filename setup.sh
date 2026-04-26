#!/bin/bash

echo " Starting PicScale environment setup..."

# 1. Create folders
mkdir -p storage/raw
mkdir -p storage/processed
mkdir -p logs

# 2. Create a dummy log file
touch logs/access.log

echo " Folders created!"
ls -R storage