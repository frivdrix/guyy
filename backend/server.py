from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ==================== Data Models ====================

class PartnerLogo(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    _id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    _createdDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    _updatedDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    partnerName: Optional[str] = None
    logoImage: Optional[str] = None
    websiteUrl: Optional[str] = None
    description: Optional[str] = None
    displayOrder: Optional[int] = 0


class Service(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    _id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    _createdDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    _updatedDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    serviceName: Optional[str] = None
    shortDescription: Optional[str] = None
    detailedDescription: Optional[str] = None
    serviceImage: Optional[str] = None
    benefits: Optional[str] = None
    callToActionText: Optional[str] = None
    callToActionUrl: Optional[str] = None


class CaseStudy(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    _id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    _createdDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    _updatedDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    caseStudyTitle: Optional[str] = None
    clientName: Optional[str] = None
    industry: Optional[str] = None
    challenge: Optional[str] = None
    solution: Optional[str] = None
    results: Optional[str] = None
    thumbnailImage: Optional[str] = None
    projectUrl: Optional[str] = None
    completionDate: Optional[str] = None


class Testimonial(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    _id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    _createdDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    _updatedDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    clientName: Optional[str] = None
    clientTitleCompany: Optional[str] = None
    testimonialText: Optional[str] = None
    clientPhoto: Optional[str] = None
    rating: Optional[int] = 5
    datePosted: Optional[str] = None


class FAQ(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    _id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    _createdDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    _updatedDate: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    question: Optional[str] = None
    answer: Optional[str] = None
    category: Optional[str] = None
    isFeatured: Optional[bool] = False
    displayOrder: Optional[int] = 0


# ==================== Generic Response Model ====================

class PaginatedResponse(BaseModel):
    items: List[dict]
    totalCount: int


# ==================== API Routes ====================

@api_router.get("/")
async def root():
    return {"message": "LetsGrowPro API - Welcome!"}


# Partner Logos endpoints
@api_router.get("/partnerlogos", response_model=PaginatedResponse)
async def get_partner_logos():
    try:
        logos = await db.partnerlogos.find({}, {"_id": 0}).to_list(1000)
        return {"items": logos, "totalCount": len(logos)}
    except Exception as e:
        logger.error(f"Error fetching partner logos: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@api_router.post("/partnerlogos", response_model=PartnerLogo)
async def create_partner_logo(logo: PartnerLogo):
    try:
        doc = logo.model_dump()
        await db.partnerlogos.insert_one(doc)
        return logo
    except Exception as e:
        logger.error(f"Error creating partner logo: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# Services endpoints
@api_router.get("/services", response_model=PaginatedResponse)
async def get_services():
    try:
        services = await db.services.find({}, {"_id": 0}).to_list(1000)
        return {"items": services, "totalCount": len(services)}
    except Exception as e:
        logger.error(f"Error fetching services: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@api_router.post("/services", response_model=Service)
async def create_service(service: Service):
    try:
        doc = service.model_dump()
        await db.services.insert_one(doc)
        return service
    except Exception as e:
        logger.error(f"Error creating service: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# Case Studies endpoints
@api_router.get("/casestudies", response_model=PaginatedResponse)
async def get_case_studies():
    try:
        studies = await db.casestudies.find({}, {"_id": 0}).to_list(1000)
        return {"items": studies, "totalCount": len(studies)}
    except Exception as e:
        logger.error(f"Error fetching case studies: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@api_router.post("/casestudies", response_model=CaseStudy)
async def create_case_study(case_study: CaseStudy):
    try:
        doc = case_study.model_dump()
        await db.casestudies.insert_one(doc)
        return case_study
    except Exception as e:
        logger.error(f"Error creating case study: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# Testimonials endpoints
@api_router.get("/testimonials", response_model=PaginatedResponse)
async def get_testimonials():
    try:
        testimonials = await db.testimonials.find({}, {"_id": 0}).to_list(1000)
        return {"items": testimonials, "totalCount": len(testimonials)}
    except Exception as e:
        logger.error(f"Error fetching testimonials: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@api_router.post("/testimonials", response_model=Testimonial)
async def create_testimonial(testimonial: Testimonial):
    try:
        doc = testimonial.model_dump()
        await db.testimonials.insert_one(doc)
        return testimonial
    except Exception as e:
        logger.error(f"Error creating testimonial: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# FAQs endpoints
@api_router.get("/frequentlyaskedquestions", response_model=PaginatedResponse)
async def get_faqs():
    try:
        faqs = await db.frequentlyaskedquestions.find({}, {"_id": 0}).to_list(1000)
        # Sort by displayOrder if available
        faqs = sorted(faqs, key=lambda x: x.get('displayOrder', 999))
        return {"items": faqs, "totalCount": len(faqs)}
    except Exception as e:
        logger.error(f"Error fetching FAQs: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@api_router.post("/frequentlyaskedquestions", response_model=FAQ)
async def create_faq(faq: FAQ):
    try:
        doc = faq.model_dump()
        await db.frequentlyaskedquestions.insert_one(doc)
        return faq
    except Exception as e:
        logger.error(f"Error creating FAQ: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()