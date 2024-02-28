"use client"

import ContainerMain from '@/components/ContainerMain.jsx';

export default function PracaPage() {
    return (
        <ContainerMain >
            <h1 className='mb-4'>Bem vindo ao painel de gerenciamento!</h1>
            <p className="text-start fs-5 ms-3">
            Logo abaixo edite as informações do evento (essas informações aparecem no cardápio e definem quando eleficará disponível pra todos).</p>
            <p className="text-start fs-5 ms-3">
            Acesse o menu lateral para utilizar as outras áreas do menu de gerenciamento
            </p>
        </ContainerMain>
    );
}