#!bin/bash

set -e
npm run build
cd docs
cp index.html 404.html

git init
git add -A
git commit -m "update"


git push -f https://github.com/ousayshop/ousayshop.github.io.git master:gh-pages

cd -