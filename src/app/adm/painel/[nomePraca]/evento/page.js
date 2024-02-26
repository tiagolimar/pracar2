"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from 'react';
// import bcrypt from "bcryptjs";
// import axios from "axios";

// import { URL_UPDATE } from "../url.js";

export default function DadosEvento (){
    const [eventData, setEventData] = useState({
        eventName: '',
        eventLocation: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
      });
    
      const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value, });
      };

	const router = useRouter();
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const nome = e.target.elements.nome.value.toUpperCase();
		const senha = e.target.elements.senha.value;
		const nova_senha = e.target.elements.nova_senha.value;
		const confirm_senha = e.target.elements.confirm_senha.value;

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
    <main className="container-main d-flex flex-column gap-3 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
        <h1>{"Nome da Praça"}</h1>
        <h3 className="text-secondary">Dados do Evento</h3>
        <p>Explicação sobre os dados do evento</p>
        <form method="post" onSubmit={handleSubmit} className="w-100 d-flex flex-column gap-3">
            <label className="text-start">
                Nome do Evento:
                <input className="form-control" type="text" name="eventName" value={eventData.eventName} onChange={handleChange} required />
            </label>
            <label className="text-start">
                Local do Evento:
                <input className="form-control" type="text" name="eventLocation" value={eventData.eventLocation} onChange={handleChange} required />
            </label>
            <label className="text-start">
                Data de Início:
                <input className="form-control" type="date" name="startDate" value={eventData.startDate} onChange={handleChange} required />
            </label>
            <label className="text-start">
                Data de Término:
                <input className="form-control" type="date" name="endDate" value={eventData.endDate} onChange={handleChange} required />
            </label>
            <label className="text-start">
                Hora de Início:
                <input className="form-control" type="time" name="startTime" value={eventData.startTime} onChange={handleChange} required />
            </label>
            <label className="text-start">
                Hora de Término:
                <input className="form-control" type="time" name="endTime" value={eventData.endTime} onChange={handleChange} required />
            </label>
            <button className="btn btn-dark">Salvar</button>
        </form>
      </main>
    )
}