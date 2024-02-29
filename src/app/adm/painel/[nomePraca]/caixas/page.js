"use client"

import { useContext, useState } from "react";
import Link from "next/link"

import ContainerMain from "@/components/ContainerMain";
import { dadosPracaContext } from "@/contexts/dadosPracaContext";
import { gerarSenhaCaixa } from "@/components/adm/painel/caixas/index.js";


export default function Caixas (){
    const { nome, url, senha_caixa } = useContext(dadosPracaContext);
    const [senha, setSenha] = useState(senha_caixa);

	const handleSubmit = async (e) => {
		e.preventDefault();
        console.log("senha enviada ao server");
		if (senha != senha_caixa){
            if (senha){
                try {
                    const {data} = await axios.patch(URL_UPDATE_SENHA_CAIXA, {nome, senha, nova_senha:senha_criptografada })
                    
                    if (data.message){
                        alert("O nome informado não existe.")
                    }else{
                        alert("O cadastro foi atualizado com sucesso! Faça o login na página a seguir.")
                    }
                } catch (error) {
                    const message = error.response.data?.message;
                    if(message){
                        alert(message);
                    }else{
                        console.error(error);
                    }
                }
            }
        }else{
            alert("Senha salva!")
        }
	};

    return(
    <ContainerMain>
        <h1>{nome}</h1>
        <h3 className="text-secondary">Acesso aos Caixas</h3>
        <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
            <input className="form-control" name="senha" placeholder="Senha" type="text" onChange={e=>{setSenha(e.target.value)}} value={senha} required />
            <div className="btns d-flex gap-3 justify-content-between">
                <button className="btn btn-dark flex-grow-1" type="submit">Salvar</button>
                <button className="btn btn-dark flex-grow-1" type="button" onClick={()=>{setSenha(gerarSenhaCaixa())}}>Gerar Senha</button>
            </div>
        </form>
        <h4 className="mt-4">Acesse os Caixas através do link abaixo: </h4>
        <Link className="fs-5" href="/caixa/cadastrar" target="_blank">{`https://pracar2.vercel.app/caixa/${url}`}</Link>
      </ContainerMain>
    )
}