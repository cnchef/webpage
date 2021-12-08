#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm run docs:build
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist
echo 'chenfyu.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -m master main
git push -f git@github.com:cnchef/webpage.git main:gh-pages 
cd -
rm -rf docs/.vuepress/dist
