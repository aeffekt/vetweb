import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Servicio from './pages/Servicio';
import QuienesSomos from './pages/QuienesSomos';
import Tutoriales from './pages/Tutoriales';
import Contacto from './pages/Contacto';
import './css/App.css'


function App() { 
  return (
    <>            
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />            
              <Route path="/servicios" element={<Servicios />} />              
              <Route path="/servicios/servicio" element={<Servicio />} />              
              <Route path="/quienesSomos" element={<QuienesSomos />} />              
              <Route path="/tutoriales" element={<Tutoriales />} />
              <Route path="/contacto" element={<Contacto />} />
          </Routes>
      </BrowserRouter>                        
    </>
  )
}

export default App
