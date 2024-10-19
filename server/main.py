from fastapi import FastAPI
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

app = FastAPI()
client = OpenAI(api_key=OPENAI_API_KEY)

with open("instructions.txt", "r") as file:
    instructions = file.read()


@app.get("/")
async def root(query: str | None = None):
    if query:
        print(query)
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": instructions,
                },
                {"role": "user", "content": query},
            ],
        )
        res = completion.choices[0].message.content
        return {"message": res}
    else:
        return {"error": "command generation failed"}
