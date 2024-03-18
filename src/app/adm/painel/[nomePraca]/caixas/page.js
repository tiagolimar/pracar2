"use client"

import { useRouter } from "next/navigation";
import Link from "next/link"

import { useContext, useState } from "react";
import axios from "axios";

import ContainerMain from "@/components/ContainerMain";
import { dadosPracaContext } from "@/contexts/dadosPracaContext";
import { gerarSenhaCaixa } from "@/components/adm/painel/caixas";

import { URL_UPDATE_SENHA_CAIXA } from "@/components/URLs";

import BackHome from '@/components/adm/painel/BackHome';
import LoadingData from "@/components/LoadingData";

export default function Caixas (){
    const router = useRouter();
    const { dadosPraca } = useContext(dadosPracaContext);
    const { id, url, senha_caixa } = dadosPraca;
    const [senha, setSenha] = useState(senha_caixa);
    const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (senha != senha_caixa){
            if (senha){
                try {
                    setIsLoading(true);
                    const {data} = await axios.patch(URL_UPDATE_SENHA_CAIXA, {id, senha})
                    
                    if (data.message){
                        setIsLoading(false);
                        alert("Não foi possível salvar a senha.")
                    }else{
                        setIsLoading(false);
                        alert("Senha salva com sucesso.")
                        router.push(`/adm/painel/${url}`);
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
            router.push(`/adm/painel/${url}`);
            alert("Senha salva com sucesso.")
        }
	};

    return(
    <ContainerMain>
        <BackHome url={url}/>
        <h1>Acesso aos Caixas</h1>

        <p className="text-secondary fs-5">Configure o acesso para quem vai fazer o atendimento nos caixas.</p>
        <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
            <input className="form-control border-black" name="senha" placeholder="Senha" type="text" onChange={e=>{setSenha(e.target.value)}} value={senha} required />
            <div className="btns d-flex gap-3 justify-content-between">
                <button className="btn btn-secondary flex-grow-1" type="button" onClick={()=>{setSenha(gerarSenhaCaixa())}}>Gerar Senha</button>
                <button className="btn btn-dark flex-grow-1" type="submit">Salvar</button>
            </div>
        </form>
        <h4 className="mt-4">
            Acesse o {" "}
            <Link className="fs-5" href={`/caixa/${url}`} target="_blank">
                Sistema dos Caixas.
            </Link>
        </h4>
        <LoadingData on={isLoading} />
      </ContainerMain>
    )
}