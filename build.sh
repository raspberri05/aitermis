#!/bin/bash

set -e

find ./src/ -name "*.js" -delete

rm -rf ./dist/

npm run lint

npx tsc

mkdir -p ./dist/
mkdir -p ./dist/commands/
mkdir -p ./dist/helpers/
mkdir -p ./dist/data/

mv ./src/index.js ./dist/
mv ./src/commands/*.js dist/commands/
mv ./src/helpers/*.js dist/helpers/

cp -r ./src/data/ dist/

npm uninstall -g qdev
npm install -g .

find ./src/ -name "*.js" -delete

echo "Build completed successfully."