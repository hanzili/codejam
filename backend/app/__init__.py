from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.extensions import mongo, bcrypt, jwt
from app.routes.auth import auth_bp
from app.utils.error_handlers import register_error_handlers

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize CORS
    CORS(app)

    # Initialize extensions
    mongo.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    # Register error handlers
    register_error_handlers(app)

    # Register blueprints
    app.register_blueprint(auth_bp)

    @app.route('/')
    def hello():
        return {'message': 'Hello, World!'}

    return app