import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Design from './pages/Design';
import FabricacionTextil from './pages/FabricacionTextil';
import Opiniones from './pages/Opiniones';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/design' element={<Design />} />
          <Route path='/fabricion-textil' element={<FabricacionTextil />} />
          <Route path='/opiniones' element={<Opiniones />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </>
  )
}

export default App
