"use client"

import { useRouter } from "next/navigation";
import Link from "next/link"
import { useState } from "react";
import bcrypt from "bcryptjs";
import axios from "axios";

import { URL_UPDATE } from "@/components/URLs";
import ContainerMain from "@/components/ContainerMain";
import WakeUpServer from "@/components/WakeUpServer";
import LoadingData from "@/components/LoadingData";
import BackHome from "@/components/adm/painel/BackHome";

export default function AlterarSenha (){
	const router = useRouter();
    
    const [isLoading, setIsLoading] = useState(false);
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const nome = e.target.elements.nome.value.toUpperCase();
		const senha = e.target.elements.senha.value;
		const nova_senha = e.target.elements.nova_senha.value;
		const confirm_senha = e.target.elements.confirm_senha.value;

		if (nome && senha && nova_senha && confirm_senha){
			if (nova_senha == confirm_senha){
				const senha_criptografada = await bcrypt.hash(nova_senha, 10);

				try {
                    setIsLoading(true);
					const {data} = await axios.patch(URL_UPDATE, {nome, senha, nova_senha:senha_criptografada })
					
					if (data.message){
                        setIsLoading(false);
						alert("O nome informado não existe.")
					}else{
                        setIsLoading(false);
                        alert("O cadastro foi atualizado com sucesso! Faça o login na página a seguir.")
						router.push("/adm/login");
					}
				} catch (error) {
                    const message = error.response.data?.message;
                    if(message){
                        alert(message);
                    }else{
                        console.error(error);
                    }
				}
			}else{
				alert("As senhas novas não coincidem.")
			}
		}else{
			alert("Preencha todos os campos!")
		}
	};

    return(
		<ContainerMain>
            <BackHome url={url}/>
			<h1>Praça R2</h1>
			<h3 className="text-secondary">Alteração de Senha</h3>
			<form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
				<input className="form-control" name="nome" placeholder="Nome da praça" 
					type="text" 
					required />
				<input className="form-control" name="senha" placeholder="Senha" type="password" required />
				<input className="form-control" name="nova_senha" placeholder="Nova senha" type="password" required />
				<input className="form-control" name="confirm_senha" placeholder="Confirmar nova senha" type="password" required />
				<button className="btn btn-dark">Alterar Senha</button>
			</form>
			<div className="d-flex col-12 justify-content-between">
				<Link href="/adm">Fazer Login</Link>
				<Link href="/adm/cadastrar">Cadastrar</Link>
			</div>
            <WakeUpServer />
            <LoadingData on={isLoading} />
		</ContainerMain>
    )
}