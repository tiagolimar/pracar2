
export const ItemProduto = ({ produto }) => {
    return (
        produto?<div className="cartao-produto d-flex flex-column mt-2 border-bottom">
            <img src={produto.img} alt={produto.nome} className='rounded-4 shadow-sm mb-2'/>
            <header className='d-flex justify-content-between gap-2'>
                <h2>{produto.nome}</h2>
                <p>R$ {produto.preco}</p>
            </header>
            <p>{produto.descricao}</p>
        </div>:null
    );
};