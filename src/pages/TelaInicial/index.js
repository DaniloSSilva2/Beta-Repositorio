import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logo.png';

function TelaInicial() {
  return (
    <div className="tela-inicial">
      <img src={logo} alt="Logo" />
      <h1>Bem-vindo ao Restaurante</h1>
      <nav>
        <Link to="/cadastro">Cadastrar Prato</Link>
        <Link to="/cardapio">Ver Cardápio</Link>
      </nav>
    </div>
  );
}

export default TelaInicial;