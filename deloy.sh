#!bin/bash

# set -e

git pull origin master --force

git add -A
git commit -m "update"

git merge --continue

npm install
npm run build

cd docs
cp index.html 404.html

git init
git add -A
git commit -m "update"


git push -f git@github.com:ousayshop/ousayshop.github.io.git master:gh-pages

cd -

git add -A
git commit -m "update"

git push -f origin master