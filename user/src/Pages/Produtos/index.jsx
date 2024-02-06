import React, { useState, useEffect } from 'react';
import { ItemProduto } from './ItemProduto';

import './style.css'

const Categoria = ({ nomeCategoria }) => {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        console.log(`https://db-praca-r2.onrender.com/api/produtos/categoria/${nomeCategoria}`);
        fetch(`https://db-praca-r2.onrender.com/api/produtos/categoria/${nomeCategoria}`)
            .then(res => res.json())
            .then(setProdutos)
            .catch(error => console.error('Erro ao carregar produtos:', error));
    }, [nomeCategoria]);

    return (
        <div className="produtos row  row-cols-sm-2 row-cols-md-4 row-cols-lg-6 border-top border-3 border-dark bg-light shadow mt-4 rounded">
            <h2 className='text-center'>{nomeCategoria}</h2>
            {produtos.map((produto, id) => (
                <ItemProduto key={id} produto={produto} />
            ))}
        </div>
    );
};

const Banner = ()=>{
    return(
        <div className="banner d-flex align-items-center justify-content-center bg-dark text-white">
        BANNER
    </div>
    )
}

export const Produtos = () => {
    const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
        fetch('https://db-praca-r2.onrender.com/api/produto/categorias')
            .then(res => res.json())
            .then(setCategorias)
            .catch(error => console.error('Erro ao carregar categorias:', error));
    }, []);

    return (
        <div className='mb-4'>
            <Banner />
            {categorias.map((categoria,id) => (
                <Categoria key={id} nomeCategoria={categoria} />
            ))}
        </div>
    );
};

