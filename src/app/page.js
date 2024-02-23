"use client"

import Link from "next/link";

export default function Home() {
  return (
    <main className="d-flex flex-column gap-3 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
      <h1>Seja Bem-Vindo ao Praça R2!</h1>
      <p className="text-start fs-5 ms-3">Esse é um sistema criado para criar gerenciar praças de alimentação. Na próxima tela você poderá realizar login na sua praça ou criar uma praça caso ainda não tenha uma. <span className="text-danger fw-bold">ATENÇÃO!!!</span> Guarde bem o nome e a senha da sua praça, esses dados não podem ser facilmente recuperados. </p>
      <h3 className="text-secondary">Faça Login clicando no botão abaixo</h3>
      <Link className="btn btn-dark shadow fw-bold" href="/adm">Fazer Login</Link>
    </main>
  );
}
