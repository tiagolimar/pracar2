"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";

export default function AlterarSenha (){
	const router = useRouter();
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const nome = e.target.elements.nome.value;
		const senha = e.target.elements.senha.value;
		const nova_senha = e.target.elements.nova_senha.value;
		const confirm_senha = e.target.elements.confirm_senha.value;

		if (nome && senha && nova_senha && confirm_senha){
			if (nova_senha == confirm_senha){
				
				const response = await fetch(URL_CADASTRO, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ nome, senha, nova_senha })
				});

				const data = await response.json();
                
				if (data.message){
					alert("O nome informado não existe.")
				}else{
					alert("O cadastro foi atualizado com sucesso! Faça o login na página a seguir.")
					router.push('/adm');
				}
			}else{
				alert("As senhas não coincidem.")
			}
		}else{
			alert("Preencha todos os campos.")
		}
	};

    return(
    <main className="d-flex flex-column gap-3 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
        <h1>Praça R2</h1>
        <h3 className="text-secondary">Alteração de Senha</h3>
        <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
            <input className="form-control" name="nome" placeholder="Nome da praça" type="text" required />
            <input className="form-control" name="senha" placeholder="Senha" type="password" required />
            <input className="form-control" name="nova_senha" placeholder="Nova senha" type="password" required />
            <input className="form-control" name="confirm_senha" placeholder="Confirmar nova senha" type="password" required />
            <button className="btn btn-dark">Alterar Senha</button>
        </form>
        <div className="d-flex col-12 justify-content-between">
            <Link href="/adm">Fazer Login</Link>
            <Link href="/adm/cadastrar">Cadastrar</Link>
        </div>
      </main>
    )
}