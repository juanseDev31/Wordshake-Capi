from flask import Blueprint, request, jsonify
from db import get_db_connection

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json() 
    usuario = data.get("name")
    contrasenia = data.get("password")

    if not usuario or not contrasenia:
        return jsonify({"error": "Faltan datos"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Buscar usuario en la base de datos
        cursor.execute("SELECT * FROM users WHERE name = %s AND password = %s", (usuario, contrasenia))
        
        user = cursor.fetchone()

        cursor.close()
        conn.close()

        return jsonify({"success": bool(user)})  # Si hay usuario, devuelve True

    except Exception as e:
        return jsonify({"error": str(e)}), 500
