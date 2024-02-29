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
            Bem-Vindo ao painel de gerenciamento da sua praça de alimentação.
            Aqui você pode montar o cardápio que ficará disponível a todos.
            Aqui você pode configurar as informações do evento onde haverá a praça.
            Por aqui você também pode gerar relatórios dos pedidos gerados.</p>
            <p className="text-start fs-5 ms-3">
            Acesse o menu lateral para utilizar essas funções!
            </p>
        </ContainerMain>
    );
}