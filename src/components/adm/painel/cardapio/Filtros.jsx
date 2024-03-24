export default function Filtros(){
    return(
        <div className="d-flex flex-column gap-2 border border-black rounded shadow-sm p-2 ms-4 me-4 mt-4">
            <h1 className="text-center fs-2" >SELEÇÃO DO CARDÁPIO</h1>
            <div className="input-group">
                <input className="form-control border-black" type="text" placeholder="Pesquisar" />
                <button className="btn btn-dark">Procurar</button>
            </div>
            <div className="d-flex gap-2">
                <div className="w-50">
                    <label htmlFor="ordenar">Ordenar por:</label>
                    <select className="form-select border-black" id="ordenar" aria-label="Selecione a regra de ordenação dos produtos">
                        <option value="menor_preco">Menor preço</option>
                        <option value="maior_preco">Maior preço</option>
                        <option value="mais_pedidos">Mais pedido</option>
                    </select>
                </div>
                <div className="w-50">
                    <label htmlFor="filtrar">Categoria:</label>
                    <select className="form-select border-black" id="filtrar" aria-label="Selecione uma categoria para filtrar resultados">
                        <option value="todas">Todas</option>
                        <option value="categoria1">Categoria 1</option>
                        <option value="categoria2">Categoria 2</option>
                        <option value="categoria3">Categoria 3</option>
                    </select>
                </div>
            </div>
        </div>
    )
}