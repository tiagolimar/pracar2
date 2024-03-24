"use client"

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { dadosPracaContext } from '@/contexts/dadosPracaContext';
import { URL_PRODUTOS } from '@/components/URLs';
import LoadingData from '@/components/LoadingData';
import ItemProduto from '@/components/adm/painel/cardapio/ItemProduto';
import Filtros from '@/components/adm/painel/cardapio/Filtros';

export default function Cardapio (){
    const [isLoading, setIsLoading] = useState(false);
    const [produtos, setProdutos] = useState([]);

    const { dadosPraca } = useContext(dadosPracaContext);
    const { id } = dadosPraca;

    useEffect(()=>{
        async function obterProdutos(){
            try {
                setIsLoading(true);
                const {data} = await axios.get(URL_PRODUTOS);
                
                if (data.message){
                    setIsLoading(false);
                    alert("Não foi possível obter os dados.");
                }else{
                    setProdutos(data)
                    setIsLoading(false);
                }
            } catch (error) {
                if(error.response){
                    const message = error.response.data?.message;
                    alert(message);
                }else{
                    console.error(error);
                }
            }
        }

        obterProdutos()
    },[]);


    return(
        <div className='container mt-4'>
            <Filtros />
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 w-100 p-4 g-2">
                {produtos.map((produto,id)=>(
                    <ItemProduto key={id} produto={produto} />
                ))}
            </div>
            <LoadingData on={isLoading} />            
        </div>
    )
}