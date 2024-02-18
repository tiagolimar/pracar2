"use client"

import Link from "next/link"

export default function Login (){
    return(
    <main className="d-flex flex-column gap-3 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
        <h1>Praça R2</h1>
        <h3 className="text-secondary">Login</h3>
        <input className="form-control" placeholder="Nome da praça" type="text" />
        <input className="form-control" placeholder="Senha" type="password" />
        <button className="btn btn-dark"> Fazer Login</button>
        <div className="d-flex col-12 justify-content-between">
            <Link href="/adm/alterar_senha">Alterar senha</Link>
            <Link href="/adm/cadastrar">Cadastrar</Link>
        </div>
      </main>
    )
}