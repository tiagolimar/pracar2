"use client"

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { ItensPainel, getCookie, title } from "@/components/adm/painel";
import { URL_CHECK } from '@/components/URLs';
import { dadosPracaContext } from '@/contexts/dadosPracaContext';

import './layout.css'

export default function Layout ({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [dadosPraca, setDadosPraca] = useState({});

    const {nomePraca} = useParams();
    const url = nomePraca;

    const router = useRouter();

    useEffect(() => {
        const checkPraca = async () => {
            if (!url) return;

            const dados = await axios.post(URL_CHECK, { url });

            if (dados.data?.exists) {
                const token = dados.data.token;
                const {id, nome, senha_caixa, url} = dados.data;

                setDadosPraca({id, nome:title(nome),senha_caixa, url});

                const authToken = getCookie('auth_token_pracar2');

                if (authToken === token) {
                    setIsAuthenticated(true);
                } else {
                    console.log("É necessário atualizar sua autorização, faça login.");
                    router.push('/adm/login');
                }
            } else {
                console.log("É necessário atualizar sua autorização, faça login.");
                router.push('/adm/login');
            }
        };

        checkPraca();
    }, [url, router]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <main>
            <nav className="navbar navbar-painel fixed-top shadow border-bottom border-black">
                <div className="container-fluid">
                    <button className="navbar-toggler border-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand fw-bold" href="#">{`Praça R2 - ${dadosPraca.nome}`}</a>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="label">
                        <div className="offcanvas-header shadow-sm bg-dark text-light">
                            <h5 className="offcanvas-title" id="label">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ItensPainel />
                        </div>
                    </div>
                </div>
            </nav>
            <section className="d-flex layout-painel justify-content-center mt-4">
                <dadosPracaContext.Provider value={{...dadosPraca}} >
                    {children}
                </dadosPracaContext.Provider>
            </section>
        </main>
    )
}
