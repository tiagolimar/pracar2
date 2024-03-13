"use client";

import Link from "next/link";
import ContainerMain from "@/components/ContainerMain";
import WakeUpServer from "@/components/WakeUpServer";

export default function Home() {
    return (
        <ContainerMain>
        <h1>Seja Bem-Vindo ao Sistema Praça R2!</h1>
        <p className="text-start fs-5 ms-3">
            Este é um sistema criado para o gerenciamento de praças de alimentação.
            Na próxima tela, você poderá fazer o login caso já tenha um cadastro.
            É a sua primeira vez? Então, clique no link de cadastro na próxima tela.
        </p>
        <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">ATENÇÃO!!!</h4>
            <p className="text-start">
                Guarde bem o nome e a senha da sua praça, pois esses dados não podem ser facilmente recuperados.
            </p>
        </div>
        <Link className="btn btn-dark shadow fw-bold mb-4" href="/adm">
            FAZER LOGIN
        </Link>
        <WakeUpServer />
        </ContainerMain>
    );
}
