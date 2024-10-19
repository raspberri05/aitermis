from fastapi import FastAPI

app = FastAPI()

from openai import OpenAI

client = OpenAI()

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
