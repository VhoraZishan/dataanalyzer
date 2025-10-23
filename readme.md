# Data Analyzer Project (Starter Version)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Project Overview

**Data Analyzer** is a starter web application designed for student projects. It allows analyzing data files (CSV, Excel, etc.) and displaying simple analysis results.  

This initial version includes:

- **Backend:** FastAPI REST API (`/` and `/ping` endpoints)  
- **Frontend:** React application served via Nginx  
- **Dockerized:** Easy local development and deployment using Docker and Docker Compose  

> Future versions will include CSV upload, analysis with Pandas, visualization, and cloud storage integration.

---

## Project Structure

```
dataanalyzer/
 ├── backend/
 │    ├── app/
 │    │    └── main.py       # FastAPI backend code
 │    ├── requirements.txt   # Python dependencies
 │    └── Dockerfile         # Dockerfile for backend
 ├── frontend/
 │    ├── src/               # React frontend source code
 │    ├── package.json
 │    └── Dockerfile         # Dockerfile for frontend
 └── docker-compose.yml      # Compose file to run both services
```

---

## Prerequisites

- Docker Desktop installed and running  
- Node.js and npm (for local frontend development)  
- Python 3.x (for local backend development)  

---

## Quick Start (Dockerized)

```bash
# Navigate to project root
cd C:\Users\vhora\Desktop\Code\dataanalyzer

# Build and start both frontend and backend
docker-compose up --build

# Access the services:
# Backend → http://localhost:8000
# Frontend → http://localhost:3000

# To stop containers
docker-compose down
```

---

## Local Development (Without Docker)

### Backend (FastAPI)

```bash
cd backend
python -m venv venv
# Activate venv
# Windows: venv\Scripts\activate
# Linux/Mac: source venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload
# Runs at http://localhost:8000
```

### Frontend (React)

```bash
cd frontend
npm install
npm start
# Runs at http://localhost:3000
# Ensure backend is running locally for API calls
```

---

## Docker Details

| Service  | Container Port | Host Port | URL |
|----------|----------------|-----------|-----|
| Backend  | 8000           | 8000      | http://localhost:8000 |
| Frontend | 80             | 3000      | http://localhost:3000 |

- Backend container runs FastAPI  
- Frontend container runs Nginx serving React build  
- Docker Compose manages both containers and internal networking  

---

## Collaboration Guidelines

### Branching Strategy

- `main` → stable releases  
- `develop` → ongoing development  
- `feature/<feature-name>` → individual features  

### Pull Requests

1. Always create a feature branch from `develop`  
2. Write a clear description of your changes  
3. Request review from at least one teammate  
4. Merge only after approval  

### Code Style

- Python: PEP8, use `black` or `flake8`  
- JavaScript/React: ESLint + Prettier recommended  
- Keep commits atomic and descriptive  

### Testing

- Backend: Add unit tests in `backend/tests/` (pytest recommended)  
- Frontend: Add tests in `frontend/src/__tests__/` (Jest + React Testing Library)  

---

## Next Steps / TODO

- Add CSV file upload endpoint in backend  
- Parse and analyze CSV using Pandas  
- Display analysis results in frontend with tables and charts  
- Integrate Supabase for cloud storage  
- Optional: CI/CD pipeline using GitHub Actions + Render/Vercel  

---

## Notes

- Dockerized environment does not use your local Python venv; dependencies are installed inside containers  
- Local development with venv/npm is useful for debugging and testing  
- Ports mapping allows host access: `localhost:3000` (frontend) & `localhost:8000` (backend)  

---

## License

This project is licensed under the [MIT License](LICENSE)
