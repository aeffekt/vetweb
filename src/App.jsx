import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Trabajo from './pages/FormaDeTrabajo';
import QuienesSomos from './pages/QuienesSomos';
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
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/forma-de-trabajo" element={<Trabajo />} />              
              <Route path="/preguntas" element={<Preguntas />} />
          </Routes>
      </BrowserRouter>                        
    </>
  )
}

export default App
