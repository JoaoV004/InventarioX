import React, { useState } from 'react';
import { criarProduto } from '../services/produtoService';

const CadastrarProduto = () => {
  const [produto, setProduto] = useState({ nome: '', descricao: '', preco: '', imagemUrl: '' });

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name] : e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await criarProduto(produto);
      alert('Produto cadastrado com sucesso!');
      setProduto({ nome: '', descricao: '', preco: '', imagemUrl: '' });
    } catch (error) {
      alert('Erro ao cadastrar produto.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={produto.nome} onChange={handleChange} placeholder="Nome" /><br />
      <input name="descricao" value={produto.descricao} onChange={handleChange} placeholder="Descrição" /><br />
      <input name="preco" value={produto.preco} onChange={handleChange} placeholder="Preço" /><br />
      <input name="imagemUrl" value={produto.imagemUrl} onChange={handleChange} placeholder="Imagem" />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastrarProduto;
