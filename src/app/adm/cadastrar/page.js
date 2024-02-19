"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Cadastrar() {
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nome = e.target.elements.nome.value;
    const senha = e.target.elements.senha.value;
    const confirm_senha = e.target.elements.confirm_senha.value;

    if (!(nome && senha && confirm_senha)){
      alert("Preencha todos os campos.")
      return null;
    }

    if (senha != confirm_senha){
      alert("As senhas não coincidem.")
      return null;
    }
    // const response = await fetch('/api/cadastrar', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ nome, senha, confirm_senha })
    // });
    // const data = await response.json();

    const data = {
      success: true,
      message: 'Login realizado com sucesso!',
      type: 'alert-success'
    };

    if (data.success){
      alert("O cadastro foi realizado com sucesso! Faça o login na página a seguir")
      router.push('/adm');
    }
  };

  return (
    <main className="d-flex flex-column gap-3 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
      <h1>Praça R2</h1>
      <h3 className="text-secondary">Cadastro</h3>
      <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
        <input className="form-control" name="nome" placeholder="Nome da praça" type="text" />
        <input className="form-control" name="senha" placeholder="Senha" type="password" />
        <input className="form-control" name="confirm_senha" placeholder="Confirmar nova senha" type="password" />
        <button className="btn btn-dark" type="submit">Cadastrar</button>
      </form>
      <div className="d-flex col-12 justify-content-between">
        <Link href="/adm">Fazer Login</Link>
        <Link href="/adm/alterar_senha">Alterar Senha</Link>
      </div>
    </main>
  );
}