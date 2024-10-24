import argparse
import sys


class AitermisParser(argparse.ArgumentParser):
    def error(self, message):
        print("       _  _                     _     ")
        print(" __ _ (_)| |_  ___  _ _  _ __  (_) ___")
        print("/ _` || ||  _|/ -_)| '_|| '  \ | |(_-<")
        print("\__,_||_| \__|\___||_|  |_|_|_||_|/__/")
        print()
        print("Welcome to aitermis (a)!")
        print(
            "aitermis is an ai powered terminal assistant to help you find the command you need!"
        )
        print()
        print("Type 'a --help' for help")
        print()
        sys.exit(2)
