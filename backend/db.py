import psycopg2
from config import Config  # ✅ Esto debería funcionar


def get_db_connection():
    """Crea una conexión a la base de datos PostgreSQL."""
    return psycopg2.connect(
        dbname=Config.DB_NAME,
        user=Config.DB_USER,
        password=Config.DB_PASSWORD,
        host=Config.DB_HOST,
        port=Config.DB_PORT
    )