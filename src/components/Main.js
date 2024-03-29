//Archivo para especificar las rutas de las distintas paginas

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Proyectos from '../pages/Proyectos';
import Contacto from '../pages/Contacto';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/proyectos' element={<Proyectos/>}></Route>
      <Route path='/contacto' element={<Contacto/>}></Route>
    </Routes>
  );
}

export default Main;