"""Portfolio API Backend - FastAPI server for handling contact messages and portfolio data."""

from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr, validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone

# Initialize environment variables from .env file
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB Connection
mongo_url = os.environ['MONGO_URL']
mongo_client = AsyncIOMotorClient(mongo_url)
portfolio_db = mongo_client[os.environ['DB_NAME']]

# Initialize FastAPI app
portfolio_api = FastAPI()

# Request/Response Models
class ContactMessage(BaseModel):
    """Schema for contact form submissions."""
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)
    
    model_config = ConfigDict(json_schema_extra={
        "example": {
            "name": "John Doe",
            "email": "john@example.com",
            "subject": "Interested in collaboration",
            "message": "I'd like to discuss a potential project..."
        }
    })

class ContactResponse(BaseModel):
    """Response schema for contact form submissions."""
    id: str
    success: bool
    message: str
    timestamp: str

# API Routers
api_router = APIRouter(prefix="/api", tags=["portfolio"])

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact: ContactMessage):
    """Handle contact form submissions and store in MongoDB."""
    try:
        messages_collection = portfolio_db['contact_messages']
        
        # Create document with metadata
        message_doc = {
            "_id": str(uuid.uuid4()),
            "name": contact.name,
            "email": contact.email,
            "subject": contact.subject,
            "message": contact.message,
            "submitted_at": datetime.now(timezone.utc).isoformat(),
            "read": False
        }
        
        await messages_collection.insert_one(message_doc)
        
        return ContactResponse(
            id=message_doc["_id"],
            success=True,
            message="Thank you! Your message has been received.",
            timestamp=message_doc["submitted_at"]
        )
    except Exception as error:
        logging.error(f"Error processing contact form: {str(error)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to process your message. Please try again later."
        )

@api_router.get("/health")
async def health_check():
    """Health check endpoint to verify API is running."""
    return {
        "status": "healthy",
        "service": "portfolio-api",
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

# Include router in main app
portfolio_api.include_router(api_router)

# CORS Configuration - Allow frontend to communicate with backend
portfolio_api.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging Configuration
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Startup/Shutdown Events
@portfolio_api.on_event("shutdown")
async def shutdown_db_client():
    """Close MongoDB connection on application shutdown."""
    mongo_client.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(portfolio_api, host="0.0.0.0", port=8000)
