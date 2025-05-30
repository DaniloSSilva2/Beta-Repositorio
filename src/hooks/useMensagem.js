import { useState } from 'react';

function useMensagem() {
  const [mensagem, setMensagem] = useState('');
  const [tipo, setTipo] = useState('');

  const exibirMensagem = (msg, tipoMsg = 'sucesso') => {
    setMensagem(msg);
    setTipo(tipoMsg);
    setTimeout(() => {
      setMensagem('');
      setTipo('');
    }, 3000);
  };

  return { mensagem, tipo, exibirMensagem };
}

export default useMensagem;