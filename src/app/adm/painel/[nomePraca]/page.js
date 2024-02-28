"use client"

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

import ContainerMain from '@/components/ContainerMain.jsx';
import { URL_CHECK } from '../../url.js';

export default function PracaPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const router = useRouter();
    const {nomePraca} = useParams();

    const url = nomePraca;

    useEffect(() => {
        const checkPraca = async () => {
            if (!url) return;

            const dados = await axios.post(URL_CHECK, { url })

            if (dados.data?.exists) {
                const token = dados.data.token;
                const authToken = getCookie('auth_token_pracar2');

                if (authToken === token) {
                    setIsAuthenticated(true);
                } else {
                    alert("Faça o login na próxim tela.");
                    router.push('/adm/login');
                }
            } else {
                alert("Faça o login na próxim tela.");
                router.push('/adm/login');
            }
        };

        checkPraca();
    }, [url, router]);

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length ===  2) return parts.pop().split(';').shift();
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <ContainerMain >
            <h1 className='mb-4'>Bem vindo ao painel de gerenciamento!</h1>
            <p className="text-start fs-5 ms-3">
            Logo abaixo edite as informações do evento (essas informações aparecem no cardápio e definem quando eleficará disponível pra todos).</p>
            <p className="text-start fs-5 ms-3">
            Acesse o menu lateral para utilizar as outras áreas do menu de gerenciamento
            </p>
        </ContainerMain>
    );
}