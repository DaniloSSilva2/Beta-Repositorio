import React, { useEffect, useState } from 'react';
import ListaDePratos from '../../components/ListaDePratos';
import api from '../../services/api';
import './styles.css';

function TelaListaPratos() {
  const [pratos, setPratos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const fetchPratos = async () => {
      try {
        const response = await api.get('/pratos');
        setPratos(response.data);
      } catch (error) {
        console.error('Erro ao buscar pratos:', error);
        setPratos([]);
      } finally {
        setCarregando(false);
      }
    };

    fetchPratos();
  }, []);

  return (
    <div className="tela-lista">
      <h2>Cardápio</h2>
      <ListaDePratos pratos={pratos} carregando={carregando} />
    </div>
  );
}

export default TelaListaPratos;
