from flask import Blueprint, jsonify, request
from werkzeug.security import generate_password_hash
from repositories.insert_repository import insert_user

insert_bd = Blueprint('insert_bd', __name__)

@insert_bd.route('/insert', methods=['POST'])

def insert_user1():
    # Recibe los datos del usuario desde el cuerpo de la solicitud que en esta caso serpia el json
    # y los almacena en la base de datos, ademas de hashear epicamente la contrasenia
    data = request.get_json()
    if not data or not all(key in data for key in ("name", "email", "password")):
        return jsonify({"error": "Faltan datos requeridos"}), 400

    try:
        hashed_password = generate_password_hash(data["password"])
        insert_user(data["name"], data["email"], hashed_password)

        return jsonify({"message": "Usuario insertado exitosamente"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
