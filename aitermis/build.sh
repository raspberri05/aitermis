#!/bin/bash
rm -rf build/ dist/ aitermis.egg-info/

python3 -m build

twine check dist/*

twine upload dist/*