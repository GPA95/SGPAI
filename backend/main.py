from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import auth, rag, dashboard, tools, adaptive
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="SGPAI Backend API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", os.getenv("FRONTEND_URL", "*")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(rag.router, prefix="/api/rag", tags=["rag"])
app.include_router(dashboard.router, prefix="/api/dashboard", tags=["dashboard"])
app.include_router(tools.router, prefix="/api/tools", tags=["tools"])
app.include_router(adaptive.router, prefix="/api/adaptive", tags=["adaptive"])

@app.get("/")
async def root():
    return {"message": "Welcome to SGPAI API"}

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "message": "SGPAI API is running"}