import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir después del login
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../components/ThemeContext";

function Home() {
    const navigate = useNavigate(); // Hook para la navegación
    const { theme } = useTheme(); // Obtener el tema desde el contexto
    const [showScores, setShowScores] = useState(false);
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const [language, setLanguage] = useState("en"); // Estado para el idioma
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); // Para manejar errores

    const scores = [
        { name: "Player 1", score: 100 },
        { name: "Player 2", score: 90 },
        { name: "Player 3", score: 80 }
    ];

    // Cambiar el idioma
    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
    };

    // Manejar inicio de sesión
    const handleLogin = async (e) => {
        e.preventDefault(); // Evita el recargo de la página

        try {
            const response = await fetch("http://127.0.0.1:5000/api/login", { // Ruta de la API Flask
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: usuario, password }),
            });

            const data = await response.json(); // Convertir la respuesta a JSON

            if (data.success) {
                alert("Inicio de sesión exitoso");
                navigate("/game"); // Redirige al juego
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        } catch (err) {
            setError("Error en la conexión con el servidor");
        }
    };

    return (
        <div className="home">
            {/* Botón para cambiar el idioma */}
            <button className="ghost" onClick={toggleLanguage}
                style={{ position: "absolute", top: "10px", right: "10px" }}>
                {language === "en" ? "EN" : "ES"}
            </button>

            {/* Botón para ir a las reglas */}
            <button className="ghost" onClick={() => navigate("/rules")} 
                style={{ position: "absolute", top: "10px", left: "10px" }}>
                ?
            </button>

            {/* Botón para mostrar/ocultar puntuaciones */}
            <button className="ghost" onClick={() => setShowScores(!showScores)}
                style={{ position: "absolute", top: "70px", left: "10px" }}>
                🏆
            </button>

            {/* 🔄 Botón de cambio de tema */}
            <ThemeToggle />

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
                        <span>{language === "en" ? "or use your username for registration" : "o usa tu usuario para registrarte"}</span>
                        <input type="text" placeholder={language === "en" ? "Username" : "Usuario"} />
                        <input type="email" placeholder={language === "en" ? "Email" : "Correo Electrónico"} />
                        <input type="password" placeholder={language === "en" ? "Password" : "Contraseña"} />
                        <button>{language === "en" ? "Create" : "Crear"}</button>
                    </form>
                </div>

                {/* Formulario de inicio de sesión */}
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLogin}>
                        <h1>{language === "en" ? "Sign In" : "Iniciar Sesión"}</h1>
                        <span>{language === "en" ? "or use your account" : "o usa tu cuenta"}</span>
                        <input 
                            type="text" 
                            placeholder={language === "en" ? "Username" : "Usuario"} 
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder={language === "en" ? "Password" : "Contraseña"} 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">{language === "en" ? "Start" : "Empezar"}</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                </div>

                {/* Panel de alternancia entre Sign In y Sign Up */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>{language === "en" ? "Welcome Back!" : "¡Bienvenido de nuevo!"}</h1>
                            <p>{language === "en" ? "To keep connected with us please login with your personal info" : "Para mantenerte conectado con nosotros, por favor inicia sesión con tu información personal"}</p>
                            <button className="ghost" onClick={() => setIsRightPanelActive(false)}>
                                {language === "en" ? "Sign In" : "Iniciar Sesión"}
                            </button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1>{language === "en" ? "Hello, Friend!" : "¡Hola, Amigo!"}</h1>
                            <p>{language === "en" ? "Enter your personal details and start journey with us" : "Ingresa tus datos personales y comienza el viaje con nosotros"}</p>
                            <button className="ghost" onClick={() => setIsRightPanelActive(true)}>
                                {language === "en" ? "Sign Up" : "Registrarse"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
