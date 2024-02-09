import { useEffect, useState } from 'react';
import { ItemProduto } from './ItemProduto';
import PropTypes from 'prop-types';

import './style.css'

export const Categoria = ({ nomeCategoria }) => {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        console.log(`https://db-praca-r2.onrender.com/api/produtos/categoria/${nomeCategoria}`);
        fetch(`https://db-praca-r2.onrender.com/api/produtos/categoria/${nomeCategoria}`)
            .then(res => res.json())
            .then(setProdutos)
            .catch(error => console.error('Erro ao carregar produtos:', error));
    }, [nomeCategoria]);

    return (
        <div className="produtos border-top border-3 border-dark bg-light shadow mt-4 rounded">
            <h2 className='text-center'>{nomeCategoria}</h2>
            <div className="produtos-container row row-cols-2 border">
                {produtos.map((produto, id) => (
                    <ItemProduto key={id} produto={produto} />
                ))}
            </div>
        </div>
    );
};

Categoria.propTypes = {
    nomeCategoria: PropTypes.string.isRequired,
}