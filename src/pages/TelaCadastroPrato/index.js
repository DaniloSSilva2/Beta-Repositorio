import React from 'react';
import CadastroDePrato from '../../components/CadastroDePrato';
import MensagemFeedback from '../../components/MensagemFeedback';
import useMensagem from '../../hooks/useMensagem';
import api from '../../services/api';  // import do axios configurado
import './styles.css';

function TelaCadastroPrato() {
  const { mensagem, tipo, exibirMensagem } = useMensagem();

  const cadastrarPrato = async (prato) => {
    try {
      await api.post('/pratos', prato);
      exibirMensagem('Prato cadastrado com sucesso!', 'sucesso');
    } catch (error) {
      console.error(error);
      exibirMensagem('Erro ao cadastrar prato. Tente novamente.', 'erro');
    }
  };

  return (
    <div className="tela-cadastro">
      {mensagem && <MensagemFeedback mensagem={mensagem} tipo={tipo} />}
      <CadastroDePrato onCadastrar={cadastrarPrato} />
    </div>
  );
}

export default TelaCadastroPrato;