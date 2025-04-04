from db import get_db_connection

def insert_user(name, email, password):
    
    conn = get_db_connection()
    cursor = conn.cursor()
    # Inserta un nuevo usuario en la base de datos
    # y devuelve el resultado y ya
    query = """
        INSERT INTO users (name, email, password)
        VALUES (%s, %s, %s);
    """
    cursor.execute(query, (name, email, password))

    conn.commit()
    cursor.close()
    conn.close()
