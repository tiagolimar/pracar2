"use client"

import Link from "next/link"

export default function Cadastrar (){
    return(
    <main className="d-flex flex-column gap-3 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
        <h1>Praça R2</h1>
        <h3 className="text-secondary">Cadastro</h3>
        <input className="form-control" name="nome" placeholder="Nome da praça" type="text" />
        <input className="form-control" name="senha" placeholder="Senha" type="password" />
        <input className="form-control" name="c_nova_senha" placeholder="Confirmar nova senha" type="password" />
        <button className="btn btn-dark">Cadastrar</button>
        <div className="d-flex col-12 justify-content-between">
            <Link href="/adm">Fazer Login</Link>
            <Link href="/adm/alterar_senha">Alterar Senha</Link>
        </div>
      </main>
    )
}