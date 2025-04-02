from flask import Flask
from flask_cors import CORS
from routes.users import users_bp  # Importar las rutas de usuarios
from routes.auth import auth_bp  # Importar las rutas de autenticación
from routes.check_word_espaniol import check_word_espaniol  # Importar las rutas de verificación de palabras
app = Flask(__name__)
CORS(app)

# Registrar las rutas con un prefijo
app.register_blueprint(users_bp, url_prefix='/api')
app.register_blueprint(auth_bp, url_prefix='/api')
app.register_blueprint(check_word_espaniol, url_prefix='/api') 


if __name__ == '__main__':
    app.run(debug=True)
