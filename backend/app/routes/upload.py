from fastapi import APIRouter, UploadFile, File
import pandas as pd
from io import StringIO

router = APIRouter()

@router.post("/upload")
async def upload_csv(file: UploadFile = File(...)):
    # Read the uploaded CSV
    content = await file.read()
    df = pd.read_csv(StringIO(content.decode("utf-8")))

    # Convert to list of dicts
    data = df.to_dict(orient="records")

    # Return JSON
    return {"data": data}
