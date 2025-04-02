from flask import Blueprint, request, jsonify
from spellchecker import SpellChecker


check_word_espaniol = Blueprint('spell', __name__)


spell = SpellChecker(language='es')

@check_word_espaniol.route('/check_word_e', methods=['POST'])

def check_word():
    data = request.get_json()  
    palabra = data.get("word")  

    if not palabra:
        return jsonify({"error": "Falta la palabra"}), 400

   
    existe = palabra in spell

    return jsonify({"exists": existe})  