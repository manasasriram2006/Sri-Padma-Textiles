import base64
import logging
import os
import urllib.parse
import urllib.request
import random
import datetime
from typing import List, Optional
from contextlib import asynccontextmanager

from fastapi import FastAPI, Form, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime, Text, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session, relationship

# ======================================
# CONFIG & CONSTANTS
# ======================================
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

SECRET_KEY = os.getenv("SECRET_KEY", "SRI_PADMA_TEXTILES_SECRET_K3Y_2026")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 1 day

POLLINATIONS_URL = "https://image.pollinations.ai/prompt/"
SQLALCHEMY_DATABASE_URL = "sqlite:///./shop_app.db"

# ======================================
# DATABASE SETUP
# ======================================
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Models
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    hashed_password = Column(String)
    is_admin = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    orders = relationship("Order", back_populates="owner")

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    category = Column(String)
    fabric = Column(String)
    color = Column(String)
    occasion = Column(String)  # Stored as comma-separated
    border = Column(String)
    price = Column(Float)
    original_price = Column(Float)
    rating = Column(Float)
    reviews = Column(Integer)
    image = Column(String)
    description = Column(Text)
    tags = Column(String)  # Stored as comma-separated
    meta = Column(Text) # JSON string

class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    total_amount = Column(Float)
    status = Column(String, default="Pending")
    shipping_address = Column(Text)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    owner = relationship("User", back_populates="orders")
    items = relationship("OrderItem", back_populates="order")

class OrderItem(Base):
    __tablename__ = "order_items"
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    product_id = Column(Integer, ForeignKey("products.id"), nullable=True)
    name = Column(String)
    price = Column(Float)
    quantity = Column(Integer)
    is_custom = Column(Boolean, default=False)
    custom_details = Column(Text, nullable=True)
    order = relationship("Order", back_populates="items")

Base.metadata.create_all(bind=engine)

# ======================================
# AUTH UTILS
# ======================================
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[datetime.timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.datetime.utcnow() + expires_delta
    else:
        expire = datetime.datetime.utcnow() + datetime.timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
    return user

# ======================================
# SCHEMAS
# ======================================
class UserCreate(BaseModel):
    email: str
    password: str
    name: str

class Token(BaseModel):
    access_token: str
    token_type: str

class OrderItemSchema(BaseModel):
    product_id: Optional[int] = None
    name: str
    price: float
    qty: int
    is_custom: bool = False
    custom_details: Optional[str] = None

class OrderCreate(BaseModel):
    items: List[OrderItemSchema]
    total_amount: float
    shipping_address: str

# ======================================
# APP INIT
# ======================================
@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Sri Padma Textiles Backend — Initializing...")
    # Seed data if empty
    db = SessionLocal()
    if db.query(Product).count() == 0:
        seed_products(db)
    db.close()
    yield

app = FastAPI(
    title="Sri Padma Textiles API",
    version="5.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/images", StaticFiles(directory="images"), name="images")

# ======================================
# STATIC ROUTES
# ======================================
@app.get("/")
async def root():
    return FileResponse("index.html")

@app.get("/{filename}")
async def serve_static(filename: str):
    if filename in ["styles.css", "style.css", "app.js", "logo.png"]:
        return FileResponse(filename)
    raise HTTPException(status_code=404)

# ======================================
# API ENDPOINTS: AUTH
# ======================================
@app.post("/api/auth/register")
async def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = get_password_hash(user.password)
    new_user = User(email=user.email, name=user.name, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    access_token = create_access_token(data={"sub": new_user.email})
    return {"access_token": access_token, "token_type": "bearer", "user": {"name": new_user.name, "email": new_user.email}}

@app.post("/api/auth/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer", "user": {"name": user.name, "email": user.email}}

@app.get("/api/auth/me")
async def get_me(current_user: User = Depends(get_current_user)):
    return {"name": current_user.name, "email": current_user.email}

# ======================================
# API ENDPOINTS: PRODUCTS
# ======================================
@app.get("/api/products")
async def get_products(category: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(Product)
    if category:
        query = query.filter(Product.category == category)
    products = query.all()
    
    # Format for frontend (convert back to lists)
    result = []
    for p in products:
        p_dict = {c.name: getattr(p, c.name) for c in p.__table__.columns}
        p_dict['occasion'] = p.occasion.split(',') if p.occasion else []
        p_dict['tags'] = p.tags.split(',') if p.tags else []
        
        # Handle JSON parsing for meta field
        import json
        try:
            p_dict['meta'] = json.loads(p.meta) if p.meta else {}
        except:
            p_dict['meta'] = {}
            
        result.append(p_dict)
    return result

@app.get("/api/products/{product_id}")
async def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

# ======================================
# API ENDPOINTS: ORDERS
# ======================================
@app.post("/api/orders")
async def create_order(order_data: OrderCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    new_order = Order(
        user_id=current_user.id,
        total_amount=order_data.total_amount,
        shipping_address=order_data.shipping_address
    )
    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    
    for item in order_data.items:
        db_item = OrderItem(
            order_id=new_order.id,
            product_id=item.product_id,
            name=item.name,
            price=item.price,
            quantity=item.qty,
            is_custom=item.is_custom,
            custom_details=item.custom_details
        )
        db.add(db_item)
    
    db.commit()
    return {"message": "Order placed successfully", "order_id": new_order.id}

@app.get("/api/orders")
async def get_my_orders(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    orders = db.query(Order).filter(Order.user_id == current_user.id).order_by(Order.created_at.desc()).all()
    result = []
    for o in orders:
        items = []
        for i in o.items:
            items.append({
                "name": i.name,
                "price": i.price,
                "qty": i.quantity,
                "is_custom": i.is_custom
            })
        result.append({
            "id": o.id,
            "total": o.total_amount,
            "status": o.status,
            "created_at": o.created_at.strftime("%Y-%m-%d %H:%M"),
            "items": items
        })
    return result

# ======================================
# AI IMAGE GENERATION
# ======================================
@app.post("/generate")
async def generate_saree(
    fabric_text: str = Form("Art Silk"),
    color_text: str = Form("Pink"),
    border_text: str = Form("Plain Border"),
    pallu_text: str = Form("Plain Pallu"),
    weave_text: str = Form("Checks"),
    occasion_text: str = Form("Wedding")
):
    try:
        prompt = (
            f"A faceless retail mannequin display idol in a shopping mall showroom wearing a {fabric_text} saree, "
            f"no human face, no woman, no portrait, neutral mannequin head or headless mannequin, "
            f"in {color_text} color, draped perfectly in traditional style, "
            f"featuring {border_text}, "
            f"with {pallu_text}, "
            f"{weave_text + ' weave pattern, ' if weave_text else ''}"
            f"perfect for {occasion_text}, "
            f"full body product display shot, standing mannequin pose, "
            f"high-end Indian saree showroom photography, studio lighting, clean mall display background, "
            f"ultra realistic textile details, 8k quality, no text, no watermark, no visible face"
        )

        encoded_prompt = urllib.parse.quote(prompt)
        seed = random.randint(1, 999999)
        url = f"{POLLINATIONS_URL}{encoded_prompt}?width=512&height=768&seed={seed}&nologo=true&model=flux"

        logger.info(f"Generating image via Pollinations.ai: {fabric_text}, {color_text}")

        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=90) as resp:
            image_bytes = resp.read()

        image_b64 = base64.b64encode(image_bytes).decode("utf-8")
        return {"image": image_b64}

    except Exception as e:
        logger.error(f"Generation failed: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# ======================================
# SEED DATA
# ======================================
def seed_products(db: Session):
    import json
    import json
    products = [
        {
            "id": 1, "name": "Royal Kanjivaram Pure Silk Saree",
            "category": "kanjivaram", "fabric": "silk", "color": "red",
            "occasion": "wedding,bridal,festival", "border": "temple",
            "price": 15999, "original_price": 22999, "rating": 4.8, "reviews": 342,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree.jpg?width=700",
            "description": "Exquisite handwoven Kanjivaram pure silk saree in rich red with traditional temple border and heavy zari pallu.",
            "tags": "bestseller,trending",
            "meta": json.dumps({ "fabric": "Pure Mulberry Silk", "weight": "850g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Kanchipuram" })
        },
        {
            "id": 2, "name": "Heritage Banarasi Silk Saree",
            "category": "banarasi", "fabric": "silk", "color": "blue",
            "occasion": "wedding,festival,party", "border": "zari",
            "price": 12999, "original_price": 18999, "rating": 4.7, "reviews": 256,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi_Silk_Saree.jpg?width=700",
            "description": "Stunning royal blue Banarasi silk saree with intricate golden brocade work.",
            "tags": "bestseller,new",
            "meta": json.dumps({ "fabric": "Banarasi Silk", "weight": "780g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Varanasi" })
        },
        {
            "id": 3, "name": "Elegant Cotton Handloom Saree",
            "category": "cotton", "fabric": "cotton", "color": "green",
            "occasion": "casual,office,festival", "border": "contrast",
            "price": 2999, "original_price": 4999, "rating": 4.5, "reviews": 189,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_sarees.jpg?width=700",
            "description": "Beautiful emerald green handloom cotton saree with contrast golden temple border.",
            "tags": "trending,sale",
            "meta": json.dumps({ "fabric": "Pure Cotton", "weight": "450g", "length": "6 meters", "blouse": "Included", "wash": "Hand Wash", "origin": "Mangalgiri" })
        },
        {
            "id": 4, "name": "Designer Georgette Party Saree",
            "category": "designer", "fabric": "georgette", "color": "pink",
            "occasion": "party,festival", "border": "stonework",
            "price": 7999, "original_price": 12999, "rating": 4.6, "reviews": 128,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700",
            "description": "Gorgeous pink designer georgette saree with delicate silver sequin embroidery.",
            "tags": "new,trending",
            "meta": json.dumps({ "fabric": "Georgette", "weight": "520g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Surat" })
        },
        {
            "id": 5, "name": "Grand Pattu Silk Wedding Saree",
            "category": "pattu", "fabric": "silk", "color": "gold",
            "occasion": "wedding,bridal", "border": "temple",
            "price": 24999, "original_price": 35999, "rating": 4.9, "reviews": 412,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Silk_Saree.jpg?width=700",
            "description": "Luxurious golden cream Pattu silk saree with rich maroon and gold zari border.",
            "tags": "bestseller,bridal",
            "meta": json.dumps({ "fabric": "Pure Pattu Silk", "weight": "950g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Dharmavaram" })
        },
        {
            "id": 6, "name": "Classic Chanderi Silk Cotton Saree",
            "category": "chanderi", "fabric": "silk", "color": "cream",
            "occasion": "casual,office,festival", "border": "zari",
            "price": 5499, "original_price": 7999, "rating": 4.4, "reviews": 97,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Silk_Saree.jpg?width=700",
            "description": "Lightweight and lustrous Chanderi silk cotton saree with delicate zari border.",
            "tags": "new",
            "meta": json.dumps({ "fabric": "Silk Cotton Blend", "weight": "380g", "length": "6 meters", "blouse": "Included", "wash": "Hand Wash", "origin": "Chanderi" })
        },
        {
            "id": 7, "name": "Lavender Blossom Kanjivaram Silk",
            "category": "kanjivaram", "fabric": "silk", "color": "purple",
            "occasion": "wedding,festival,party", "border": "gold zari",
            "price": 12999, "original_price": 18999, "rating": 4.8, "reviews": 156,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram_sarees_%287642282772%29.jpg?width=700",
            "description": "Elegant lavender Kanjivaram silk saree with intricate gold zari work and floral motifs.",
            "tags": "new,trending",
            "meta": json.dumps({ "fabric": "Pure Mulberry Silk", "weight": "850g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Kanchipuram" })
        },
        {
            "id": 8, "name": "Majestic Maroon Kanjivaram Silk",
            "category": "kanjivaram", "fabric": "silk", "color": "maroon",
            "occasion": "wedding,bridal", "border": "heavy gold",
            "price": 18999, "original_price": 25999, "rating": 4.9, "reviews": 210,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree.jpg?width=700",
            "description": "Deep maroon bridal Kanjivaram silk saree with a thick majestic golden border.",
            "tags": "bridal,premium",
            "meta": json.dumps({ "fabric": "Pure Mulberry Silk", "weight": "1050g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Kanchipuram" })
        },
        {
            "id": 9, "name": "Turquoise Harmony Kanjivaram Silk",
            "category": "kanjivaram", "fabric": "silk", "color": "turquoise",
            "occasion": "wedding,festival", "border": "red contrast",
            "price": 14500, "original_price": 19999, "rating": 4.7, "reviews": 98,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi_Silk_Saree.jpg?width=700",
            "description": "Stunning turquoise teal Kanjivaram silk saree with a vibrant red contrast border.",
            "tags": "new,exclusive",
            "meta": json.dumps({ "fabric": "Pure Mulberry Silk", "weight": "850g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Kanchipuram" })
        },
        {
            "id": 10, "name": "Midnight Purple Silver Kanjivaram",
            "category": "kanjivaram", "fabric": "silk", "color": "purple",
            "occasion": "party,festival", "border": "silver zari",
            "price": 16999, "original_price": 22999, "rating": 4.8, "reviews": 124,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700",
            "description": "Modern midnight purple Kanjivaram silk saree featuring exquisite silver zari embroidery.",
            "tags": "trending,designer",
            "meta": json.dumps({ "fabric": "Pure Mulberry Silk", "weight": "900g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Kanchipuram" })
        },
        {
            "id": 11, "name": "Orange Chiffon Festive Saree",
            "category": "chiffon", "fabric": "chiffon", "color": "orange",
            "occasion": "festival,party", "border": "stonework",
            "price": 4999, "original_price": 7499, "rating": 4.4, "reviews": 76,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700",
            "description": "Vibrant orange chiffon saree with stone work border, perfect for festive celebrations.",
            "tags": "sale,trending",
            "meta": json.dumps({ "fabric": "Pure Chiffon", "weight": "320g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Surat" })
        },
        {
            "id": 12, "name": "Black Georgette Evening Saree",
            "category": "designer", "fabric": "georgette", "color": "black",
            "occasion": "party", "border": "stonework",
            "price": 9999, "original_price": 14999, "rating": 4.7, "reviews": 203,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi_Silk_Saree.jpg?width=700",
            "description": "Sophisticated black georgette saree with heavy stone work and crystal embellishments.",
            "tags": "bestseller",
            "meta": json.dumps({ "fabric": "Georgette", "weight": "560g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Mumbai" })
        },
        {
            "id": 13, "name": "White Linen Summer Saree",
            "category": "cotton", "fabric": "linen", "color": "white",
            "occasion": "casual,office", "border": "contrast",
            "price": 3499, "original_price": 5499, "rating": 4.3, "reviews": 91,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_sarees.jpg?width=700",
            "description": "Crisp white linen saree with elegant contrast border. Breathable and perfect for summer.",
            "tags": "new",
            "meta": json.dumps({ "fabric": "Pure Linen", "weight": "350g", "length": "6 meters", "blouse": "Included", "wash": "Hand Wash", "origin": "Bhagalpur" })
        },
        {
            "id": 14, "name": "Green Banarasi Brocade Saree",
            "category": "banarasi", "fabric": "silk", "color": "green",
            "occasion": "wedding,festival", "border": "zari",
            "price": 16999, "original_price": 24999, "rating": 4.8, "reviews": 178,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_sarees.jpg?width=700",
            "description": "Spectacular green Banarasi silk saree with rich brocade pattern and heavy gold zari work.",
            "tags": "bestseller,trending",
            "meta": json.dumps({ "fabric": "Banarasi Silk", "weight": "820g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Varanasi" })
        },
        {
            "id": 15, "name": "Peach Crepe Designer Saree",
            "category": "designer", "fabric": "crepe", "color": "pink",
            "occasion": "party,casual", "border": "threadwork",
            "price": 5999, "original_price": 8999, "rating": 4.4, "reviews": 67,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700",
            "description": "Delicate peach crepe saree with minimal thread work embroidery. Modern and stylish.",
            "tags": "new",
            "meta": json.dumps({ "fabric": "Crepe", "weight": "420g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Surat" })
        },
        {
            "id": 16, "name": "Red Bridal Kanjivaram Grand Saree",
            "category": "kanjivaram", "fabric": "silk", "color": "red",
            "occasion": "bridal,wedding", "border": "temple",
            "price": 45999, "original_price": 65999, "rating": 5.0, "reviews": 892,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree.jpg?width=700",
            "description": "The ultimate bridal Kanjivaram silk saree with heavy pure gold zari and traditional motifs.",
            "tags": "bestseller,bridal",
            "meta": json.dumps({ "fabric": "Pure Mulberry Silk", "weight": "1200g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Kanchipuram" })
        },
        {
            "id": 17, "name": "Navy Blue Tussar Silk Saree",
            "category": "tussar", "fabric": "silk", "color": "blue",
            "occasion": "festival,party,office", "border": "zari",
            "price": 8999, "original_price": 13999, "rating": 4.5, "reviews": 112,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi_Silk_Saree.jpg?width=700",
            "description": "Rich navy blue Tussar silk saree with subtle zari border and buttas.",
            "tags": "trending",
            "meta": json.dumps({ "fabric": "Pure Tussar Silk", "weight": "580g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Bhagalpur" })
        },
        {
            "id": 18, "name": "Purple Organza Designer Saree",
            "category": "organza", "fabric": "organza", "color": "purple",
            "occasion": "party,festival", "border": "threadwork",
            "price": 6499, "original_price": 9999, "rating": 4.3, "reviews": 85,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700",
            "description": "Ethereal purple organza saree with intricate thread work embroidery and sequin detailing.",
            "tags": "new,trending",
            "meta": json.dumps({ "fabric": "Pure Organza", "weight": "350g", "length": "6.3 meters", "blouse": "Included", "wash": "Dry Clean Only", "origin": "Surat" })
        },
        {
            "id": 1001,
            "name": "Elegant Green Silk Saree",
            "category": "silk",
            "fabric": "silk",
            "color": "green",
            "occasion": "wedding,festival,party",
            "border": "gold zari",
            "price": 13999,
            "original_price": 18999,
            "rating": 4.9,
            "reviews": 120,
            "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_sarees.jpg?width=700",
            "description": "Elegant green silk saree with rich zari border and pallu. Perfect for weddings and festive occasions.",
            "tags": "new,trending",
            "meta": json.dumps({
                "fabric": "Pure Silk",
                "weight": "850g",
                "length": "6.3 meters",
                "blouse": "Included",
                "wash": "Dry Clean Only",
                "origin": "India"
            })
        }
    ]
    for p in products:
        db_p = Product(**p)
        db.add(db_p)
    db.commit()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
