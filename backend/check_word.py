from flask import Blueprint, request, jsonify
from spellchecker import SpellChecker

check_word_espaniol = Blueprint('spell', __name__)

# Aquí basicamente lo que hice fue crear un diccionario qeu contiene los idiomas y sus respectivos correctores ortográficos
# de la librería spellchecker, para que luego al momento de hacer la petición se pueda elegir el idioma.
spell_checkers = {
    "es": SpellChecker(language='es'),  
    "en": SpellChecker(language='en')   
}

# Esta funci;ón simplemnete va a calcular el porcentaje obtenido dependiendo la sletras que tenga la palabra
# y el máximo de letras que puede tener una palabra, en este caso 10.
def calcular_score(palabra):
    longitud = len(palabra)
    return min(longitud - 1, 10)  

@check_word_espaniol.route('/check_word', methods=['POST'])
def check_word():
    data = request.get_json()
    palabra = data.get("word")
    idioma = data.get("language", "es")  

    if not palabra:
        return jsonify({"error": "Falta la palabra"}), 400

    if idioma not in spell_checkers:
        return jsonify({"error": "Idioma no soportado"}), 400

    # Seleccionar el corrector ortográfico del idioma elegido, si es español o si es inglés 
    spell = spell_checkers[idioma]

    if palabra in spell:
        score = calcular_score(palabra)
        return jsonify({"score": score})  
    else:
        return jsonify({"error": "Palabra no encontrada"}), 400
