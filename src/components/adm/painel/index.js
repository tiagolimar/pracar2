import Link from "next/link";
import { useParams } from "next/navigation";

import { COOKIE_PRACA } from '@/components/URLs/cookies'

export function title(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function getCookie (name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length ===  2) return parts.pop().split(';').shift();
}

export function ItensPainel(){
    const { nomePraca } = useParams();
    const RotasPainel = [
        { nome:"Home", rota:`/adm/painel/${nomePraca}` },
        { nome:"Dados do Evento", rota:`/adm/painel/${nomePraca}/evento` },
        { nome:"Cardápio", rota:`/adm/painel/${nomePraca}/cardapio` },
        { nome:"Caixas", rota:`/adm/painel/${nomePraca}/caixas` },
        { nome:"Pagamentos", rota:`/adm/painel/${nomePraca}/pagamentos` },
        { nome:"Relatórios", rota:`/adm/painel/${nomePraca}/relatorios` },
    ]

    function EraseCookie(e,name) {
        if (window.confirm("Você realmente quer sair?")){
            document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }else{
            e.preventDefault();
        }
    }

    return (
        <ul className="navbar-nav gap-3">
            {RotasPainel.map((r, id) => {
                return (
                    <li key={id} className="nav-item shadow-sm">
                        <Link className="btn btn-lg btn-outline-dark w-100" href={r.rota}>
                            {r.nome}
                        </Link>
                    </li>
                );
            })}
            <hr/>
            <Link className="btn btn-lg btn-outline-danger w-100" href="/adm/login" onClick={(e)=>EraseCookie(e,COOKIE_PRACA)}>
                Desconectar
            </Link>
        </ul>
    );
}
