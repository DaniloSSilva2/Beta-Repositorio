import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial';
import TelaCadastroPrato from './pages/TelaCadastroPrato';
import TelaListaPratos from './pages/TelaListaPratos';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/cadastro" element={<TelaCadastroPrato />} />
        <Route path="/cardapio" element={<TelaListaPratos />} />
      </Routes>
    </Router>
  );
}

export default App;
