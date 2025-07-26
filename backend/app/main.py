from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS (to connect frontend & backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to E-commerce Chatbot!"}

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_message = data.get("message", "").lower()

    # Basic chatbot logic
    if "hi" in user_message or "hello" in user_message:
        reply = "Hello! How can I help you today?"
    elif "shoes" in user_message:
        reply = "We have sneakers, boots, and formal shoes. Which one would you like?"
    elif "laptop" in user_message:
        reply = "Sure! We have laptops from HP, Dell, and Apple. Any preference?"
    elif "bye" in user_message:
        reply = "Goodbye! Have a great day."
    else:
        reply = "Sorry, I didn’t understand that. Can you rephrase?"

    return {"reply": reply}
