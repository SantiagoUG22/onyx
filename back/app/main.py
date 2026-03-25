from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import os
from datetime import datetime
import uuid

from sqlalchemy import create_engine, Column, String, Boolean, DateTime, Text, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# Configuración de SQLite con ruta absoluta basada en el archivo
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
DATABASE_URL = f"sqlite:///{os.path.join(DATA_DIR, 'onyx_events.db')}"

# Asegurar que el directorio de datos exista
os.makedirs(DATA_DIR, exist_ok=True)

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Quote(Base):
    __tablename__ = "quotes"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    event_date = Column(String)
    event_type = Column(String)
    guests = Column(String)
    audio = Column(Boolean, default=False)
    smoke = Column(Boolean, default=False)
    sparkles = Column(Boolean, default=False)
    confetti = Column(Boolean, default=False)
    message = Column(Text, nullable=True)
    status = Column(String, default="pending")
    created_at = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="ONYX EVENTS API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class Services(BaseModel):
    audio: bool
    smoke: bool
    sparkles: bool
    confetti: bool

class QuoteRequest(BaseModel):
    name: str
    email: EmailStr
    eventDate: str
    eventType: str
    guests: str
    services: Services
    message: Optional[str] = ""

@app.post("/api/quote")
async def create_quote(quote: QuoteRequest, db: Session = Depends(get_db)):
    try:
        new_quote = Quote(
            id=str(uuid.uuid4()),
            name=quote.name,
            email=quote.email,
            event_date=quote.eventDate,
            event_type=quote.eventType,
            guests=quote.guests,
            audio=quote.services.audio,
            smoke=quote.services.smoke,
            sparkles=quote.services.sparkles,
            confetti=quote.services.confetti,
            message=quote.message,
            status="pending"
        )
        
        db.add(new_quote)
        db.commit()
        db.refresh(new_quote)
        
        print(f"[OK] Nueva solicitud de {quote.name} guardada en SQLite.")
        
        return {"success": True, "message": "Solicitud guardada correctamente"}
    except Exception as e:
        print(f"[ERROR] {str(e)}")
        db.rollback()
        raise HTTPException(status_code=500, detail="Error interno del servidor")

@app.get("/api/admin/quotes")
async def get_quotes(db: Session = Depends(get_db)):
    quotes = db.query(Quote).all()
    return quotes

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)