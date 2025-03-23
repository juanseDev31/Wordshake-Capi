import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../components/ThemeContext";

function Home() {
    const { theme } = useTheme(); // Obtener el tema desde el contexto
    const [showScores, setShowScores] = useState(false);

    const scores = [
        { name: "Player 1", score: 100 },
        { name: "Player 2", score: 90 },
        { name: "Player 3", score: 80 }
    ];

    return (
        <div className={`home ${theme}`}>  
            {/* 🔘 Botón de cambio de idioma */}
            <button className="ghost" onClick={() => console.log("Cambiar idioma")}
                style={{ position: "absolute", top: "10px", right: "10px" }}>
                EN/ES
            </button>

            {/* ❓ Botón para ver reglas */}
            <button className="ghost" onClick={() => window.location.href = "rules.html"}
                style={{ position: "absolute", top: "10px", left: "10px" }}>
                ?
            </button>

            {/* 🏆 Botón para mostrar puntuaciones */}
            <button className="ghost" onClick={() => setShowScores(!showScores)}
                style={{ position: "absolute", top: "70px", left: "10px" }}>
                🏆
            </button>

            {/* 🔄 Botón de cambio de tema */}
            <ThemeToggle />

            {/* 📋 Panel de puntuaciones */}
            {showScores && (
                <div className="container scores-panel">
                    <h3>Top Scores</h3>
                    <ul>
                        {scores.map((s, index) => (
                            <li key={index}>{s.name}: {s.score}</li>
                        ))}
                    </ul>
                </div>
            )}

            <h2>WordShake Capi</h2>

            <div className="container">
                {/* Formulario de Registro */}
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Create</button>
                    </form>
                </div>

                {/* Formulario de Inicio de Sesión */}
                <div className="form-container sign-in-container">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        window.location.href = "WordShake.html";
                    }}>
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Start</button>
                    </form>
                </div>

                {/* Panel de superposición */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost">Sign In</button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <button className="ghost">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pie de página */}
            <footer>
                <p>
                    Created with ❤️ by
                    <a href="https://florin-pop.com" target="_blank" rel="noopener noreferrer"> Florin Pop </a> - 
                    Read how I created this 
                    <a href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/" target="_blank"> here</a>.
                </p>
            </footer>
        </div>
    );
}

export default Home;
