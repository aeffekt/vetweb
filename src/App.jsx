import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Trabajo from './pages/FormaDeTrabajo';
import Informacion from './pages/InformacionImportante';
import Preguntas from './pages/PreguntasFrecuentes';
import './css/App.css'


function App() { 
  return (
    <>            
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />            
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/forma-de-trabajo" element={<Trabajo />} />
              <Route path="/informacion" element={<Informacion />} />
              <Route path="/preguntas" element={<Preguntas />} />
          </Routes>
      </BrowserRouter>                        
    </>
  )
}

export default App
