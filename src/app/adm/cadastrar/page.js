"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs';

import { URL_CADASTRO } from './../url';
import axios from 'axios';

export default function Cadastrar() {
	const router = useRouter();
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const nome = e.target.elements.nome.value;
		const senha = e.target.elements.senha.value;
		const confirm_senha = e.target.elements.confirm_senha.value;

		if (nome && senha && confirm_senha){
			if (senha == confirm_senha){
				const senha_criptografada = await bcrypt.hash(senha, 10);

				try {
					const data = await axios.post(URL_CADASTRO,{ nome, senha:senha_criptografada })
			
					if (data.status!=200){
						alert("O nome informado já existe.")
					}else{
						alert("O cadastro foi realizado com sucesso! Faça o login na página a seguir.")
						router.push('/adm/login');
					}
				} catch (error) {
					console.error(error)
				}
			}else{
				alert("As senhas não coincidem.")
			}
		}else{
			alert("Preencha todos os campos.")
		}
	};

  return (
	<main className="d-flex flex-column gap-3 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
		<h1>Praça R2</h1>
		<h3 className="text-secondary">Cadastro</h3>
		<form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
			<input className="form-control" name="nome" placeholder="Nome da praça" type="text" required />
			<input className="form-control" name="senha" placeholder="Senha" type="password" minLength={6} required />
			<input className="form-control" name="confirm_senha" placeholder="Confirmar nova senha" type="password" minLength={6} required />
			<button className="btn btn-dark" type="submit">Cadastrar</button>
		</form>
		<div className="d-flex col-12 justify-content-between">
			<Link href="/adm">Fazer Login</Link>
			<Link href="/adm/alterar_senha">Alterar Senha</Link>
		</div>
	</main>
  );
}