#!/bin/bash

npx tsc

rm -rf dist
mkdir dist

mv src/*.js dist/

cp src/commands.json dist/
cp src/readme.json dist/

npm uninstall -g qdev
npm install -g .

echo "Build completed successfully."