"use client"

import { useContext, useState } from "react";
import axios from "axios";

import ContainerMain from "@/components/ContainerMain";
import { dadosPracaContext } from "@/contexts/dadosPracaContext";

import { URL_EVENTO } from '@/components/URLs';

import BackHome from "@/components/adm/painel/BackHome";
import LoadingData from '@/components/LoadingData';

export default function DadosEvento (){
    const [isLoading, setIsLoading] = useState(false);

    const { dadosPraca, dadosEvento } = useContext(dadosPracaContext);
    const { id, url } = dadosPraca;

    let {nome, local, dataInicio, dataTermino, horaInicio, horaTermino } = dadosEvento;
    dataInicio = dataInicio?.substring(0,10);
    dataTermino = dataTermino?.substring(0,10);

    const [formData, setFormData] = useState({
        id,
        nome,
        local,
        dataInicio,
        dataTermino,
        horaInicio,
        horaTermino
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
	
	const handleSubmit = async (e) => {
		e.preventDefault();

        const inicioDateTime = new Date(`${formData.dataInicio}T${formData.horaInicio}`);
        const terminoDateTime = new Date(`${formData.dataTermino}T${formData.horaTermino}`);
        
        if (terminoDateTime < inicioDateTime) {
            e.target.elements.dataTermino.focus();
            alert("A data e hora de término não podem ser anteriores à data e hora de início.");
            return;
        }

		try {
            setIsLoading(true);
			const {data} = await axios.patch(URL_EVENTO, { ...formData });
            
			if (data.message){
                setIsLoading(false);
				alert("Não foi possível atualizar os dados.");
			}else{
                setIsLoading(false);
				alert("Os dados foram atualizados com sucesso.");
                window.location.href = `/adm/painel/${url}`;
			}
		} catch (error) {
            if(error.response){
                const message = error.response.data?.message;
                alert(message);
            }else{
                console.error(error);
            }
		}
	};

    return(
    <ContainerMain>
        <BackHome url={url}/>
        <h1>Dados do Evento</h1>
        <p className="text-secondary fs-5">Preencha os dados do evento. Essas informações ficam visíveis para os usuários no cardápio online.</p>
        <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
            <label className="text-start"> Nome do Evento:
                <input className="form-control border-black" type="text" name="nome" value={formData.nome} 
                onChange={handleChange} placeholder="Nome do Evento" required />
            </label>
            <label className="text-start"> Local do Evento:
                <input className="form-control border-black" type="text" name="local" value={formData.local} 
                onChange={handleChange} placeholder="Local do Evento" required />
            </label>
            <label className="text-start"> Data de Início:
                <input className="form-control border-black" type="date" name="dataInicio" value={formData.dataInicio} 
                onChange={handleChange} />
            </label>
            <label className="text-start"> Data de Término:
                <input className="form-control border-black" type="date" name="dataTermino" value={formData.dataTermino} 
                onChange={handleChange} />
            </label>
            <label className="text-start"> Hora de Início:
                <input className="form-control border-black" type="time" name="horaInicio" value={formData.horaInicio} 
                onChange={handleChange} />
            </label>
            <label className="text-start"> Hora de Término:
                <input className="form-control border-black" type="time" name="horaTermino" value={formData.horaTermino} 
                onChange={handleChange} />
            </label>
            <button className="btn btn-dark">Salvar</button>
        </form>
        <LoadingData on={isLoading} />
      </ContainerMain>
    )
}