import pandas as pd
from fastapi import UploadFile

async def process_csv(file: UploadFile):
    """
    Read the CSV and return simple chart data
    """
    df = pd.read_csv(file.file)
    if df.shape[1] < 2:
        raise ValueError("CSV must have at least 2 columns")

    labels = df.iloc[:, 0].astype(str).tolist()
    values = df.iloc[:, 1].tolist()

    return {"labels": labels, "values": values}
