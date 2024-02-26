"use client";

import Link from "next/link";

export default function Home() {
    return (
        <main className="container-main d-flex flex-column gap-2 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
            <h1>Seja Bem-Vindo ao Praça R2!</h1>
            <p className="text-start fs-5 ms-3">
                Esse é um sistema criado para gerenciar praças de alimentação.
                Na próxima tela você poderá realizar login (use o nome da praça
                de alimentação e a senha) ou você poderá cadastrar uma nova
                praça de alimentação.
            </p>
            <Link className="btn btn-dark shadow fw-bold mb-4" href="/adm">
                FAZER LOGIN
            </Link>
            <div className="alert alert-warning" role="alert">
                <h4 className="alert-heading">ATENÇÃO!!!</h4>
                <p className="text-start">
                    Guarde bem o nome e a senha da sua praça, esses dados não
                    podem ser facilmente recuperados.
                </p>
            </div>
        </main>
    );
}
