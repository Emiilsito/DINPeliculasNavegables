import Header from "./components/Header";
import PeliculasPage from "./pages/PeliculasPage";
import InterpretePage from "./pages/InterpretePage";
import Home from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/inicio" element={<Navigate to={'/'} />} />
          <Route path="/peliculas" element={<PeliculasPage />} />
          <Route path="/interpretes" element={<InterpretePage />} />
          <Route path="*" element={<p>Error 404: Página no encontrada</p>} />
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
