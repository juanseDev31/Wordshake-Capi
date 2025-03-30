from flask import Blueprint, jsonify
from db import get_db_connection

users_bp = Blueprint('users', __name__)

@users_bp.route('/usuarios', methods=['GET'])
def get_usuarios():
    """Endpoint para obtener todos los usuarios"""
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users;")
        usuarios = cursor.fetchall()
        
        usuarios_list = []
        for usuario in usuarios:
            usuarios_list.append({
                "identificación": usuario[0],
                "nombre": usuario[1],
                "correo electrónico": usuario[2],
                "contraseña": usuario[3],
                "puntaje": usuario[4]
            })
        
        cursor.close()
        conn.close()
        
        return jsonify(usuarios_list), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
