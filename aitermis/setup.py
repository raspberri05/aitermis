from setuptools import setup, find_packages

setup(
    name="aitermis",
    version="1.0.0",
    packages=find_packages(),
    include_package_data=True,
    description="An AI powered cli to make setting up a development environment fast and efficient.",
    author="Naya Singhania",
    author_email="naya.singhania@gmail.com",
    url="https://github.com/raspberri05/aitermis",
    license="MIT",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    entry_points={
        "console_scripts": [
            "a=aitermis.cli:main",
        ],
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
    ],
)
