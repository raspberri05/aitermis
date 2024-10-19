from setuptools import setup, find_packages
from setuptools.command.build_py import build_py as _build_py
from distutils.cmd import Command

class CustomBuildPy(_build_py):
    def run(self):
        target_file = "qdev/url.py"
        try:
            with open(target_file, "r") as f:
                content = f.read()

            content = content.replace("http://127.0.0.1:3000", "https://server.qdev.nayasinghania.com")

            with open(target_file, "w") as f:
                f.write(content)

            print("URL replacement Done")
        except FileNotFoundError:
            print(f"{target_file} not found, skipping URL replacement.")

        super().run()


setup(
    name="qdev",
    version="0.2.2",
    packages=find_packages(),
    include_package_data=True,
    description="An AI powered cli to make setting up a development environment fast and efficient.",
    author="Your Name",
    author_email="naya.singhania@gmail.com",
    url="https://github.com/raspberri05/qdev",
    license="MIT",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    entry_points={
        "console_scripts": [
            "q=qdev.cli:main",
        ],
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
    ],
    cmdclass={
        "build_py": CustomBuildPy,
    },
)
