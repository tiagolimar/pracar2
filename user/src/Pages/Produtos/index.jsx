import React, { useState, useEffect } from 'react';
import { ItemProduto } from './ItemProduto';

import './style.css'

const Categoria = ({ nomeCategoria }) => {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        fetch(`https://db-praca-r2.onrender.com/api/produto/categoria/${nomeCategoria}`)
            .then(res => res.json())
            .then(setProdutos)
            .catch(error => console.error('Erro ao carregar produtos:', error));
    }, [nomeCategoria]);

    return (
        <div className="produtos row  row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
            {produtos.map((produto, id) => (
                <ItemProduto key={id} produto={produto} />
            ))}
        </div>
    );
};

export const Produtos = () => {
    const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
        fetch('https://db-praca-r2.onrender.com/api/produto/categorias')
            .then(res => res.json())
            .then(setCategorias)
            .catch(error => console.error('Erro ao carregar categorias:', error));
    }, []);

    return (
        <div>
            {categorias.map((categoria,id) => (
                <Categoria key={id} nomeCategoria={categoria} />
            ))}
        </div>
    );
};

