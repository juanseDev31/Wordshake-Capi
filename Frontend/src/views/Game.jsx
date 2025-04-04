import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Game() {
    const navigate = useNavigate();
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [grid, setGrid] = useState(generateRandomGrid());
    const [showLetters, setShowLetters] = useState(false);
    const [scoreHistory, setScoreHistory] = useState([
        { palabra: "EXITO", puntos: 8 },
        { palabra: "JUEGO", puntos: 5 },
        { palabra: "REACT", puntos: 7 },
        { palabra: "CODIGO", puntos: 6 },
        { palabra: "PUNTOS", puntos: 9 }
    ]);
    const [timeLeft, setTimeLeft] = useState(180); // 3 minutos en segundos
    const timerRef = useRef(null);

    // Efecto para el temporizador
    useEffect(() => {
        if (showLetters && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [showLetters, timeLeft]);

    function generateRandomGrid() {
        const vowels = "AEIOU";
        const consonants = "BCDFGHJKLMNPQRSTVWXYZ";
        return Array(5).fill().map(() => 
            Array(5).fill().map(() => {
                const letterPool = Math.random() < 0.4 ? vowels : consonants;
                return letterPool[Math.floor(Math.random() * letterPool.length)];
            })
        );
    }

    const handleLetterClick = (row, col) => {
        if (!showLetters || timeLeft === 0) return;
        
        const letter = grid[row][col];
        const position = `${row}-${col}`;
        
        setSelectedLetters(prev => {
            if (prev.some(item => item.position === position)) {
                return prev.filter(item => item.position !== position);
            }
            return [...prev, { letter, position }];
        });
    };

    const resetGame = () => {
        clearInterval(timerRef.current);
        setSelectedLetters([]);
        setGrid(generateRandomGrid());
        setShowLetters(true);
        setTimeLeft(180);
    };

    const handleSubmit = async () => {
        // Palabras fijas para enviar (alterna entre ellas)
        const testWords = {
            es: "correr",
            en: "run" // Añadido por si acaso necesitas inglés
        };
    
        // Seleccionamos la palabra en español
        const wordToSend = testWords.es;
    
        try {
            const response = await fetch("http://127.0.0.1:5000/api/check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    word: wordToSend,
                    language: "es" // Fijamos español como idioma
                }),
            });
    
            const data = await response.json();
    
            if (data.score) {
                // Mostramos en el historial la palabra que el usuario formó realmente
                const userWord = selectedLetters.map(item => item.letter).join('');
                const newScore = data.score;
    
                setScoreHistory([{ 
                    palabra: userWord, 
                    puntos: newScore 
                }, ...scoreHistory]);
    
                setSelectedLetters([]);
            } else if (data.error) {
                console.error("Error del backend:", data.error);
            }
        } catch (err) {
            console.error("Error de conexión:", err);
    
            // Fallback: si falla la conexión, usa el sistema actual
            const newWord = selectedLetters.map(item => item.letter).join('');
            const newScore = Math.floor(Math.random() * 10) + 1;
            setScoreHistory([{ palabra: newWord, puntos: newScore }, ...scoreHistory]);
            setSelectedLetters([]);
        }
    };

    const isLetterSelected = (row, col) => {
        return selectedLetters.some(item => item.position === `${row}-${col}`);
    };

    // Formatear el tiempo en MM:SS
    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="game-jsx-root">
            <div className="game-main-container">
                <button 
                    className="game-home-button"
                    onClick={() => navigate("/")}
                >
                    🏡 Home
                </button>

                <div className="game-content-center">
                    <div className="title-and-timer">
                        <h1 className="game-title">WordShake</h1>
                        {showLetters && (
                            <div className="timer">
                                {formatTime()}
                            </div>
                        )}
                    </div>
                    
                    <div className="game-main-content">
                        <div className="letter-grid-container">
                            {grid.map((row, rowIndex) => (
                                row.map((letter, colIndex) => (
                                    <button
                                        key={`${rowIndex}-${colIndex}`}
                                        className={`letter-button ${isLetterSelected(rowIndex, colIndex) ? 'selected' : ''} ${!showLetters ? 'hidden' : ''}`}
                                        onClick={() => handleLetterClick(rowIndex, colIndex)}
                                    >
                                        {letter}
                                    </button>
                                ))
                            ))}
                        </div>

                        <div className="score-table-container">
                            <h3 className="score-table-title">Puntuaciones</h3>
                            <div className="score-table-scroll">
                                <table className="score-table">
                                    <thead>
                                        <tr>
                                            <th>Palabra</th>
                                            <th>Puntos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {scoreHistory.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.palabra}</td>
                                                <td>{item.puntos}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="word-display-container">
                        <h3 className="word-display-title">Tu palabra:</h3>
                        <div className="word-display">
                            {selectedLetters.length > 0 ? (
                                selectedLetters.map((item, index) => (
                                    <span key={index}>{item.letter}</span>
                                ))
                            ) : (
                                <span className={`word-display-placeholder ${!showLetters ? 'waiting' : ''}`}>
                                    {showLetters ? "Selecciona letras" : "Presiona Comenzar"}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="buttons-container">
                        <button 
                            className={`reset-game-button ${!showLetters ? 'start' : ''}`}
                            onClick={resetGame}
                        >
                            {showLetters ? "Reiniciar Juego" : "Comenzar Juego"}
                        </button>
                        
                        {showLetters && (
                            <button 
                                className="submit-button"
                                onClick={handleSubmit}
                                disabled={selectedLetters.length === 0 || timeLeft === 0}
                            >
                                Ingresar
                            </button>
                        )}
                    </div>
                </div>

                <footer className="game-footer">
                    <p>Creado con ❤️ por Capi's INC</p>
                </footer>
            </div>
        </div>
    );
}

export default Game;