import React, { useEffect, useState } from 'react';
import ListaDePratos from '../../components/ListaDePratos';
import api from '../../services/api';  // import axios com baseURL configurada
import './styles.css';

function TelaListaPratos() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    const fetchPratos = async () => {
      try {
        const response = await api.get('/pratos');
        setPratos(response.data);
      } catch (error) {
        console.error('Erro ao buscar pratos:', error);
        setPratos([]); // limpa ou mantém vazio em caso de erro
      }
    };

    fetchPratos();
  }, []);

  return (
    <div className="tela-lista">
      <h2>Cardápio</h2>
      <ListaDePratos pratos={pratos} />
    </div>
  );
}

export default TelaListaPratos;