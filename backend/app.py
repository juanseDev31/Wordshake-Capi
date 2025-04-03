from flask import Flask
from flask_cors import CORS
from routes.users import users_bp  
from routes.auth import auth_bp  
from routes.check import check_word  

app = Flask(__name__)
CORS(app)

# Registrar las rutas con un prefijo
app.register_blueprint(users_bp, url_prefix='/api')
app.register_blueprint(auth_bp, url_prefix='/api')
app.register_blueprint(check_word, url_prefix='/api')  

if __name__ == '__main__':
    app.run(debug=True)
