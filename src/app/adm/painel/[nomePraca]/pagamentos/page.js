"use client"

import { useState, useContext } from "react";
import axios from "axios";

import ContainerMain from "@/components/ContainerMain";
import { dadosPracaContext } from "@/contexts/dadosPracaContext";
import { URL_PAGAMENTOS } from "@/components/URLs";

import BackHome from '@/components/adm/painel/BackHome';
import LoadingData from '@/components/LoadingData';

export default function Pagamentos(){
    const { dadosPraca, dadosPagamentos } = useContext(dadosPracaContext);
    const [isLoading, setIsLoading] = useState(false);
    const { id, url } = dadosPraca;

    const { chavePixA, nomePixA, chavePixB, nomePixB } = dadosPagamentos;

    const [formData, setFormData] = useState({
        id,
        nomePixA,
        nomePixB,
        chavePixA,
        chavePixB,
    }); 

    async function handleSubmit (e){
		e.preventDefault();
		try {
            setIsLoading(true);
			const {data} = await axios.patch(URL_PAGAMENTOS, { ...formData });
            
			if (data.message){
                setIsLoading(false);
				alert("Não foi possível atualizar os dados.");
			}else{
                setIsLoading(false);
                alert("Os dados foram atualizados com sucesso.");
                window.location.href = `/adm/painel/${url}`;
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return(
        <ContainerMain>
            <BackHome url={url} />
            <h1>Pagamento Via Pix</h1>
            <p className="text-secondary fs-5">Cadastre aqui as suas chaves pix para que os usuários possam efetuar pagamentos via Pix</p>
            <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
                <h4 className="text-start fs-5">Pix 1 <span className="text-secondary fs-6">(opcional)</span></h4>
                <input className="form-control border-black" name="chavePixA" placeholder="Chave Pix A" type="text" onChange={handleChange} value={formData.chavePixA} />
                <input className="form-control border-black" name="nomePixA" placeholder="Nome A" type="text" onChange={handleChange} value={formData.nomePixA} />

                <hr />
                <h4 className="text-start fs-5">Pix 2 <span className="text-secondary fs-6">(opcional)</span></h4>
                <input className="form-control border-black" name="chavePixB" placeholder="Chave Pix B" type="text" onChange={handleChange} value={formData.chavePixB} />
                <input className="form-control border-black" name="nomePixB" placeholder="Nome B" type="text" onChange={handleChange} value={formData.nomePixB} />
                <button className="btn btn-dark flex-grow-1" type="submit">Salvar</button>
            </form>
            <LoadingData on={isLoading} />
        </ContainerMain>
    )
}