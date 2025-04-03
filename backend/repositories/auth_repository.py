from db import get_db_connection

def get_user_by_name(name):
    
    conn = get_db_connection()
    cursor = conn.cursor()
  # Busca en la bd un usuario por su nombre
    # y devuelve el resultado y ya
    query = "SELECT * FROM users WHERE name = %s"
    cursor.execute(query, (name,))
    user = cursor.fetchone()

    cursor.close()
    conn.close()

    return user
