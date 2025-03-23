import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Rules from "./views/Rules.jsx";
import Game from "./views/Game.jsx"; // Importa el componente Game

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/game" element={<Game />} /> {/* Nueva ruta para Game */}
            </Routes>
        </Router>
    );
}

export default App;