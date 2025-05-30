import React, { useState } from 'react';
import './styles.css';

function CadastroDePrato({ onCadastrar }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoPrato = { ...form, id: Date.now() };
    onCadastrar(novoPrato);
    setForm({
      nomePrato: '',
      descricao: '',
      preco: '',
      categoria: 'Entrada',
      disponibilidade: 'Em estoque',
      urlImagem: ''
    });
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