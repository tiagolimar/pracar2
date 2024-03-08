"use client"

import { useContext } from "react";
import Link from "next/link.js";

import { dadosPracaContext } from "@/contexts/dadosPracaContext";
import CopyLinkButton from "@/components/adm/CopyLinkButton.jsx";
import "./page.css"

function ItemPainelHome ({info}){
    const { campo, valor, tipo } = info;
    
    function LinkValor({valor}){
        return valor? <Link className="btn btn-outline-primary m-2 flex-grow-1" href={valor} target="_blank">Acessar</Link>:undefined
    }

    return(
        <div className="painel-home-line d-flex flex-column mt-2">
            <p className="fs-5 ps-2 fw-bold border-secondary border-bottom rounded">{campo}</p>
            {tipo == "link" ?
                <div className="d-flex ms-2">
                    <CopyLinkButton linkToCopy={valor} />
                    <LinkValor valor={valor == window.location.href?"":valor} />
                </div>
                :
                <p className="painel-home-line-valor fs-5 text-truncate">{valor}</p>}
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
            {tipo:"link", campo:"Painel de gerenciamento:", valor: window.location.href},
            {tipo:"link", campo:"Sistema dos Caixas:", valor:`${window.location.origin}/caixa/${url}`},
            {tipo:"link", campo:"Cardápio Online:", valor:`${window.location.origin}/cardapio/${url}`},
        ]
    };

    const infoEvento = {
        cabecalho:"Informações do Evento",
        url:`/adm/painel/${url}/evento`,
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
        cabecalho:"Dados de Pagamento",
        url:`/adm/painel/${url}/pagamentos`,
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

            <div className="painel-home-section border border-secondary rounded p-4">
                {resumo.map(({cabecalho, infos, url},id)=>{
                    return(
                        <div key={id} className="border border-black shadow rounded mb-3 p-2">
                            <header className="d-flex justify-content-around">
                                <h3 className="text-center">{cabecalho}</h3>
                                {url && <Link href={url}>
                                    <i className="bi bi-pencil text-primary" style={{"font-size": "1.5em"}}></i>
                                </Link>}
                            </header>
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