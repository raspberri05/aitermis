import argparse
import requests

def main():
    parser = argparse.ArgumentParser(
        description="Simple CLI for basic math operations."
    )
    parser.add_argument("query", type=str, help="your query to the ai")

    args = parser.parse_args()

    result = args.query

    print(f"your query: {result}")

    response = requests.get(f"http://127.0.0.1:8000/?query={result}")

    # Check if the request was successful
    if response.status_code == 200:
        result = response.json()  # Assuming the server returns JSON
        print(f"command: {result["message"]}")
    else:
        print(f"Failed to get a response from the server. Status code: {response.status_code}")


# Entry point for CLI
if __name__ == "__main__":
    main()
