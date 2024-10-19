rm -rf build/ dist/ aitermis.egg-info/

python3 setup.py sdist bdist_wheel

twine check dist/*

twine upload dist/*