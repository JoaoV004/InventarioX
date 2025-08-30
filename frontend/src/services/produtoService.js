import axios from 'axios';

const API_URL = 'http://localhost:8080/produtos';

export const criarProduto = async (produto) => {
  try {
    const response = await axios.post(API_URL, produto);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    throw error;
  }
};

export const obterProdutos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    throw error;
  } 
};
