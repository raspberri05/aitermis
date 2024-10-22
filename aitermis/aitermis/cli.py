import requests
import subprocess
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

    try:
        response = requests.get(f"{url}/?query={result}")
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Failed to get response from server: {e}")
        return
    
    result = response.json().get("message", None)
    if result:
        execute = input(
            f"do you want to execute the command '{result}'? (y/n): "
        ).strip().lower()
        if execute.lower() == "y":
            subprocess.run(result, shell=False)
    else:
        print(
            f"Invalid response from server. \n Error: \n{response.json()}"
        )

if __name__ == "__main__":
    main()
