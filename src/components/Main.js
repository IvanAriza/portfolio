//Archivo para especificar las rutas de las distintas paginas

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre_Mi from '../pages/Sobre_Mi';
import Proyectos from '../pages/Proyectos';
import Contacto from '../pages/Contacto';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sobre_mi' element={<Sobre_Mi/>}></Route>
      <Route path='/proyectos' element={<Proyectos/>}></Route>
      <Route path='/contacto' element={<Contacto/>}></Route>
    </Routes>
  );
}

export default Main;