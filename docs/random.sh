#!/bin/bash

#head -c 200 /dev/urandom | tr -dc a-z0-9 | head -c 16
#生成文件id
namelist=($(find . -type f -name "*.md" |awk -F'/' '{print$NF}'))
for list in ${namelist[@]};
do
	echo -n "$list|" >> filelist.txt 
	echo $list|md5sum|awk '{print$1}' >> filelist.txt 
done
