import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Game() {
    const navigate = useNavigate();
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [grid, setGrid] = useState(generateRandomGrid());
    const [showLetters, setShowLetters] = useState(false);

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
        if (!showLetters) return;
        
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
        setSelectedLetters([]);
        setGrid(generateRandomGrid());
        setShowLetters(true);
    };

    const isLetterSelected = (row, col) => {
        return selectedLetters.some(item => item.position === `${row}-${col}`);
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
                    <h1 className="game-title">WordShake Capi</h1>
                    
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

                    <button 
                        className={`reset-game-button ${!showLetters ? 'start' : ''}`}
                        onClick={resetGame}
                    >
                        {showLetters ? "Reiniciar Juego" : "Comenzar Juego"}
                    </button>
                </div>

                <footer className="game-footer">
                    <p>Creado con ❤️ por Capi's INC</p>
                </footer>
            </div>
        </div>
    );
}

export default Game;