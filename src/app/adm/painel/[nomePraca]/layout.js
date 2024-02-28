"use client"

import Link from "next/link";
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { URL_CHECK } from '../../url';
import './layout.css'


function ItensPainel(){
    const { nomePraca } = useParams();

    const RotasPainel = [
        { nome:"Home", rota:`/adm/painel/${nomePraca}` },
        { nome:"Dados do Evento", rota:`/adm/painel/${nomePraca}/evento` },
        { nome:"Cardápio", rota:`/adm/painel/${nomePraca}/cardapio` },
        { nome:"Caixas", rota:`/adm/painel/${nomePraca}/caixas` },
        { nome:"Relatórios", rota:`/adm/painel/${nomePraca}/relatorios` },
    ]

    return (
        <ul className="navbar-nav gap-3">
            {RotasPainel.map((r, id) => {
                return (
                    <li key={id} className="nav-item shadow-sm">
                        <Link className="btn btn-lg btn-outline-dark w-100" href={r.rota}>
                            {r.nome}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

function title(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function Layout ({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [nomeDaPraca, setNomeDaPraca] = useState('');

    const router = useRouter();
    const {nomePraca} = useParams();

    const url = nomePraca;

    useEffect(() => {
        const checkPraca = async () => {
            if (!url) return;

            const dados = await axios.post(URL_CHECK, { url });

            if (dados.data?.exists) {
                const token = dados.data.token;
                setNomeDaPraca(title(dados.data.nome));
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
        <main>
            <nav className="navbar navbar-painel shadow border-bottom border-black ">
                <div className="container-fluid">
                    <button className="navbar-toggler border-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand fw-bold" href="#">{`Praça R2 - ${nomeDaPraca}`}</a>
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
            <section className="d-flex justify-content-center mt-4">
                {children}
            </section>
        </main>
    )
}
