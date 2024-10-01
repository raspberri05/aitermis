#!/bin/bash

set -e

npm run lint

npx tsc

rm -rf dist
mkdir dist
mkdir dist/commands
mkdir dist/helpers
mkdir dist/data

mv src/index.js dist/
mv src/commands/*.js dist/commands/
mv src/helpers/*.js dist/helpers/

cp -r src/data dist/

npm uninstall -g qdev
npm install -g .

echo "Build completed successfully."