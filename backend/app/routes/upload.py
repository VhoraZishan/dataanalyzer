from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.csv_processor import process_csv

router = APIRouter()

@router.post("/upload")
async def upload_csv(file: UploadFile = File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only CSV files are allowed")
    
    data = await process_csv(file)
    return data
