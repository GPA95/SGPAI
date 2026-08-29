from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    query: str
    user_id: str

@router.post("/chat")
async def chat_with_documents(request: ChatRequest):
    return {
        "response": "This is a mock RAG response.",
        "citations": ["[Physics_Notes.pdf, Page 12]"]
    }

@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    return {"status": "success", "filename": file.filename}
