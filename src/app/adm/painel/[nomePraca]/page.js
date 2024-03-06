"use client"

import { useContext } from "react";

import { dadosPracaContext } from "@/contexts/dadosPracaContext";
import "./page.css"

function ItemPainelHome ({info}){
    const { campo, valor } = info;
    return(
        <div className="painel-home-line d-flex flex-column">
            <p className="fs-5 fw-bold border-black  border-bottom rounded">{campo}</p>
            <p className="painel-home-line-valor fs-5 text-truncate">{valor}</p>
        </div>
    )
}

export default function PracaPage() {
    const { dadosPraca, dadosEvento, dadosPagamentos } = useContext(dadosPracaContext);
    const { nome, url } = dadosPraca;
    const { chavePixA, nomePixA, chavePixB, nomePixB } = dadosPagamentos;
    let { local, dataInicio, dataTermino, horaInicio, horaTermino } = dadosEvento;

    dataInicio = dataInicio?.substring(0,10);
    dataTermino = dataTermino?.substring(0,10);

    const infoPraca = {
        cabecalho: "Informações da Praça",
        infos:[
            {campo:"Nome da praça:", valor:nome},
            {campo:"Painel de gerenciamento:", valor:`/adm/painel/${url}`},
            {campo:"Sistema dos Caixas:", valor:`/adm/painel/${url}`},
            {campo:"Cardápio Online:", valor:`/adm/painel/${url}`},
        ]
    };

    const infoEvento = {
        cabecalho:"Informações do Evento", 
        infos:[
            {campo:"Nome do Evento:", valor:dadosEvento.nome},
            {campo:"Local do Evento:", valor:local},
            {campo:"Data de Início:", valor:dataInicio},
            {campo:"Data de Término:", valor:dataTermino},
            {campo:"Hora de Início:", valor:horaInicio},
            {campo:"Hora de Término:", valor:horaTermino},
        ]
    };

    const infoPagamento = {
        cabecalho:"Informações de Pagamento", 
        infos:[
            {campo:"Chave Pix A:", valor:chavePixA},
            {campo:"Nome A:", valor:nomePixA},
            {campo:"Chave Pix B:", valor:chavePixB},
            {campo:"Nome B:", valor:nomePixB},
        ]
    };

    const resumo = [infoPraca, infoEvento, infoPagamento];

    return (    
        <div className="painel-home w-90">
            <h1 className="text-center fs-3">RESUMO DE INFORMAÇÕES</h1>

            <div className="painel-home-section border border-black rounded p-4">
                {resumo.map(({cabecalho, infos},id)=>{
                    return(
                        <div key={id} className="border border-secondary shadow rounded mb-3 p-2">
                            <h3 className="text-center">{cabecalho}</h3>
                            <hr />
                            {infos.map((info,id)=>{
                                return <ItemPainelHome key={id} info={info} />
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}