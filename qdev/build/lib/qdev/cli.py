import argparse
import requests

from .url import make_url

def main():
    url = make_url()
    parser = argparse.ArgumentParser(
        description="An AI-powered to help speed up development"
    )
    parser.add_argument("query", type=str, help="your query to the ai")

    args = parser.parse_args()

    result = args.query

    print(f"your query: {result}")

    response = requests.get(f"{url}/?query={result}")

    if response.status_code == 200:
        result = response.json()
        print(f"command: {result["message"]}")
    else:
        print(
            f"Failed to get a response from the server. Status code: {response.status_code}"
        )


# Entry point for CLI
if __name__ == "__main__":
    main()
