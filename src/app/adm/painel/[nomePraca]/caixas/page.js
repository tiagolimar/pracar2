"use client"

import { useRouter } from "next/navigation";
import Link from "next/link"
import bcrypt from "bcryptjs";
import axios from "axios";

import { URL_UPDATE } from "../url.js";
import ContainerMain from "@/components/ContainerMain.jsx";

export default function Caixas (){
	const router = useRouter();
	q
    
	const handleSubmit = async (e) => {
		e.preventDefault();
		const senha = e.target.elements.senha.value;

		// if (nome && senha && nova_senha && confirm_senha){
		// 	if (nova_senha == confirm_senha){
		// 		const senha_criptografada = await bcrypt.hash(nova_senha, 10);

		// 		try {
		// 			const {data} = await axios.patch(URL_UPDATE, {nome, senha, nova_senha:senha_criptografada })
					
		// 			if (data.message){
		// 				alert("O nome informado não existe.")
		// 			}else{
		// 				alert("O cadastro foi atualizado com sucesso! Faça o login na página a seguir.")
		// 				router.push("/adm/login");
		// 			}
		// 		} catch (error) {
        //             const message = error.response.data?.message;
        //             if(message){
        //                 alert(message);
        //             }else{
        //                 console.error(error);
        //             }
		// 		}
		// 	}else{
		// 		alert("As senhas novas não coincidem.")
		// 	}
		// }else{
		// 	alert("Preencha todos os campos!")
		// }
	};

    return(
    <ContainerMain>
        <h1>{"Nome da Praça"}</h1>
        <h3 className="text-secondary">Acesso aos Caixas</h3>
        <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
            <input className="form-control" name="senha" placeholder="Senha" type="text" required />
            <div className="btns d-flex justify-content-between">
                <button className="btn btn-dark col-5">Salvar</button>
                <button className="btn btn-dark col-5">Gerar Senha</button>
            </div>
        </form>
        <h4 className="mt-4">Acesse os Caixas através do link abaixo: </h4>
        <Link className="fs-5" href="/caixa/cadastrar">{"https://pracar2.vercel.app/caixa/minhaPraca"}</Link>

      </ContainerMain>
    )
}