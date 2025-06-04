import React, { useEffect } from 'react';
import './styles.css';

function MensagemFeedback({ mensagem, tipo = "info", onFechar }) {
  useEffect(() => {
    if (onFechar) {
      const timer = setTimeout(onFechar, 4000);
      return () => clearTimeout(timer);
    }
  }, [onFechar]);

  return (
    <div className={`mensagem ${tipo}`}>
      {mensagem}
    </div>
  );
}

export default MensagemFeedback;
