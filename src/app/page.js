"use client"

import Link from "next/link";

export default function Home() {
  return (
    <main className="d-flex flex-column gap-3 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
      <h1>Seja Bem-Vindo ao Praça R2!</h1>
      <h3 className="text-secondary">Faça Login clicando no botão abaixo</h3>
      <Link className="btn btn-dark shadow fw-bold" href="/adm">Fazer Login</Link>
    </main>
  );
}
