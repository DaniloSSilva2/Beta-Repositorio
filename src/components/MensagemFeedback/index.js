import React from 'react';
import './styles.css';

function MensagemFeedback({ mensagem, tipo }) {
  return (
    <div className={`mensagem ${tipo}`}>
      {mensagem}
    </div>
  );
}

export default MensagemFeedback;