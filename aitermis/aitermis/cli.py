import requests
import subprocess
from .url import make_url
from .parser import AitermisParser


class AitermisCLI:
    def __init__(self, url, parser, request_func=requests.get, runner=subprocess.run):
        self.url = url
        self.parser = parser
        self.request_func = request_func
        self.runner = runner

    def get_user_query(self):
        """Parse and return the user query from command line arguments."""
        self.parser.add_argument(
            "query", type=str, help="Your query to the AI (enclose in quotes)"
        )
        args = self.parser.parse_args()
        return args.query

    def send_query_to_server(self, query):
        """Send the user query to the server and return the server's response."""
        try:
            response = self.request_func(f"{self.url}/?query={query}")
            response.raise_for_status()
            return response.json().get("message", None)
        except requests.RequestException as e:
            print(f"Failed to get response from server: {e}")
            return None

    def confirm_and_execute(self, command):
        """Prompt the user for confirmation and execute the command if confirmed."""
        execute = (
            input(f"Do you want to execute the command '{command}'? (y/n): ")
            .strip()
            .lower()
        )
        if execute == "y":
            try:
                self.runner(command, shell=True, check=True)
            except subprocess.CalledProcessError as e:
                print(f"Error executing {e}")
        else:
            print("Command execution aborted.")

    def handle_unknown_response(self, result):
        """Handle the case where the AI response is 'I don't know.'"""
        if result == "I don't know." or result == "I don't know":
            print(
                "Unable to process query. Please try again.\n"
                "Here are some examples of valid queries:\n"
                "❯ a 'create me a React TypeScript project'\n"
                "❯ a 'create a new next js app project'\n"
            )
            return False
        return True

    def run(self):
        query = self.get_user_query()
        result = self.send_query_to_server(query)

        if result:
            if not self.handle_unknown_response(result):
                return
            self.confirm_and_execute(result)
        else:
            print("Invalid server response. Please try again.")


def main():
    url = make_url()
    parser = AitermisParser()
    cli = AitermisCLI(url, parser)
    cli.run()


if __name__ == "__main__":
    main()
