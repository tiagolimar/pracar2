import { useState, useEffect } from 'react';
import { Categoria } from './components/Categoria';
import { Banner } from './components/Banner';

import './style.css'

export const Home = () => {
    const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
        fetch('https://db-praca-r2.onrender.com/api/produto/categorias')
            .then(res => res.json())
            .then(setCategorias)
            .catch(error => console.error('Erro ao carregar categorias:', error));
    }, []);

    return (
        <main>
            <Banner />
                <section className='secao-produtos mb-4 ms-4 me-4'>
                    {categorias.map((categoria,id) => (
                        <Categoria key={id} nomeCategoria={categoria} />
                    ))}
                </section>
        </main>
    );
};

