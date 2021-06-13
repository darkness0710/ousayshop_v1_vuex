#!bin/bash

set -e

git init
git add -A
git commit -m "update"


git push -f https://github.com/ousayshop/base_ousayshop.github.io.git master