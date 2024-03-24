"use client"

import { useContext } from "react";
import Link from "next/link.js";

import { dadosPracaContext } from "@/contexts/dadosPracaContext";
import CopyLinkButton from "@/components/adm/CopyLinkButton";
import CopyButton from "@/components/adm/CopyButton";
import getResume from './pageResume';
import { defaultValue } from './pageResume';
import "./page.css";

function ItemPainelHome ({info}){
    const { campo, valor, tipo } = info;
    const secondary = valor==defaultValue? 'text-secondary' : '';
    
    function LinkValor({valor}){
        return valor? <Link className="btn btn-outline-primary m-2 flex-grow-1" href={valor} target="_blank">Acessar</Link>:undefined
    }

    return(
        <div className="painel-home-line d-flex flex-column mt-2">
            <div className="d-flex flex-row flex-start align-items-center">
                <p className="fs-5 ps-2 fw-bold">{campo}</p>
                { tipo == "link"? null : <CopyButton value={valor}/> }
            </div>
            {tipo == "link" ?
                <div className="d-flex ms-2">
                    <CopyLinkButton linkToCopy={valor} />
                    <LinkValor valor={valor == window.location.href?"":valor} />
                </div>
                :
                    <p className={"painel-home-line-valor fs-5 ms-2 text-truncate "+secondary}>{valor}</p>
            }
        </div>
    )
}

export default function PracaPage() {
    const { dadosPraca, dadosEvento, dadosPagamentos } = useContext(dadosPracaContext);
    const resumo = getResume({ dadosPraca, dadosEvento, dadosPagamentos });

    function BtnPencil(){
        return(
            <button className="navbar-toggler border-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <i className="bi bi-pencil text-black" style={{"fontSize": "1.5em"}}></i>
            </button>
        )
    }

    return (
        <div className="painel-home w-100 d-flex flex-column align-items-center bg-body-tertiary">
            <h1 className="text-center fs-3">Painel de Gerenciamento</h1>

            <div className="painel-home-section row row-cols-md-3 g-2 p-4 w-100">
                {resumo.map(({cabecalho, infos, url},id)=>{
                    return(
                        <div key={id} className="p-2 w-md-75">
                            <div className="shadow-sm mb-3 p-2 bg-white rounded-3">
                                <header className="d-flex gap-3 justify-content-center">
                                    <h3 className="text-center">{cabecalho}</h3>
                                    {url && <Link href={url}>
                                        <i className="bi bi-pencil text-black" style={{"fontSize": "1.5em"}}></i>
                                    </Link> || <BtnPencil></BtnPencil>}
                                </header>
                                <hr />
                                {infos.map((info,id)=>{
                                    return <ItemPainelHome key={id} info={info} />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}