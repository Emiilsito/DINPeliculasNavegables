import Header from "./components/Header";
import PeliculasPage from "./pages/PeliculasPage";
import InterpretePage from "./pages/InterpretePage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/peliculas" element={<PeliculasPage />} />
          <Route path="/interpretes" element={<InterpretePage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
