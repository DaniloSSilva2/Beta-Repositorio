import React, { useState } from 'react';
import './styles.css';

function CadastroDePrato() {
  const [form, setForm] = useState({
    nomePrato: '',
    descricao: '',
    preco: '',
    categoria: 'Entrada',
    disponibilidade: 'Em estoque',
    urlImagem: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prato = { ...form };

    try {
      const response = await fetch("https://restaurante-q52p.onrender.com/pratos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(prato)
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar prato");
      }

      alert("Prato cadastrado com sucesso!");

      // Limpar o formulário após sucesso
      setForm({
        nomePrato: '',
        descricao: '',
        preco: '',
        categoria: 'Entrada',
        disponibilidade: 'Em estoque',
        urlImagem: ''
      });

    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar prato");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Cadastrar Novo Prato</h2>
      <input name="nomePrato" placeholder="Nome" value={form.nomePrato} onChange={handleChange} required />
      <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />
      <input name="preco" type="number" placeholder="Preço" value={form.preco} onChange={handleChange} required />
      <select name="categoria" value={form.categoria} onChange={handleChange}>
        <option>Entrada</option>
        <option>Prato Principal</option>
        <option>Sobremesa</option>
        <option>Bebida</option>
      </select>
      <select name="disponibilidade" value={form.disponibilidade} onChange={handleChange}>
        <option>Em estoque</option>
        <option>Esgotado</option>
      </select>
      <input name="urlImagem" placeholder="URL da Imagem" value={form.urlImagem} onChange={handleChange} required />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default CadastroDePrato;
