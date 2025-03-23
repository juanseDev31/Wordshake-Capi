import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "../styles/styleoscuro.css";
import "../styles/styleclaro.css";

function Home() {
    const navigate = useNavigate(); // Hook para navegar entre rutas
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "claro");
    const [showScores, setShowScores] = useState(false);
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const [language, setLanguage] = useState("en"); // Estado para el idioma

    const scores = [
        { name: "Player 1", score: 100 },
        { name: "Player 2", score: 90 },
        { name: "Player 3", score: 80 }
    ];

    // Cargar el archivo CSS correcto cuando cambie el tema
    useEffect(() => {
        const link = document.getElementById("theme-stylesheet");
        if (link) {
            const newHref = theme === "claro" ? "/styles/styleclaro.css" : "/styles/styleoscuro.css";
            link.setAttribute("href", newHref + "?v=" + new Date().getTime()); // Forzamos la recarga
        }
    }, [theme]);

    // Cambiar el idioma
    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
    };

    // Cambiar el tema
    const toggleTheme = () => {
        const newTheme = theme === "claro" ? "oscuro" : "claro";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Guardar en localStorage
    };

    // Función para manejar el clic en "Sign Up"
    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    // Función para manejar el clic en "Sign In"
    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className="home">
            {/* Botón para cambiar el idioma */}
            <button className="ghost" onClick={toggleLanguage}
                style={{ position: "absolute", top: "10px", right: "10px" }}>
                {language === "en" ? "EN" : "ES"}
            </button>

            {/* Botón para cambiar el tema */}
            <button className="ghost" onClick={toggleTheme}
                style={{ position: "absolute", top: "70px", right: "10px" }}>
                {theme === "claro" ? "🌙" : "☀️"}
            </button>

            {/* Botón para ir a las reglas */}
            <button className="ghost" onClick={() => navigate("/rules")} // Navega a /rules
                style={{ position: "absolute", top: "10px", left: "10px" }}>
                ?
            </button>

            {/* Botón para mostrar/ocultar puntuaciones */}
            <button className="ghost" onClick={() => setShowScores(!showScores)}
                style={{ position: "absolute", top: "70px", left: "10px" }}>
                🏆
            </button>

            {/* Panel de puntuaciones */}
            {showScores && (
                <div className="container scores-panel">
                    <h3>{language === "en" ? "Top Scores" : "Mejores Puntajes"}</h3>
                    <ul>
                        {scores.map((s, index) => (
                            <li key={index}>{s.name}: {s.score}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Título principal */}
            <h2>{language === "en" ? "Welcome to WordShake Capi" : "Bienvenido a WordShake Capi"}</h2>

            {/* Contenedor del formulario */}
            <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
                <div className="form-container sign-up-container">
                    <form>
                        <h1>{language === "en" ? "Create Account" : "Crear Cuenta"}</h1>
                        <span>{language === "en" ? "or use your email for registration" : "o usa tu correo electrónico para registrarte"}</span>
                        <input type="text" placeholder={language === "en" ? "Name" : "Nombre"} />
                        <input type="email" placeholder={language === "en" ? "Email" : "Correo Electrónico"} />
                        <input type="password" placeholder={language === "en" ? "Password" : "Contraseña"} />
                        <button>{language === "en" ? "Create" : "Crear"}</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        navigate("/game"); // Redirige a /game
                    }}>
                        <h1>{language === "en" ? "Sign In" : "Iniciar Sesión"}</h1>
                        <span>{language === "en" ? "or use your account" : "o usa tu cuenta"}</span>
                        <input type="email" placeholder={language === "en" ? "Email" : "Correo Electrónico"} />
                        <input type="password" placeholder={language === "en" ? "Password" : "Contraseña"} />
                        <button type="submit">{language === "en" ? "Start" : "Empezar"}</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>{language === "en" ? "Welcome Back!" : "¡Bienvenido de nuevo!"}</h1>
                            <p>{language === "en" ? "To keep connected with us please login with your personal info" : "Para mantenerte conectado con nosotros, por favor inicia sesión con tu información personal"}</p>
                            <button className="ghost" onClick={handleSignInClick}>{language === "en" ? "Sign In" : "Iniciar Sesión"}</button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1>{language === "en" ? "Hello, Friend!" : "¡Hola, Amigo!"}</h1>
                            <p>{language === "en" ? "Enter your personal details and start journey with us" : "Ingresa tus datos personales y comienza el viaje con nosotros"}</p>
                            <button className="ghost" onClick={handleSignUpClick}>{language === "en" ? "Sign Up" : "Registrarse"}</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <p>
                    Created with ❤️ by
                    <a href="https://florin-pop.com" target="_blank" rel="noopener noreferrer">Florin Pop</a> -
                    Read how I created this 
                    <a href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/" target="_blank">here</a>.
                </p>
            </footer>
        </div>
    );
}

export default Home;