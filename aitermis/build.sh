#!/bin/bash

# Define the file path and URLs
FILE_PATH="aitermis/url.py"
LOCAL_URL='url = "http://127.0.0.1:8000"'
PRODUCTION_URL='url = "https://server.aitermis.nayasinghania.com"'

# Comment out the local URL and uncomment the production URL
sed -i.bak "s|$LOCAL_URL|# $LOCAL_URL|" $FILE_PATH
sed -i "s|# $PRODUCTION_URL|$PRODUCTION_URL|" $FILE_PATH

# Remove previous build artifacts
rm -rf build/ dist/ aitermis.egg-info/

# Build the package
python3 -m build

# Check the distribution
twine check dist/*

# Upload the distribution
twine upload dist/*

# Revert the changes to url.py
mv $FILE_PATH.bak $FILE_PATH