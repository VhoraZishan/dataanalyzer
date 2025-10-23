from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import upload

app = FastAPI(title="Data Analyzer Backend")

# Allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # in production, restrict to frontend URL
    allow_methods=["*"],
    allow_headers=["*"]
)

# Include routes
app.include_router(upload.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
