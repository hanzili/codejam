from flask import jsonify
from marshmallow import ValidationError
from pymongo.errors import PyMongoError

def register_error_handlers(app):
    @app.errorhandler(ValidationError)
    def handle_validation_error(error):
        return jsonify({'error': error.messages}), 400

    @app.errorhandler(PyMongoError)
    def handle_mongo_error(error):
        return jsonify({'error': 'Database error occurred'}), 500

    @app.errorhandler(Exception)
    def handle_generic_error(error):
        return jsonify({'error': 'An unexpected error occurred'}), 500