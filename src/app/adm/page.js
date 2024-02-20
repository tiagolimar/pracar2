"use client"

import Link from "next/link"
import { useRouter } from 'next/navigation';

import { URL_LOGIN } from './url';

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export default function Login (){
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nome = e.target.elements.nome.value;
        const senha = e.target.elements.senha.value;
    
        if (!(nome && senha)){
            alert("Preencha todos os campos.")
            return null;
        }
    
        const response = await fetch(URL_LOGIN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, senha })
        });
    
        const data = await response.json();
    
        if (data.createdAt){
            const token = data.token
            setCookie('auth_token_pracar2', token, 7);
            alert("O login foi realizado com sucesso! Você será redirecionado ao sistema de gerenciamento.")
            router.push('/adm/gerenciador/SejaBemVindo');
        }else{
            alert("Nome ou senha não conferem")
        }
    };
    
    return(
    <main className="d-flex flex-column gap-3 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
        <h1>Praça R2</h1>
        <h3 className="text-secondary">Login</h3>
        <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
            <input className="form-control" name="nome" placeholder="Nome da praça" type="text" />
            <input className="form-control" name="senha" placeholder="Senha" type="password" />
            <button className="btn btn-dark"> Fazer Login</button>
        </form>
        <div className="d-flex col-12 justify-content-between">
            <Link href="/adm/alterar_senha">Alterar senha</Link>
            <Link href="/adm/cadastrar">Cadastrar</Link>
        </div>
      </main>
    )
}