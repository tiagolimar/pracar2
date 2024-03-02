"use client"

import { useContext } from "react";

import ContainerMain from "@/components/ContainerMain.jsx";
import { dadosPracaContext } from "@/contexts/dadosPracaContext";

export default function PracaPage() {
    const { nomeDaPraca } = useContext(dadosPracaContext);
    return (
        <ContainerMain >
            <h1 className="fs-2">{nomeDaPraca}</h1>
            <h2 className="fs-3">Painel de Gerenciamento</h2>
            <p className="text-start fs-5 ms-3">
            Bem-vindo ao painel de gerenciamento. Você pode montar o cardápio que ficará disponível para todos. Além disso, é possível configurar as informações do evento onde a praça estará presente. Também é possível gerar relatórios dos pedidos realizados.</p>
            <p className="text-start fs-5 ms-3">
            Acesse o menu lateral para utilizar essas funções!
            </p>
        </ContainerMain>
    );
}