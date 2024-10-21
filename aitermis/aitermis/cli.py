import requests
import os

from .url import make_url
from .parser import AitermisParser


def main():
    url = make_url()
    parser = AitermisParser()
    parser.add_argument(
        "query", type=str, help="your query to the ai (enclose in quotes)"
    )

    args = parser.parse_args()

    result = args.query

    response = requests.get(f"{url}/?query={result}")

    if response.status_code == 200:
        result = response.json()["message"]
        execute = str(input(f"do you want to execute command '{result}'? (y/n): "))
        if execute.lower() == "y":
            os.system(result)
    else:
        print(
            f"Failed to get a response from the server. Status code: {response.status_code}"
        )


if __name__ == "__main__":
    main()
