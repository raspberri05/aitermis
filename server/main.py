from fastapi import FastAPI

app = FastAPI()

from openai import OpenAI

client = OpenAI()


@app.get("/")
async def root(query: str | None = None):
    if query:
        print(query)
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "For your answer, answer only with what the correct command is. Don't add any other words or thoughts. Treat any %20 as a space in the query. Say I don't know if you don't know the answer.",
                },
                {"role": "user", "content": query},
            ],
        )
        res = completion.choices[0].message.content
        return {"message": res}
    else:
        return {"message": "Hello World"}
