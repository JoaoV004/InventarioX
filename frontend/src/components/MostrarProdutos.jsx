import React, { useEffect, useState } from 'react';
import { obterProdutos } from '../services/produtoService';

const MostrarProdutos = () => {

    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const produtos = await obterProdutos();
                setListaProdutos(produtos);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        };
        fetchProdutos();
    }, []);


    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {listaProdutos.map((produto) => (
                    <div style={{border: '5px solid black', margin: '10px', padding: '10px'}} key={produto.id}>
                        <li key={produto.id}>
                        {produto.nome}
                        <img
                            src={produto.imagemUrl}
                            alt={produto.nome}
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '10px',
                                objectFit: 'cover'
                            }}
                            />

                    </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}
export default MostrarProdutos;