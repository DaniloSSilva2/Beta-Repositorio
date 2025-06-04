import React, { useEffect, useState } from 'react';
import './styles.css';

function ListaDePratos() {
  const [pratos, setPratos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarPratos = async () => {
      try {
        const response = await fetch("https://restaurante-q52p.onrender.com/pratos");
        if (!response.ok) {
          throw new Error("Erro ao carregar pratos");
        }
        const dados = await response.json();
        setPratos(dados);
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar pratos");
      } finally {
        setCarregando(false);
      }
    };

    carregarPratos();
  }, []);

  if (carregando) {
    return <p>Carregando pratos...</p>;
  }

  return (
    <div className="lista-container">
      {pratos.length === 0 ? (
        <p>Nenhum prato cadastrado.</p>
      ) : (
        pratos.map(prato => (
          <div className="card" key={prato.id}>
            <img src={prato.urlImagem} alt={prato.nomePrato} />
            <h3>{prato.nomePrato}</h3>
            <p>R$ {Number(prato.preco).toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ListaDePratos;
