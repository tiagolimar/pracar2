import ContainerMain from '@/components/ContainerMain';

export default function Caixa(){
    return(
        <ContainerMain>
            <h1>Sistema dos Caixas</h1>
            <p className="text-secondary">Faça login usando a senha enviado pelo administrador da praça.</p>
            <p className="text-secondary fw-bold">{"(página em desenvolvimento)".toLocaleUpperCase()}</p>
            <form action="" className="d-flex flex-column w-100 gap-3">
                <input nome="senha" type="password" className="form-control" placeholder="Senha" />
                <button className="btn btn-dark">Login</button>
            </form>
        </ContainerMain>
    )
}