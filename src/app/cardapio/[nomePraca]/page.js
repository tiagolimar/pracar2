import ContainerMain from "@/components/ContainerMain.jsx";

export default function Cardapio(){
    return(
        <ContainerMain>
            <h1>Bem-Vindo ao Cardápio Online</h1>
            <p>Faça o seu pedido!</p>
            <p className="text-secondary fw-bold">{"(página em desenvolvimento)".toLocaleUpperCase()}</p>
        </ContainerMain>
    )
}