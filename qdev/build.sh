rm -rf build/ dist/ qdev.egg-info/

python3 setup.py sdist bdist_wheel

twine check dist/*

twine upload dist/*