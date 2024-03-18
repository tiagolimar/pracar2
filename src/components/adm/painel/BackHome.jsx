import Link from 'next/link';

export default function BackHome({url}){
    const url_route = window.location.origin+`/adm/painel/${url}`  
    return<Link href={url_route}>Voltar ao Painel</Link>
}