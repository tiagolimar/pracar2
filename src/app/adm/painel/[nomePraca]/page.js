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
    }, [url,router]);

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length ===  2) return parts.pop().split(';').shift();
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div>
            <h1>Olá, Seja Bem-Vindo à Praça {nomePraca}!</h1>
        </div>
    );
}