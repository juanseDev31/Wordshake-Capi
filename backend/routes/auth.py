from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash
from repositories.auth_repository import get_user_by_name

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    usuario = data.get("name")
    contrasenia = data.get("password")

    if not usuario or not contrasenia:
        return jsonify({"error": "Faltan datos"}), 400

    try:
        user = get_user_by_name(usuario)
        
        if user:
            # Aqui lo que hace es que el hash está en la columna de la contraseña (índice 3 si usas SELECT *) por que asi esta en nuestra bd
            hashed_password = user[3]
            if check_password_hash(hashed_password, contrasenia):
                return jsonify({"success": True})

        return jsonify({"success": False})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
