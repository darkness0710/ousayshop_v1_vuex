#!bin/bash

set -e

git pull origin master --force

npm install
npm run build

cd docs
cp index.html 404.html

git init
git add -A
git commit -m "update"
#git remote add origin git@github.com:ousayshop/ousayshop.github.io.git

git push -f git@github.com:ousayshop/ousayshop.github.io.git master:gh-pages

cd -

git add -A
git commit -m "update"

git push -f https://github.com/ousayshop/base_ousayshop.git master
