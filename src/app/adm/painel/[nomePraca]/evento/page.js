"use client"

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import ContainerMain from "@/components/ContainerMain.jsx";
import { getDate } from "@/components/adm/painel/evento"
import { dadosPracaContext } from "@/contexts/dadosPracaContext";

export default function DadosEvento (){
    const today = getDate();
    const [eventData, setEventData] = useState({
        nome: "",
        local: "",
        dataInicio: today,
        dataTermino: today,
        horaInicio: "18:00",
        horaTermino: "21:00",
    });

    const { id } = useContext(dadosPracaContext);
    
    const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value, });
    };

	const router = useRouter();
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const {nome, senha, nova_senha, confirm_senha} = eventData;
        const nome_upper = nome.toUpperCase();

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
        <h1>Dados do Evento</h1>
        <p className="text-secondary fs-5">Preencha os dados do evento. Essas informações ficam visíveis para os usuários através do cardápio online.</p>
        <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
            <label className="text-start">
                Nome do Evento:
                <input className="form-control border-black" type="text" name="eventName" value={eventData.nome} onChange={handleChange} placeholder="Nome do Evento" required />
            </label>
            <label className="text-start">
                Local do Evento:
                <input className="form-control border-black" type="text" name="eventLocation" value={eventData.local} onChange={handleChange} placeholder="Local do Evento" required />
            </label>
            <label className="text-start">
                Data de Início:
                <input className="form-control border-black" type="date" name="startDate" value={eventData.dataInicio} onChange={handleChange} />
            </label>
            <label className="text-start">
                Data de Término:
                <input className="form-control border-black" type="date" name="endDate" value={eventData.dataTermino} onChange={handleChange} />
            </label>
            <label className="text-start">
                Hora de Início:
                <input className="form-control border-black" type="time" name="startTime" value={eventData.horaInicio} onChange={handleChange} />
            </label>
            <label className="text-start">
                Hora de Término:
                <input className="form-control border-black" type="time" name="endTime" value={eventData.horaTermino} onChange={handleChange} />
            </label>
            <button className="btn btn-dark">Salvar</button>
        </form>
      </ContainerMain>
    )
}