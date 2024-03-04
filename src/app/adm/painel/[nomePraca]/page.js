"use client"

import { useContext } from "react";

import { dadosPracaContext } from "@/contexts/dadosPracaContext";
import "./page.css"


function ItemPainelHome ({info}){
    const { campo, valor } = info;
    return(
        <div className="painel-home-line d-flex gap-3">
            <h4 className="mt-1">{campo}</h4>
            <p className="fs-4">{valor}</p>
        </div>
    )
}

export default function PracaPage() {
    const { nome, url } = useContext(dadosPracaContext);

    const infoPraca = {
        cabecalho: "Informações da Praca",
        infos:[
            {campo:"Nome da praça:", valor:nome},
            {campo:"Link de acesso ao painel:", valor:nome},
        ]
    };

    const infoEvento = {
        cabecalho:"Informações do Evento", 
        infos:[
            {campo:"Nome do Evento:", valor:nome},
            {campo:"Local do Evento:", valor:nome},
            {campo:"Data de Início:", valor:nome},
            {campo:"Data de Término:", valor:nome},
            {campo:"Hora de Início:", valor:nome},
            {campo:"Hora de Término:", valor:nome},
        ]
    };

    const infoPagamento = {
        cabecalho:"Informações de Pagamento", 
        infos:[
            {campo:"Chave Pix A:", valor:nome},
            {campo:"Nome A:", valor:nome},
            {campo:"Chave Pix B:", valor:nome},
            {campo:"Nome B:", valor:nome},
        ]
    };

    const resumo = [infoPraca, infoEvento, infoPagamento];

    return (    
        <div className="painel-home w-90">
            <h1 className="text-center fs-3">PAINEL DE GERENCIAMENTO</h1>
            <div className="painel-home-section  m-4 p-4 alert alert-success">
                <p className="text-start fs-5 ms-3">
                Bem-vindo ao painel de gerenciamento. Você pode montar o cardápio que ficará disponível para todos. Além disso, é possível configurar as informações do evento onde a praça estará presente. Também é possível gerar relatórios dos pedidos realizados. Acesse o menu lateral para utilizar essas funções!</p>
            </div>
            <div className="painel-home-section border border-black rounded m-4 p-4">
                <h2 className="text-wrap">{`Resumo de Informações`}</h2>
                <hr />
                {resumo.map(({cabecalho, infos},id)=>{
                    return(
                        <div key={id}>
                            <h3>{cabecalho}</h3>
                            {infos.map((info,id)=>{
                                return <ItemPainelHome key={id} info={info} />
                            })}
                            {+id == resumo.length-1? null:<hr />}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}