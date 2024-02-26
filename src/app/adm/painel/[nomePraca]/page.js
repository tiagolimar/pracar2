"use client"

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { URL_CHECK } from '../../url.js';

export default function PracaPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const router = useRouter();
    const {nomePraca} = useParams();

    const url = nomePraca;

    useEffect(() => {
        const checkPraca = async () => {
            if (!url) return;

            const response = await fetch(URL_CHECK, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });

            const dados = await response.json();

            if (dados?.exists) {
                const token = dados.token;
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

    // return (
    //     <div className="d-flex flex-column gap-2 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
    //         <h1>Bem vindo ao painel de gerenciamento!</h1>
    //         <p className="text-start fs-5 ms-3">
    //         Logo abaixo edite as informações do evento (essas informações aparecem no cardápio e definem quando eleficará disponível pra todos).</p>
    //         <p>
    //         Acesse o menu lateral para utilizar as outras áreas do menu de gerenciamento
    //         </p>
    //     </div>
    // );
}