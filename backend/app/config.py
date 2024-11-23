import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/myapp')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'default-super-secret-key')
    ENVIRONMENT = os.getenv('ENVIRONMENT', 'development')
    
    # Add these MongoDB settings
    MONGO_CONNECT_TIMEOUT_MS = 5000
    MONGO_SOCKET_TIMEOUT_MS = 5000