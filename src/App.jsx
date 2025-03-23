import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home.jsx";
import { ThemeProvider } from "./components/ThemeContext";


function App() {
    return (
        <ThemeProvider> {/* 🎨 Proveedor del tema global */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
