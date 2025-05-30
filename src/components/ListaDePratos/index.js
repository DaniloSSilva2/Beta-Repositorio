import React from 'react';
import './styles.css';

function ListaDePratos({ pratos }) {
  return (
    <div className="lista-container">
      {pratos.map(prato => (
        <div className="card" key={prato.id}>
          <img src={prato.urlImagem} alt={prato.nomePrato} />
          <h3>{prato.nomePrato}</h3>
          <p>R$ {Number(prato.preco).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaDePratos;